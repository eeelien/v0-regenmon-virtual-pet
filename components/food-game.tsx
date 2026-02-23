"use client"

import { useState, useCallback } from "react"

interface FoodGameProps {
  petName: string
  accentColor: string
  onComplete: (score: number) => void
  onClose: () => void
}

interface FoodItem {
  emoji: string
  name: string
  healthy: boolean
}

const FOOD_ITEMS: FoodItem[] = [
  { emoji: "🍎", name: "Manzana", healthy: true },
  { emoji: "🥦", name: "Brócoli", healthy: true },
  { emoji: "🥕", name: "Zanahoria", healthy: true },
  { emoji: "🍌", name: "Plátano", healthy: true },
  { emoji: "🥚", name: "Huevo", healthy: true },
  { emoji: "🥛", name: "Leche", healthy: true },
  { emoji: "🍊", name: "Naranja", healthy: true },
  { emoji: "🍇", name: "Uvas", healthy: true },
  { emoji: "🥑", name: "Aguacate", healthy: true },
  { emoji: "🍓", name: "Fresa", healthy: true },
  { emoji: "🌽", name: "Elote", healthy: true },
  { emoji: "🍅", name: "Tomate", healthy: true },
  { emoji: "🍭", name: "Paleta", healthy: false },
  { emoji: "🍟", name: "Papas fritas", healthy: false },
  { emoji: "🍩", name: "Dona", healthy: false },
  { emoji: "🍬", name: "Dulce", healthy: false },
  { emoji: "🍫", name: "Chocolate", healthy: false },
  { emoji: "🥤", name: "Refresco", healthy: false },
  { emoji: "🍕", name: "Pizza", healthy: false },
  { emoji: "🍪", name: "Galleta", healthy: false },
  { emoji: "🧁", name: "Pastelito", healthy: false },
  { emoji: "🌭", name: "Hot dog", healthy: false },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildRounds(): { food: FoodItem; options: FoodItem[] }[] {
  const healthy = shuffle(FOOD_ITEMS.filter(f => f.healthy))
  const unhealthy = shuffle(FOOD_ITEMS.filter(f => !f.healthy))
  const rounds: { food: FoodItem; options: FoodItem[] }[] = []

  // 5 rounds: show 4 foods, ask "which is healthy?" or "which is NOT healthy?"
  for (let i = 0; i < 5; i++) {
    // Mix: 2 healthy + 2 unhealthy, ask for healthy
    const h1 = healthy[i % healthy.length]
    const h2 = healthy[(i + 1) % healthy.length]
    const u1 = unhealthy[i % unhealthy.length]
    const u2 = unhealthy[(i + 1) % unhealthy.length]
    rounds.push({
      food: h1, // correct answer
      options: shuffle([h1, h2, u1, u2].filter((v, idx, arr) =>
        arr.findIndex(x => x.emoji === v.emoji) === idx
      )).slice(0, 4),
    })
  }
  return rounds
}

export function FoodGame({ petName, accentColor, onComplete, onClose }: FoodGameProps) {
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [rounds] = useState(() => buildRounds())
  const [feedback, setFeedback] = useState<{ correct: boolean; text: string; emoji: string } | null>(null)
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const totalRounds = 5

  const handlePick = useCallback((item: FoodItem) => {
    if (feedback || gameOver) return
    setSelectedEmoji(item.emoji)

    if (item.healthy) {
      setScore(s => s + 1)
      setFeedback({ correct: true, text: `¡${item.name} es saludable! 🎉`, emoji: "✅" })
    } else {
      setFeedback({ correct: false, text: `${item.name} no es muy saludable 😅`, emoji: "❌" })
    }

    setTimeout(() => {
      setFeedback(null)
      setSelectedEmoji(null)
      if (round + 1 >= totalRounds) {
        setGameOver(true)
      } else {
        setRound(r => r + 1)
      }
    }, 1400)
  }, [feedback, gameOver, round, totalRounds])

  // GAME OVER
  if (gameOver) {
    const stars = score >= 4 ? 3 : score >= 3 ? 2 : score >= 1 ? 1 : 0
    const msgs = ["Hay que comer mejor... 🥕", "¡Buen intento!", "¡Muy bien! 🥦", "¡Nutriólogo experto! 🏆"]
    return (
      <div style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}>
        <div style={{
          background: "#1a1a2e", border: `3px solid ${accentColor}`,
          borderRadius: "12px", padding: "1.5rem", maxWidth: "340px", width: "100%",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "28px", marginBottom: "8px" }}>
            {"⭐".repeat(stars)}{"☆".repeat(3 - stars)}
          </p>
          <h2 style={{ fontSize: "14px", color: "#fff", marginBottom: "6px" }}>
            {score}/{totalRounds} correctas
          </h2>
          <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "1rem" }}>{msgs[stars]}</p>
          <p style={{ fontSize: "12px", color: accentColor, marginBottom: "1.25rem" }}>
            +{score * 5} hambre | +{score * 2} felicidad
          </p>
          <button onClick={() => onComplete(score)} style={{
            display: "block", width: "100%", padding: "12px",
            background: accentColor, border: "none", borderRadius: "10px",
            color: "#fff", fontSize: "12px", fontWeight: "bold", cursor: "pointer",
          }}>
            ✅ Alimentar a {petName}
          </button>
        </div>
      </div>
    )
  }

  const current = rounds[round]
  if (!current) return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.9)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "1rem",
    }}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        width: "100%", maxWidth: "340px", marginBottom: "1rem",
      }}>
        <span style={{ fontSize: "11px", color: "#aaa" }}>
          🍽️ Nutrición | Ronda {round + 1}/{totalRounds}
        </span>
        <span style={{ fontSize: "11px", color: accentColor }}>⭐ {score}</span>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
        {Array.from({ length: totalRounds }).map((_, i) => (
          <div key={i} style={{
            width: "10px", height: "10px", borderRadius: "50%",
            background: i < round ? accentColor : i === round ? "#fff" : "#333",
            transition: "background 0.3s",
          }} />
        ))}
      </div>

      {/* Challenge */}
      <div style={{
        background: "#1a1a2e",
        border: `3px solid ${feedback ? (feedback.correct ? "#4cd964" : "#ff6b6b") : accentColor}`,
        borderRadius: "12px", padding: "1.5rem", maxWidth: "340px", width: "100%",
        textAlign: "center", transition: "border-color 0.3s",
      }}>
        <p style={{ fontSize: "14px", color: "#fff", marginBottom: "6px", fontWeight: "bold" }}>
          ¿Cuál es saludable? 🥗
        </p>
        <p style={{ fontSize: "10px", color: "#aaa", marginBottom: "20px" }}>
          Toca el alimento más saludable para {petName}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {current.options.map((item) => (
            <button
              key={item.emoji}
              onClick={() => handlePick(item)}
              disabled={!!feedback}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "4px", padding: "16px 8px", borderRadius: "14px",
                border: `3px solid ${
                  selectedEmoji === item.emoji
                    ? (feedback?.correct ? "#4cd964" : "#ff6b6b")
                    : "#333"
                }`,
                background: selectedEmoji === item.emoji
                  ? (feedback?.correct ? "rgba(76,217,100,0.2)" : "rgba(255,107,107,0.2)")
                  : (item.healthy && feedback && !feedback.correct && selectedEmoji !== item.emoji)
                    ? "rgba(76,217,100,0.1)"
                    : "#0d0d1a",
                cursor: feedback ? "default" : "pointer",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "40px", lineHeight: 1 }}>{item.emoji}</span>
            </button>
          ))}
        </div>

        {feedback && (
          <p style={{
            marginTop: "14px", fontSize: "12px", fontWeight: "bold",
            color: feedback.correct ? "#4cd964" : "#ff6b6b",
          }}>
            {feedback.text}
          </p>
        )}
      </div>

      <button onClick={() => { if (score > 0) onComplete(score); else onClose() }} style={{
        marginTop: "1rem", background: "rgba(255,255,255,0.1)",
        border: "1px solid #555", borderRadius: "8px", padding: "10px 24px",
        color: "#aaa", fontSize: "12px", cursor: "pointer",
      }}>
        ✕ Salir{score > 0 ? ` (guardar ${score * 5} hambre)` : ""}
      </button>
    </div>
  )
}
