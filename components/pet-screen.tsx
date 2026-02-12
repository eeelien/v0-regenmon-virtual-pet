"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import type { RegenmonData } from "@/lib/regenmon"
import { TYPE_CONFIG, saveRegenmon } from "@/lib/regenmon"
import { StatBar } from "@/components/stat-bar"

interface PetScreenProps {
  data: RegenmonData
  onUpdate: (data: RegenmonData) => void
  onReset: () => void
}

export function PetScreen({ data, onUpdate, onReset }: PetScreenProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [actionFeedback, setActionFeedback] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const config = TYPE_CONFIG[data.type]

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

  function handleFeed() {
    const updated: RegenmonData = {
      ...data,
      hunger: clamp(data.hunger + 15, 0, 100),
      energy: clamp(data.energy + 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Mmmm... delicioso!")
  }

  function handlePlay() {
    const updated: RegenmonData = {
      ...data,
      happiness: clamp(data.happiness + 15, 0, 100),
      energy: clamp(data.energy - 10, 0, 100),
      hunger: clamp(data.hunger - 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Que divertido!")
  }

  function handleSleep() {
    const updated: RegenmonData = {
      ...data,
      energy: clamp(data.energy + 20, 0, 100),
      happiness: clamp(data.happiness - 5, 0, 100),
    }
    saveRegenmon(updated)
    onUpdate(updated)
    showFeedback("Zzz... descansando")
  }

  const mood = data.happiness > 70 ? "Feliz" : data.happiness > 40 ? "Normal" : "Triste"
  const moodColor = data.happiness > 70 ? "#4cd964" : data.happiness > 40 ? config.colorHex : "#ff6b6b"

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-5">
      {/* Header */}
      <header className="w-full max-w-lg flex items-center justify-between animate-slide-up">
        <h1 className="text-xs" style={{ color: config.colorHex }}>
          {"Regenmon"}
        </h1>
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
                  src={config.image || "/placeholder.svg"}
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
              <span>{"Comer"}</span>
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
              aria-label="Dormir a tu Regenmon"
            >
              <span className="text-xl" aria-hidden="true">{"💤"}</span>
              <span>{"Dormir"}</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="nes-container is-rounded animate-slide-up" style={{ animationDelay: "0.15s" }}>
          <p className="text-[9px] mb-4" style={{ color: "#484f58" }}>
            {"Estadisticas"}
          </p>
          <div className="flex flex-col gap-4">
            <StatBar label="Felicidad" value={data.happiness} max={100} colorClass="stat-fill-green" icon="❤️" />
            <StatBar label="Energia" value={data.energy} max={100} colorClass="stat-fill-yellow" icon="⚡" />
            <StatBar label="Hambre" value={data.hunger} max={100} colorClass="stat-fill-blue" icon="🍖" />
          </div>
        </div>

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
