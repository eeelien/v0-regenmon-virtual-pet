"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useHub, type HubProfile } from "@/hooks/useHub"

export default function LeaderboardPage() {
  const { getLeaderboard } = useHub()
  const [profiles, setProfiles] = useState<HubProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLeaderboard().then((data) => {
      setProfiles(data.sort((a, b) => b.totalPoints - a.totalPoints))
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const typeEmoji: Record<string, string> = { semilla: "🌱", gota: "💧", chispa: "✨" }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-5">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xs" style={{ color: "#ffdd57" }}>🏆 Leaderboard</h1>
          <Link href="/" className="nes-btn" style={{ fontSize: "8px", padding: "4px 10px" }}>
            ← Volver
          </Link>
        </div>

        {loading ? (
          <div className="nes-container is-rounded">
            <p className="text-[9px]" style={{ color: "#8b949e" }}>Cargando...</p>
          </div>
        ) : profiles.length === 0 ? (
          <div className="nes-container is-rounded">
            <p className="text-[9px]" style={{ color: "#8b949e" }}>
              No hay Regenmons registrados aún.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {profiles.map((p, i) => (
              <Link key={p.id} href={`/regenmon/${p.id}`}>
                <div className="nes-container is-rounded" style={{ cursor: "pointer", padding: "8px 12px" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px]" style={{ color: i === 0 ? "#ffdd57" : i === 1 ? "#c9d1d9" : i === 2 ? "#cd7f32" : "#8b949e" }}>
                        #{i + 1}
                      </span>
                      <span className="text-[9px]">{typeEmoji[p.type] ?? "❓"}</span>
                      <span className="text-[9px]" style={{ color: "#c9d1d9" }}>{p.name}</span>
                    </div>
                    <span className="text-[8px]" style={{ color: "#8b949e" }}>
                      {p.totalPoints} pts
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
