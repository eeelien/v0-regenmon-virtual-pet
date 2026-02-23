"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { RegenmonType } from "@/lib/regenmon"
import { TYPE_CONFIG } from "@/lib/regenmon"

interface HatchScreenProps {
  name: string
  type: RegenmonType
  onComplete: () => void
}

export function HatchScreen({ name, type, onComplete }: HatchScreenProps) {
  const [phase, setPhase] = useState<"idle" | "shake1" | "shake2" | "crack" | "hatch" | "reveal">("idle")
  const config = TYPE_CONFIG[type]

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("shake1"), 500),
      setTimeout(() => setPhase("shake2"), 1800),
      setTimeout(() => setPhase("crack"), 3200),
      setTimeout(() => setPhase("hatch"), 4200),
      setTimeout(() => setPhase("reveal"), 5200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 overflow-hidden">
      <style jsx>{`
        @keyframes egg-shake-1 {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          60% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
        }
        @keyframes egg-shake-2 {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-12deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-12deg); }
          40% { transform: rotate(12deg); }
          50% { transform: rotate(-8deg); }
          60% { transform: rotate(8deg); }
          70% { transform: rotate(-5deg); }
          80% { transform: rotate(5deg); }
          90% { transform: rotate(-2deg); }
        }
        @keyframes egg-crack {
          0% { transform: scale(1); }
          30% { transform: scale(1.15); }
          50% { transform: scale(0.9); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 0.3; }
        }
        @keyframes egg-explode {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pet-born {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes sparkle {
          0% { transform: translate(0, 0) scale(0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px ${config.colorHex}40; }
          50% { box-shadow: 0 0 60px ${config.colorHex}80, 0 0 100px ${config.colorHex}40; }
        }
        .shake-1 { animation: egg-shake-1 0.6s ease-in-out infinite; }
        .shake-2 { animation: egg-shake-2 0.4s ease-in-out infinite; }
        .cracking { animation: egg-crack 1s ease-out forwards; }
        .exploding { animation: egg-explode 0.8s ease-out forwards; }
        .born { animation: pet-born 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .sparkle-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: sparkle 1s ease-out forwards;
        }
      `}</style>

      {/* Egg / Pet container */}
      <div className="relative" style={{ width: 180, height: 180 }}>
        {/* Sparkle particles on crack/hatch */}
        {(phase === "crack" || phase === "hatch") && (
          <>
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * 360
              const rad = (angle * Math.PI) / 180
              const dist = 60 + Math.random() * 40
              return (
                <div
                  key={i}
                  className="sparkle-particle"
                  style={{
                    left: "50%",
                    top: "50%",
                    background: config.colorHex,
                    "--tx": `${Math.cos(rad) * dist}px`,
                    "--ty": `${Math.sin(rad) * dist}px`,
                    animationDelay: `${Math.random() * 0.3}s`,
                  } as React.CSSProperties}
                />
              )
            })}
          </>
        )}

        {/* Egg (visible until hatch) */}
        {phase !== "reveal" && (
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              phase === "shake1" ? "shake-1" :
              phase === "shake2" ? "shake-2" :
              phase === "crack" ? "cracking" :
              phase === "hatch" ? "exploding" : ""
            }`}
          >
            <div className="pet-frame" style={{
              borderColor: phase === "crack" || phase === "hatch" ? `${config.colorHex}80` : undefined,
              animation: phase === "shake2" ? "glow-pulse 0.5s ease-in-out infinite" : undefined,
            }}>
              <Image
                src="/regenmon-egg.jpg"
                alt="Huevo eclosionando"
                width={140}
                height={140}
                className="block"
                style={{ imageRendering: "pixelated" }}
                priority
              />
            </div>
            {/* Crack lines overlay */}
            {(phase === "crack" || phase === "hatch") && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: "absolute" }}>
                  <path d="M70 10 L65 40 L75 55 L60 70 L72 90 L65 120" stroke={config.colorHex} strokeWidth="3" fill="none" opacity="0.8" />
                  <path d="M50 30 L55 50 L45 65 L55 80" stroke={config.colorHex} strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M90 25 L85 45 L95 60 L88 75" stroke={config.colorHex} strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </div>
            )}
          </div>
        )}

        {/* Pet (appears on reveal) */}
        {phase === "reveal" && (
          <div className="absolute inset-0 flex items-center justify-center born">
            <div className="pet-frame" style={{ borderColor: `${config.colorHex}60` }}>
              <Image
                src={config.image}
                alt={`Tu nuevo Regenmon: ${name}`}
                width={140}
                height={140}
                className="block"
                style={{ imageRendering: "pixelated" }}
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-3 text-center">
        {phase === "idle" && (
          <p className="text-[10px] animate-pulse" style={{ color: "#8b949e" }}>El huevo se mueve...</p>
        )}
        {(phase === "shake1" || phase === "shake2") && (
          <p className="text-[10px]" style={{ color: config.colorHex }}>
            {phase === "shake1" ? "¡Algo quiere salir!" : "¡¡Está eclosionando!!"}
          </p>
        )}
        {phase === "crack" && (
          <p className="text-xs" style={{ color: config.colorHex }}>💥 ¡CRACK!</p>
        )}
        {phase === "hatch" && (
          <p className="text-xs animate-pulse" style={{ color: config.colorHex }}>✨ ✨ ✨</p>
        )}
        {phase === "reveal" && (
          <div className="flex flex-col items-center gap-2 born" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm" style={{ color: config.colorHex }}>
              {config.emoji} ¡{name} ha nacido!
            </p>
            <p className="text-[9px]" style={{ color: "#8b949e" }}>
              Un {config.label} salvaje aparece
            </p>
            <button
              type="button"
              className="nes-btn is-success mt-4"
              style={{ fontSize: "9px" }}
              onClick={onComplete}
            >
              ¡Conocer a {name}!
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
