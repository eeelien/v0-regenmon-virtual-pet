"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import type { RegenmonData, TrainingEntry } from "@/lib/regenmon"
import {
  saveRegenmon,
  checkEvolution,
  getNextEvolutionPoints,
  STAGE_LABELS,
  STAGE_ICONS,
} from "@/lib/regenmon"

type Category = "codigo" | "diseno" | "proyecto" | "aprendizaje"

interface CategoryConfig {
  key: Category
  label: string
  icon: string
  description: string
}

const CATEGORIES: CategoryConfig[] = [
  { key: "codigo", label: "Codigo", icon: "\u{1F4BB}", description: "Tu mejor codigo" },
  { key: "diseno", label: "Diseno", icon: "\u{1F3A8}", description: "UI/UX o grafico" },
  { key: "proyecto", label: "Proyecto", icon: "\u{1F680}", description: "Proyecto completo" },
  { key: "aprendizaje", label: "Aprendizaje", icon: "\u{1F4DA}", description: "Notas o ejercicios" },
]

interface EvaluationResult {
  score: number
  feedback: string
  points: number
  tokens: number
  fallback: boolean
  statEffects: { happiness: number; energy: number; hunger: number }
}

function computeStatEffects(score: number): { happiness: number; energy: number; hunger: number } {
  if (score >= 80) return { happiness: 15, energy: -20, hunger: 15 }
  if (score >= 60) return { happiness: 8, energy: -15, hunger: 12 }
  if (score >= 40) return { happiness: 3, energy: -12, hunger: 10 }
  return { happiness: -10, energy: -15, hunger: 10 }
}

function scoreEmoji(score: number): string {
  if (score >= 80) return "\u{1F3C6}"
  if (score >= 60) return "\u2B50"
  if (score >= 40) return "\u{1F44D}"
  return "\u{1F4AA}"
}

function scoreBgClass(score: number): string {
  if (score >= 80) return "result-bg-gold"
  if (score >= 60) return "result-bg-yellow"
  if (score >= 40) return "result-bg-yellow"
  return "result-bg-red"
}

interface TrainingScreenProps {
  data: RegenmonData
  onUpdate: (data: RegenmonData) => void
  accentColor: string
}

