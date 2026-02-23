"use client"

import { useState, useCallback } from "react"

interface MiniGameProps {
  petName: string
  accentColor: string
  onComplete: (score: number) => void
  onClose: () => void
}

// === LEVEL 1: PREESCOLAR — just match the letter to the image ===
const PRESCHOOL_CHALLENGES = [
  { letter: "A", image: "🌊", word: "Agua", sound: "Aaaa" },
  { letter: "E", image: "⭐", word: "Estrella", sound: "Eeee" },
  { letter: "I", image: "🏝️", word: "Isla", sound: "Iiii" },
  { letter: "O", image: "👁️", word: "Ojo", sound: "Oooo" },
  { letter: "U", image: "🍇", word: "Uva", sound: "Uuuu" },
  { letter: "A", image: "🐝", word: "Abeja", sound: "Aaaa" },
  { letter: "E", image: "🐘", word: "Elefante", sound: "Eeee" },
  { letter: "I", image: "🧲", word: "Imán", sound: "Iiii" },
  { letter: "O", image: "🐻", word: "Oso", sound: "Oooo" },
  { letter: "U", image: "🦄", word: "Unicornio", sound: "Uuuu" },
  { letter: "A", image: "🌳", word: "Árbol", sound: "Aaaa" },
  { letter: "E", image: "🦔", word: "Erizo", sound: "Eeee" },
  { letter: "I", image: "⛪", word: "Iglesia", sound: "Iiii" },
  { letter: "O", image: "🍊", word: "Orange", sound: "Oooo" },
  { letter: "U", image: "🔮", word: "Uno", sound: "Uuuu" },
]

// === LEVEL 2: VOCALES — complete the word (with image hint) ===
const VOWEL_CHALLENGES = [
  { word: "G_TO", answer: "A", hint: "🐱", label: "Gato" },
  { word: "P_RRO", answer: "E", hint: "🐶", label: "Perro" },
  { word: "S_L", answer: "O", hint: "☀️", label: "Sol" },
  { word: "L_NA", answer: "U", hint: "🌙", label: "Luna" },
  { word: "P_Z", answer: "E", hint: "🐟", label: "Pez" },
  { word: "FL_R", answer: "O", hint: "🌸", label: "Flor" },
  { word: "C_SA", answer: "A", hint: "🏠", label: "Casa" },
  { word: "L_BRO", answer: "I", hint: "📖", label: "Libro" },
  { word: "N_BE", answer: "U", hint: "☁️", label: "Nube" },
  { word: "M_SA", answer: "E", hint: "🪑", label: "Mesa" },
  { word: "_GUA", answer: "A", hint: "💧", label: "Agua" },
  { word: "H_EVO", answer: "U", hint: "🥚", label: "Huevo" },
  { word: "R_SA", answer: "O", hint: "🌹", label: "Rosa" },
  { word: "T_GRE", answer: "I", hint: "🐯", label: "Tigre" },
  { word: "_SO", answer: "O", hint: "🐻", label: "Oso" },
]

// === LEVEL 3: MATH ===
const MATH_CHALLENGES = [
  { question: "2 + 3 = ?", answer: "5", options: ["4", "5", "6", "7"] },
  { question: "7 - 2 = ?", answer: "5", options: ["3", "4", "5", "6"] },
  { question: "4 + 4 = ?", answer: "8", options: ["6", "7", "8", "9"] },
  { question: "9 - 3 = ?", answer: "6", options: ["5", "6", "7", "8"] },
  { question: "1 + 6 = ?", answer: "7", options: ["5", "6", "7", "8"] },
  { question: "8 - 5 = ?", answer: "3", options: ["2", "3", "4", "5"] },
  { question: "3 + 5 = ?", answer: "8", options: ["7", "8", "9", "6"] },
  { question: "10 - 4 = ?", answer: "6", options: ["5", "6", "7", "8"] },
  { question: "6 + 3 = ?", answer: "9", options: ["7", "8", "9", "10"] },
  { question: "5 - 1 = ?", answer: "4", options: ["2", "3", "4", "5"] },
]

const VOWELS = ["A", "E", "I", "O", "U"]

