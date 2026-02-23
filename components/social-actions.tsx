"use client"

import { useState } from "react"
import { useHub, type HubProfile } from "@/hooks/useHub"

interface Props {
  profile: HubProfile
  myId: string
  accentColor: string
}

export function SocialActions({ profile, myId, accentColor }: Props) {
  const { sendGift } = useHub()
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  async function handleGift(amount: number, label: string) {
    setSending(true)
    setFeedback(null)
    try {
      const ok = await sendGift(myId, profile.id, amount)
      setFeedback(ok ? `¡${label} enviado!` : "No se pudo enviar")
    } catch {
      setFeedback("Error de conexión")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="nes-btn is-success"
          style={{ fontSize: "8px", padding: "4px 8px" }}
          onClick={() => handleGift(1, "Comida")}
          disabled={sending || myId === profile.id}
        >
          🍎 Alimentar
        </button>
        <button
          type="button"
          className="nes-btn is-warning"
          style={{ fontSize: "8px", padding: "4px 8px" }}
          onClick={() => handleGift(5, "$FRUTA")}
          disabled={sending || myId === profile.id}
        >
          🎁 Regalar $FRUTA
        </button>
      </div>
      {feedback && (
        <p className="text-[8px] text-center" style={{ color: accentColor }}>{feedback}</p>
      )}
    </div>
  )
}