export function TrainingScreen({ data, onUpdate, accentColor }: TrainingScreenProps) {
  const [category, setCategory] = useState<Category | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageBase64, setImageBase64] = useState<string | null>(null)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [result, setResult] = useState<EvaluationResult | null>(null)
  const [evolutionAlert, setEvolutionAlert] = useState<string | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null)
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setFileError("Solo se aceptan archivos de imagen (PNG, JPG, etc.)")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("La imagen no puede superar los 5MB")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const base64 = reader.result as string
      setImagePreview(base64)
      setImageBase64(base64)
    }
    reader.readAsDataURL(file)
  }, [])

  function handleCancel() {
    setImagePreview(null)
    setImageBase64(null)
    setFileError(null)
    if (fileRef.current) fileRef.current.value = ""
  }

  async function handleEvaluate() {
    if (!imageBase64 || !category) return
    setIsEvaluating(true)

    try {
      const res = await fetch("https://v0-regenmon-virtual-pet-three.vercel.app/api/demo/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64, category }),
      })

      const json = await res.json()
      const { score, feedback, points, tokens, fallback } = json
      const statEffects = computeStatEffects(score)

      setResult({ score, feedback, points, tokens, fallback, statEffects })

      // Apply effects to regenmon
      const clamp = (v: number) => Math.max(0, Math.min(100, v))
      const newTotalPoints = data.totalPoints + points
      const newBalance = data.balance + tokens
      const newHistory: TrainingEntry[] = [
        { score, category, timestamp: new Date().toISOString() },
        ...data.trainingHistory,
      ].slice(0, 20)

      const prevStage = data.stage
      const newStage = checkEvolution(newTotalPoints, data.stage)
      let bonusTokens = 0
      if (newStage > prevStage) {
        bonusTokens = 100
        setEvolutionAlert(
          `${data.name} evoluciono a etapa ${newStage}! +100 tokens bonus`
        )
      }

      const updated: RegenmonData = {
        ...data,
        happiness: clamp(data.happiness + statEffects.happiness),
        energy: clamp(data.energy + statEffects.energy),
        hunger: clamp(data.hunger + statEffects.hunger),
        totalPoints: newTotalPoints,
        stage: newStage,
        balance: newBalance + bonusTokens,
        trainingHistory: newHistory,
      }

      saveRegenmon(updated)
      onUpdate(updated)
    } catch {
      const fallbackScore = Math.floor(Math.random() * 21) + 40
      const statEffects = computeStatEffects(fallbackScore)
      setResult({
        score: fallbackScore,
        feedback: "Sistema de evaluacion temporalmente no disponible. Score por defecto asignado.",
        points: fallbackScore,
        tokens: Math.floor(fallbackScore * 0.5),
        fallback: true,
        statEffects,
      })
    } finally {
      setIsEvaluating(false)
    }
  }

  function handleTrainAgain() {
    setResult(null)
    setImagePreview(null)
    setImageBase64(null)
    setCategory(null)
    setEvolutionAlert(null)
    setFileError(null)
    if (fileRef.current) fileRef.current.value = ""
  }

  const nextEvoPts = getNextEvolutionPoints(data.stage)

  // --- RESULTS VIEW ---
  if (result) {
    return (
      <div className="flex flex-col gap-4 animate-slide-up">
        {/* Evolution alert */}
        {evolutionAlert && (
          <div
            className="nes-container is-rounded text-center animate-pop-in"
            style={{ borderColor: "#ffdd57", background: "#ffdd5710" }}
          >
            <p className="text-[10px]" style={{ color: "#ffdd57" }}>
              {"\u{1F389} "}{evolutionAlert}
            </p>
          </div>
        )}

        {/* Score card */}
        <div className={`nes-container is-rounded ${scoreBgClass(result.score)} animate-pop-in`}>
          <div className="flex flex-col items-center gap-3 py-2">
            <span className="text-2xl">{scoreEmoji(result.score)}</span>
            <span className="text-lg" style={{ color: "#e2e8f0" }}>
              {result.score}/100
            </span>
            {result.fallback && (
              <p className="text-[8px]" style={{ color: "#ffdd57" }}>
                {"\u26A0\uFE0F Score por defecto asignado"}
              </p>
            )}
          </div>
        </div>

        {/* Feedback */}
        <div className="nes-container is-rounded is-dark">
          <p className="text-[9px] mb-2" style={{ color: "#484f58" }}>
            {"Feedback de la IA"}
          </p>
          <p className="text-[9px] leading-relaxed" style={{ color: "#e2e8f0" }}>
            {result.feedback}
          </p>
        </div>

        {/* Rewards */}
        <div className="nes-container is-rounded">
          <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
            {"Recompensas ganadas"}
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px]" style={{ color: "#ffdd57" }}>
                {"\u2B50 +"}{result.points}{" Puntos"}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px]" style={{ color: "#4cd964" }}>
                {"\u{1F34E} +"}{result.tokens}{" Tokens"}
              </span>
            </div>
          </div>
        </div>

        {/* Stat effects */}
        <div className="nes-container is-rounded">
          <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
            {"Efectos en stats"}
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Felicidad", value: result.statEffects.happiness },
              { label: "Energia", value: result.statEffects.energy },
              { label: "Hambre", value: result.statEffects.hunger },
            ].map((e) => (
              <div key={e.label} className="flex items-center justify-between">
                <span className="text-[9px]" style={{ color: "#8b949e" }}>
                  {e.label}
                </span>
                <span
                  className="text-[9px]"
                  style={{ color: e.value >= 0 ? "#4cd964" : "#ff6b6b" }}
                >
                  {e.value >= 0 ? "+" : ""}{e.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution progress */}
        <div className="nes-container is-rounded">
          <p className="text-[9px] mb-2" style={{ color: "#484f58" }}>
            {"Progreso de evolucion"}
          </p>
          <p className="text-[9px]" style={{ color: "#e2e8f0" }}>
            {"Total: "}{data.totalPoints}{" pts | "}{STAGE_ICONS[data.stage]}{" Etapa "}{data.stage}{"/3"}
            {nextEvoPts != null && (
              <span style={{ color: "#8b949e" }}>
                {" | Proxima: "}{nextEvoPts}{" pts"}
              </span>
            )}
          </p>
          {nextEvoPts != null && (
            <div className="stat-track mt-3">
              <div
                className="stat-fill"
                style={{
                  width: `${Math.min(100, (data.totalPoints / nextEvoPts) * 100)}%`,
                  background: accentColor,
                }}
              />
            </div>
          )}
        </div>

        {/* Train again */}
        <button
          type="button"
          className="nes-btn is-warning w-full"
          onClick={handleTrainAgain}
        >
          {"\u{1F393} Entrenar Nuevamente"}
        </button>
      </div>
    )
  }

  // --- UPLOAD / CATEGORY VIEW ---
  return (
    <div className="flex flex-col gap-4 animate-slide-up">
      {/* Categories */}
      <div>
        <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
          {"Categoria de entrenamiento"}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => {
            const isSelected = category === cat.key
            return (
              <button
                key={cat.key}
                type="button"
                className={`training-category-btn ${isSelected ? "training-category-selected" : ""}`}
                onClick={() => setCategory(cat.key)}
                aria-pressed={isSelected}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-[9px]">{cat.label}</span>
                <span className="text-[7px]" style={{ color: isSelected ? "#ff9800" : "#484f58" }}>
                  {cat.description}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Upload section */}
      <div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Seleccionar imagen para evaluar"
        />

        {!imagePreview ? (
          <button
            type="button"
            className="nes-btn w-full"
            onClick={() => fileRef.current?.click()}
            style={{ fontSize: "10px" }}
          >
            {"\u{1F4F8} Subir Captura"}
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <div
              className="relative overflow-hidden"
              style={{
                height: "300px",
                border: "4px solid #ff9800",
                borderRadius: "8px",
                background: "#0d1117",
              }}
            >
              <Image
                src={imagePreview}
                alt="Preview de imagen a evaluar"
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="nes-btn is-success"
                onClick={handleEvaluate}
                disabled={!category || isEvaluating}
                style={{ fontSize: "9px" }}
              >
                {isEvaluating ? "\u{1F504} Evaluando..." : "\u2705 Evaluar"}
              </button>
              <button
                type="button"
                className="nes-btn is-error"
                onClick={handleCancel}
                disabled={isEvaluating}
                style={{ fontSize: "9px" }}
              >
                {"\u274C Cancelar"}
              </button>
            </div>
          </div>
        )}

        {fileError && (
          <p className="text-[9px] mt-2" style={{ color: "#ff6b6b" }}>
            {fileError}
          </p>
        )}

        {!category && imagePreview && (
          <p className="text-[8px] mt-2" style={{ color: "#ffdd57" }}>
            {"Selecciona una categoria antes de evaluar"}
          </p>
        )}
      </div>

      {/* Quick stats */}
      <div className="nes-container is-rounded">
        <div className="flex justify-between text-[9px]" style={{ color: "#8b949e" }}>
          <span>
            {STAGE_ICONS[data.stage]}{" "}{STAGE_LABELS[data.stage]}
          </span>
          <span>
            {"\u2B50 "}{data.totalPoints}{" pts"}
          </span>
          <span>
            {"\u{1F34E} "}{data.balance}{" $FRUTA"}
          </span>
        </div>
        {nextEvoPts != null && (
          <div className="stat-track mt-3">
            <div
              className="stat-fill"
              style={{
                width: `${Math.min(100, (data.totalPoints / nextEvoPts) * 100)}%`,
                background: accentColor,
              }}
            />
          </div>
        )}
      </div>

      {/* Training history */}
      {data.trainingHistory.length > 0 && (
        <div className="nes-container is-rounded">
          <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
            {"Historial reciente"}
          </p>
          <div className="flex flex-col gap-2" style={{ maxHeight: "120px", overflowY: "auto" }}>
            {data.trainingHistory.slice(0, 5).map((entry, i) => (
              <div
                key={`${entry.timestamp}-${i}`}
                className="flex items-center justify-between text-[8px]"
                style={{ color: "#8b949e" }}
              >
                <span>
                  {scoreEmoji(entry.score)}{" "}{entry.score}/100
                </span>
                <span>{entry.category}</span>
                <span>
                  {new Date(entry.timestamp).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
