"use client"

import { useState } from "react"
import { useHub } from "@/hooks/useHub"
import type { RegenmonData } from "@/lib/regenmon"
import { loadMemories } from "@/lib/memory"

interface Props {
  data: RegenmonData
  onRegistered: (hubId: string) => void
  accentColor: string
}

export function RegisterHub({ data, onRegistered, accentColor }: Props) {
  const { registerInHub } = useHub()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleRegister() {
    setLoading(true)
    setError(null)
    try {
      const profile = {
        name: data.name,
        type: data.type,
        stage: data.stage,
        totalPoints: data.totalPoints,
        happiness: data.happiness,
        energy: data.energy,
        hunger: data.hunger,
        balance: data.balance,
        memoryCount: loadMemories().length,
        isPublic: true,
      }
      const result = await registerInHub(profile)
      if (result?.id) {
        localStorage.setItem("regenmon-hub-id", result.id)
        localStorage.setItem("regenmon-hub-registered", "true")
        onRegistered(result.id)
      } else {
        // Fallback: generate local id if hub unreachable
        const localId = `local-${Date.now().toString(36)}`
        localStorage.setItem("regenmon-hub-id", localId)
        localStorage.setItem("regenmon-hub-registered", "true")
        onRegistered(localId)
        setError("HUB no disponible — registrado localmente")
      }
    } catch {
      const localId = `local-${Date.now().toString(36)}`
      localStorage.setItem("regenmon-hub-id", localId)
      localStorage.setItem("regenmon-hub-registered", "true")
      onRegistered(localId)
      setError("HUB no disponible — registrado localmente")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="nes-container is-rounded flex flex-col items-center gap-4 animate-slide-up">
      <p className="text-sm" style={{ color: accentColor }}>🌍 La Red Regenmon</p>
      <p className="text-[9px] text-center leading-relaxed" style={{ color: "#8b949e" }}>
        Registra a {data.name} en La Red para ver otros Regenmons, compartir logros y enviar regalos.
      </p>
      <button
        type="button"
        className="nes-btn is-primary"
        style={{ fontSize: "9px" }}
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "Registrando..." : "Registrar en La Red"}
      </button>
      {error && (
        <p className="text-[8px]" style={{ color: "#ffdd57" }}>{error}</p>
      )}
    </div>
  )
}
