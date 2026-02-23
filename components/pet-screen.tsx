"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import type { RegenmonData } from "@/lib/regenmon"
import { TYPE_CONFIG, saveRegenmon } from "@/lib/regenmon"
import { loadMemories, extractMemories, addMemory } from "@/lib/memory"
import type { Memory } from "@/lib/memory"
import { generatePetResponse } from "@/lib/chat"
import { StatBar } from "@/components/stat-bar"
import { ChatContainer, type ChatMessage } from "@/components/chat-bubble"
import { MemoryIndicator } from "@/components/memory-indicator"
import { FloatingTextLayer, useFloatingText } from "@/components/floating-text"

interface PetScreenProps {
  data: RegenmonData
  onUpdate: (data: RegenmonData) => void
  onReset: () => void
}

let msgId = 0

export function PetScreen({ data, onUpdate, onReset }: PetScreenProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [actionFeedback, setActionFeedback] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [memories, setMemories] = useState<Memory[]>([])
  const config = TYPE_CONFIG[data.type]
  const floating = useFloatingText()

  useEffect(() => {
    setMemories(loadMemories())
  }, [])

  const showFeedback = useCallback((message: string) => {
    setActionFeedback(message)
    setIsAnimating(true)
    setTimeout(() => {
      setActionFeedback(null)
      setIsAnimating(false)
    }, 1500)
  }, [])

  function clamp(val: number, min: number, max: number) {
    return Math.max(min, Math.min(max, val))
  }

  function spawnStatChange(label: string, delta: number, color: string) {
    if (delta > 0) {
      floating.spawn(`+${delta} ${label}`, color)
    } else if (delta < 0) {
      floating.spawn(`${delta} ${label}`, "#ff6b6b")
    }
  }

  function handleFeed() {
    const hungerDelta = Math.min(15, 100 - data.hunger)
    const energyDelta = Math.min(5, 100 - data.energy)
    const updated: RegenmonData = {
      ...data,
      hunger: clamp(data.hunger + 15, 0, 100),
      energy: clamp(data.energy + 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Mmmm... delicioso!")
    if (hungerDelta > 0) spawnStatChange("Hambre", hungerDelta, "#209cee")
    if (energyDelta > 0) setTimeout(() => spawnStatChange("Energia", energyDelta, "#ffdd57"), 300)
  }

  function handlePlay() {
    const happinessDelta = Math.min(15, 100 - data.happiness)
    const updated: RegenmonData = {
      ...data,
      happiness: clamp(data.happiness + 15, 0, 100),
      energy: clamp(data.energy - 10, 0, 100),
      hunger: clamp(data.hunger - 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Que divertido!")
    if (happinessDelta > 0) spawnStatChange("Felicidad", happinessDelta, "#4cd964")
    setTimeout(() => spawnStatChange("Energia", -10, "#ff6b6b"), 300)
  }

  function handleSleep() {
    const energyDelta = Math.min(20, 100 - data.energy)
    const updated: RegenmonData = {
      ...data,
      energy: clamp(data.energy + 20, 0, 100),
      happiness: clamp(data.happiness - 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Zzz... descansando")
    if (energyDelta > 0) spawnStatChange("Energia", energyDelta, "#ffdd57")
    setTimeout(() => spawnStatChange("Felicidad", -5, "#ff6b6b"), 300)
  }

  function handleChatSend(text: string) {
    const userMsg: ChatMessage = {
      id: ++msgId,
      text,
      sender: "user",
      timestamp: Date.now(),
    }

    // Extract and save memories from user message
    const extracted = extractMemories(text)
    let currentMemories = memories
    for (const mem of extracted) {
      currentMemories = addMemory(mem)
    }
    if (extracted.length > 0) {
      setMemories(currentMemories)
    }

    // Generate pet response using memories
    const responseText = generatePetResponse(text, data, currentMemories)
    const petMsg: ChatMessage = {
      id: ++msgId,
      text: responseText,
      sender: "pet",
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMsg, petMsg])
  }

  const mood = data.happiness > 70 ? "Feliz" : data.happiness > 40 ? "Normal" : "Triste"

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-5">
      <FloatingTextLayer items={floating.items} />

      {/* Header */}
      <header className="w-full max-w-lg flex items-center justify-between animate-slide-up">
        <div className="flex items-center gap-3">
          <h1 className="text-xs" style={{ color: config.colorHex }}>
            {"🥚 Regenmon"}
          </h1>
          <MemoryIndicator memories={memories} color={config.colorHex} />
        </div>
        <button
          type="button"
          className="nes-btn is-error"
          style={{ fontSize: "9px", padding: "4px 10px" }}
          onClick={() => setShowConfirm(true)}
        >
          {"Reiniciar"}
        </button>
      </header>

      <div className="w-full max-w-lg flex flex-col gap-5">
        {/* Pet display */}
        <div className="nes-container is-rounded flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: "0.05s" }}>
          {/* Name + mood */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-sm" style={{ color: config.colorHex }}>
              {data.name}
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-[9px]" style={{ color: "#484f58" }}>
                {config.emoji} {config.label}
              </span>
              <span
                className="nes-badge"
                style={{ display: "inline-block" }}
              >
                <span
                  className={data.happiness > 70 ? "is-success" : data.happiness > 40 ? "is-primary" : "is-error"}
                  style={{ fontSize: "8px", padding: "2px 8px" }}
                >
                  {mood}
                </span>
              </span>
            </div>
          </div>

          {/* Pet image */}
          <div className="relative">
            <div
              className="absolute inset-0 opacity-20 blur-xl"
              style={{ background: config.colorHex }}
            />
            <div className={`relative ${isAnimating ? "animate-wiggle" : "animate-float"}`}>
              <div className="pet-frame" style={{ borderColor: `${config.colorHex}60` }}>
                <Image
                  src={config.image}
                  alt={`Tu Regenmon ${data.name}, tipo ${config.label}`}
                  width={160}
                  height={160}
                  className="block"
                  style={{ imageRendering: "pixelated" }}
                  priority
                />
              </div>
            </div>

            {/* Feedback bubble */}
            {actionFeedback && (
              <div className="nes-balloon from-left absolute -top-14 left-1/2 -translate-x-1/2 animate-pop-in whitespace-nowrap"
                style={{
                  fontSize: "9px",
                  padding: "4px 12px",
                  color: "#0d1117",
                  background: config.colorHex,
                  borderColor: config.colorHex,
                  zIndex: 10,
                }}
              >
                <p>{actionFeedback}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="nes-container is-rounded animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
            {"Acciones"}
          </p>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className="action-btn action-btn-green"
              onClick={handleFeed}
              aria-label="Alimentar a tu Regenmon"
            >
              <span className="text-xl" aria-hidden="true">{"🍎"}</span>
              <span>{"Alimentar"}</span>
            </button>
            <button
              type="button"
              className="action-btn action-btn-blue"
              onClick={handlePlay}
              aria-label="Jugar con tu Regenmon"
            >
              <span className="text-xl" aria-hidden="true">{"🎮"}</span>
              <span>{"Jugar"}</span>
            </button>
            <button
              type="button"
              className="action-btn action-btn-yellow"
              onClick={handleSleep}
              aria-label="Descansar a tu Regenmon"
            >
              <span className="text-xl" aria-hidden="true">{"💤"}</span>
              <span>{"Descansar"}</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="nes-container is-rounded animate-slide-up" style={{ animationDelay: "0.15s" }}>
          <p className="text-[9px] mb-4" style={{ color: "#484f58" }}>
            {"Estadisticas"}
          </p>
          <div className="flex flex-col gap-4">
            <StatBar label="Felicidad" value={data.happiness} max={100} colorClass="stat-fill-green" icon="💚" />
            <StatBar label="Energia" value={data.energy} max={100} colorClass="stat-fill-yellow" icon="⚡" />
            <StatBar label="Hambre" value={data.hunger} max={100} colorClass="stat-fill-red" icon="🍎" />
          </div>
        </div>

        {/* Chat */}
        <ChatContainer
          messages={messages}
          petColor={config.colorHex}
          onSend={handleChatSend}
          petName={data.name}
        />

        {/* Created date */}
        <p className="text-center text-[9px] pb-4" style={{ color: "#30363d" }}>
          {"Creado el "}
          {new Date(data.createdAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Confirmation dialog */}
      {showConfirm && (
        <div
          className="overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Confirmar reinicio"
        >
          <div className="nes-container is-rounded w-full max-w-sm animate-pop-in" style={{ background: "#161b22" }}>
            <div className="flex flex-col items-center gap-5 p-2">
              <i className="nes-icon is-large heart is-empty" aria-hidden="true" />
              <p className="text-[10px] text-center leading-relaxed" style={{ color: "#8b949e" }}>
                {"Se borraran todos los datos de tu Regenmon. Esta accion no se puede deshacer."}
              </p>
              <div className="flex gap-3 w-full">
                <button
                  type="button"
                  className="nes-btn flex-1"
                  onClick={() => setShowConfirm(false)}
                >
                  {"Cancelar"}
                </button>
                <button
                  type="button"
                  className="nes-btn is-error flex-1"
                  onClick={() => {
                    setShowConfirm(false)
                    onReset()
                  }}
                >
                  {"Borrar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
