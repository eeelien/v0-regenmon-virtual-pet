"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useHub, type HubProfile } from "@/hooks/useHub"
import { SocialActions } from "@/components/social-actions"

const typeEmoji: Record<string, string> = { semilla: "🌱", gota: "💧", chispa: "✨" }
const stageLabel: Record<number, string> = { 1: "Bebé", 2: "Joven", 3: "Adulto" }

export default function RegenmonProfilePage() {
  const params = useParams()
  const id = params?.id as string
  const { getProfile } = useHub()
  const [profile, setProfile] = useState<HubProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const myId = typeof window !== "undefined" ? localStorage.getItem("regenmon-hub-id") ?? "" : ""

  useEffect(() => {
    if (id) {
      getProfile(id).then((p) => {
        setProfile(p)
        setLoading(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-5">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xs" style={{ color: "#209cee" }}>👤 Perfil</h1>
          <Link href="/" className="nes-btn" style={{ fontSize: "8px", padding: "4px 10px" }}>
            ← Volver
          </Link>
        </div>

        {loading ? (
          <div className="nes-container is-rounded">
            <p className="text-[9px]" style={{ color: "#8b949e" }}>Cargando...</p>
          </div>
        ) : !profile ? (
          <div className="nes-container is-rounded">
            <p className="text-[9px]" style={{ color: "#8b949e" }}>Regenmon no encontrado.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="nes-container is-rounded flex flex-col items-center gap-3">
              <p className="text-sm" style={{ color: "#c9d1d9" }}>
                {typeEmoji[profile.type] ?? "❓"} {profile.name}
              </p>
              <p className="text-[8px]" style={{ color: "#8b949e" }}>
                {stageLabel[profile.stage] ?? "?"} • {profile.totalPoints} pts • 🍎 {profile.balance} $FRUTA
              </p>
              <div className="w-full flex flex-col gap-2 text-[8px]" style={{ color: "#8b949e" }}>
                <div className="flex justify-between"><span>💚 Felicidad</span><span>{profile.happiness}/100</span></div>
                <div className="flex justify-between"><span>⚡ Energía</span><span>{profile.energy}/100</span></div>
                <div className="flex justify-between"><span>🍎 Hambre</span><span>{profile.hunger}/100</span></div>
              </div>
            </div>

            {myId && myId !== profile.id && (
              <div className="nes-container is-rounded">
                <SocialActions profile={profile} myId={myId} accentColor="#209cee" />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