type GameType = "preschool" | "vowels" | "math"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function MiniGame({ petName, accentColor, onComplete, onClose }: MiniGameProps) {
  const [gameType, setGameType] = useState<GameType | null>(null)
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [totalRounds] = useState(5)
  const [challenges, setChallenges] = useState<any[]>([])
  const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const startGame = useCallback((type: GameType) => {
    const pool = type === "preschool" ? PRESCHOOL_CHALLENGES
      : type === "vowels" ? VOWEL_CHALLENGES
      : MATH_CHALLENGES
    setChallenges(shuffle(pool).slice(0, 5))
    setGameType(type)
    setRound(0)
    setScore(0)
    setFeedback(null)
    setGameOver(false)
    setSelectedAnswer(null)
  }, [])

  const handleExit = useCallback(() => {
    if (score > 0) {
      onComplete(score)
    } else {
      onClose()
    }
  }, [score, onComplete, onClose])

  const handleAnswer = useCallback((answer: string) => {
    if (feedback || gameOver) return

    const current = challenges[round]
    const correctAnswer = current.answer || current.letter
    const correct = answer === correctAnswer
    setSelectedAnswer(answer)

    if (correct) {
      setScore(s => s + 1)
      setFeedback({ correct: true, text: "¡Correcto! 🎉" })
    } else {
      setFeedback({ correct: false, text: `Era "${correctAnswer}" 😅` })
    }

    setTimeout(() => {
      setFeedback(null)
      setSelectedAnswer(null)
      if (round + 1 >= totalRounds) {
        setGameOver(true)
      } else {
        setRound(r => r + 1)
      }
    }, 1200)
  }, [feedback, gameOver, challenges, round, totalRounds])

  // ============ GAME SELECTION ============
  if (!gameType) {
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
          <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "4px" }}>
            {petName} quiere jugar!
          </p>
          <h2 style={{ fontSize: "14px", color: "#fff", marginBottom: "1.25rem" }}>
            🎮 Elige un juego
          </h2>

          <button
            onClick={() => startGame("preschool")}
            style={{
              display: "block", width: "100%", padding: "14px",
              background: "linear-gradient(135deg, #ffb347, #ff6b6b)",
              border: "none", borderRadius: "10px", color: "#fff",
              fontSize: "13px", fontWeight: "bold", cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            🔤 Mis Primeras Letras
            <br />
            <span style={{ fontSize: "10px", opacity: 0.8 }}>Aprende las vocales con dibujos</span>
          </button>

          <button
            onClick={() => startGame("vowels")}
            style={{
              display: "block", width: "100%", padding: "14px",
              background: "linear-gradient(135deg, #ff6b9d, #c44dff)",
              border: "none", borderRadius: "10px", color: "#fff",
              fontSize: "13px", fontWeight: "bold", cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            📝 Completa la Palabra
            <br />
            <span style={{ fontSize: "10px", opacity: 0.8 }}>¿Qué vocal falta?</span>
          </button>

          <button
            onClick={() => startGame("math")}
            style={{
              display: "block", width: "100%", padding: "14px",
              background: "linear-gradient(135deg, #4dc9f6, #4d67ff)",
              border: "none", borderRadius: "10px", color: "#fff",
              fontSize: "13px", fontWeight: "bold", cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            🔢 Matemáticas
            <br />
            <span style={{ fontSize: "10px", opacity: 0.8 }}>Sumas y restas</span>
          </button>

          <button
            onClick={onClose}
            style={{
              background: "none", border: "1px solid #555",
              borderRadius: "8px", padding: "8px 20px",
              color: "#888", fontSize: "11px", cursor: "pointer",
            }}
          >
            ← Volver
          </button>
        </div>
      </div>
    )
  }

  // ============ GAME OVER ============
  if (gameOver) {
    const stars = score >= 4 ? 3 : score >= 3 ? 2 : score >= 1 ? 1 : 0
    const messages = [
      "Hay que practicar más...",
      "¡Buen intento!",
      "¡Muy bien!",
      "¡Excelente! 🌟",
    ]
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
          <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "1rem" }}>
            {messages[stars]}
          </p>
          <p style={{ fontSize: "12px", color: accentColor, marginBottom: "1.25rem" }}>
            +{score * 3} felicidad | +{score * 2} puntos
          </p>

          <button
            onClick={() => startGame(gameType)}
            style={{
              display: "block", width: "100%", padding: "12px",
              background: accentColor, border: "none", borderRadius: "10px",
              color: "#fff", fontSize: "12px", fontWeight: "bold",
              cursor: "pointer", marginBottom: "8px",
            }}
          >
            🔄 Jugar de nuevo
          </button>
          <button
            onClick={() => onComplete(score)}
            style={{
              display: "block", width: "100%", padding: "12px",
              background: "none", border: `1px solid ${accentColor}`,
              borderRadius: "10px", color: accentColor,
              fontSize: "12px", cursor: "pointer",
            }}
          >
            ✅ Listo
          </button>
        </div>
      </div>
    )
  }

  // ============ ACTIVE GAME ============
  const current = challenges[round]
  const gameLabels = { preschool: "🔤 Letras", vowels: "📝 Vocales", math: "🔢 Mates" }

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
          {gameLabels[gameType]} | Ronda {round + 1}/{totalRounds}
        </span>
        <span style={{ fontSize: "11px", color: accentColor }}>
          ⭐ {score}
        </span>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "1.25rem" }}>
        {Array.from({ length: totalRounds }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "10px", height: "10px", borderRadius: "50%",
              background: i < round ? accentColor : i === round ? "#fff" : "#333",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      {/* Challenge card */}
      <div style={{
        background: "#1a1a2e",
        border: `3px solid ${feedback ? (feedback.correct ? "#4cd964" : "#ff6b6b") : accentColor}`,
        borderRadius: "12px", padding: "1.5rem", maxWidth: "340px", width: "100%",
        textAlign: "center", transition: "border-color 0.3s",
      }}>
        {/* === PRESCHOOL GAME === */}
        {gameType === "preschool" && (
          <>
            <p style={{ fontSize: "60px", marginBottom: "4px", lineHeight: 1 }}>
              {current.image}
            </p>
            <p style={{ fontSize: "14px", color: "#fff", marginBottom: "4px", fontWeight: "bold" }}>
              {current.word}
            </p>
            <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "16px" }}>
              ¿Con qué letra empieza?
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {VOWELS.map(v => (
                <button
                  key={v}
                  onClick={() => handleAnswer(v)}
                  disabled={!!feedback}
                  style={{
                    width: "52px", height: "52px", borderRadius: "12px",
                    border: `2px solid ${
                      selectedAnswer === v
                        ? (feedback?.correct ? "#4cd964" : "#ff6b6b")
                        : "#444"
                    }`,
                    background: selectedAnswer === v
                      ? (feedback?.correct ? "rgba(76,217,100,0.2)" : "rgba(255,107,107,0.2)")
                      : (v === current.letter && feedback && !feedback.correct)
                        ? "rgba(76,217,100,0.15)"
                        : "#0d0d1a",
                    color: "#fff", fontSize: "22px", fontWeight: "bold",
                    cursor: feedback ? "default" : "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </>
        )}

        {/* === VOWELS GAME === */}
        {gameType === "vowels" && (
          <>
            <p style={{ fontSize: "48px", marginBottom: "4px", lineHeight: 1 }}>
              {current.hint}
            </p>
            <p style={{ fontSize: "10px", color: "#aaa", marginBottom: "10px" }}>
              {current.label}
            </p>
            <p style={{
              fontSize: "28px", color: "#fff", letterSpacing: "8px",
              marginBottom: "1.25rem", fontWeight: "bold",
            }}>
              {current.word}
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {VOWELS.map(v => (
                <button
                  key={v}
                  onClick={() => handleAnswer(v)}
                  disabled={!!feedback}
                  style={{
                    width: "48px", height: "48px", borderRadius: "10px",
                    border: `2px solid ${
                      selectedAnswer === v
                        ? (feedback?.correct ? "#4cd964" : "#ff6b6b")
                        : "#444"
                    }`,
                    background: selectedAnswer === v
                      ? (feedback?.correct ? "rgba(76,217,100,0.2)" : "rgba(255,107,107,0.2)")
                      : (v === current.answer && feedback && !feedback.correct)
                        ? "rgba(76,217,100,0.15)"
                        : "#0d0d1a",
                    color: "#fff", fontSize: "18px", fontWeight: "bold",
                    cursor: feedback ? "default" : "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </>
        )}

        {/* === MATH GAME === */}
        {gameType === "math" && (
          <>
            <p style={{
              fontSize: "24px", color: "#fff", marginBottom: "1.25rem", fontWeight: "bold",
            }}>
              {current.question}
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px",
            }}>
              {current.options.map((opt: string) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!feedback}
                  style={{
                    padding: "14px", borderRadius: "10px",
                    border: `2px solid ${
                      selectedAnswer === opt
                        ? (feedback?.correct ? "#4cd964" : "#ff6b6b")
                        : "#444"
                    }`,
                    background: selectedAnswer === opt
                      ? (feedback?.correct ? "rgba(76,217,100,0.2)" : "rgba(255,107,107,0.2)")
                      : (opt === current.answer && feedback && !feedback.correct)
                        ? "rgba(76,217,100,0.15)"
                        : "#0d0d1a",
                    color: "#fff", fontSize: "18px", fontWeight: "bold",
                    cursor: feedback ? "default" : "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Feedback */}
        {feedback && (
          <p style={{
            marginTop: "12px", fontSize: "13px", fontWeight: "bold",
            color: feedback.correct ? "#4cd964" : "#ff6b6b",
          }}>
            {feedback.text}
          </p>
        )}
      </div>

      {/* EXIT BUTTON — always visible */}
      <button
        onClick={handleExit}
        style={{
          marginTop: "1rem", background: "rgba(255,255,255,0.1)",
          border: "1px solid #555", borderRadius: "8px",
          padding: "10px 24px",
          color: "#aaa", fontSize: "12px", cursor: "pointer",
        }}
      >
        ✕ Salir{score > 0 ? ` (guardar ${score * 3} pts)` : ""}
      </button>
    </div>
  )
}
