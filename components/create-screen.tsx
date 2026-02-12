"use client"

import { useState } from "react"
import Image from "next/image"
import type { RegenmonType } from "@/lib/regenmon"
import { TYPE_CONFIG } from "@/lib/regenmon"

interface CreateScreenProps {
  onCreate: (name: string, type: RegenmonType) => void
}

const typeKeys: RegenmonType[] = ["semilla", "gota", "chispa"]

export function CreateScreen({ onCreate }: CreateScreenProps) {
  const [name, setName] = useState("")
  const [selectedType, setSelectedType] = useState<RegenmonType | null>(null)

  const isNameValid = name.trim().length >= 2 && name.trim().length <= 15
  const canCreate = isNameValid && selectedType !== null

  function handleSubmit() {
    if (!canCreate || !selectedType) return
    onCreate(name.trim(), selectedType)
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 gap-6">
      {/* Floating egg */}
      <div className="animate-float animate-slide-up">
        <div className="pet-frame">
          <Image
            src="/regenmon-egg.jpg"
            alt="Un huevo de Regenmon esperando eclosionar"
            width={120}
            height={120}
            className="block"
            style={{ imageRendering: "pixelated" }}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2 animate-slide-up" style={{ animationDelay: "0.05s" }}>
        <h1 className="text-base md:text-lg" style={{ color: "#4cd964" }}>
          {"Crea tu Regenmon"}
        </h1>
        <p className="text-[9px]" style={{ color: "#484f58" }}>
          {"Elige un nombre y un tipo para tu mascota"}
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="nes-container is-rounded" style={{ background: "#161b22" }}>
          {/* Name input */}
          <div className="flex flex-col gap-3 mb-6">
            <label htmlFor="pet-name" className="text-[10px]" style={{ color: "#8b949e" }}>
              {"Nombre"}
            </label>
            <input
              id="pet-name"
              type="text"
              className="nes-input"
              placeholder="Escribe un nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={15}
              aria-describedby="name-hint"
            />
            {name.length > 0 && !isNameValid && (
              <p id="name-hint" className="text-[9px]" style={{ color: "#ff6b6b" }}>
                {"Entre 2 y 15 caracteres"}
              </p>
            )}
          </div>

          {/* Type selection */}
          <div className="flex flex-col gap-3 mb-6">
            <p className="text-[10px]" style={{ color: "#8b949e" }}>
              {"Tipo de Regenmon"}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {typeKeys.map((key) => {
                const config = TYPE_CONFIG[key]
                const isSelected = selectedType === key
                const selectedClass = key === "semilla"
                  ? "selected-green"
                  : key === "gota"
                    ? "selected-blue"
                    : "selected-yellow"

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedType(key)}
                    className={`type-card ${isSelected ? selectedClass : ""}`}
                    style={{
                      background: isSelected ? `${config.colorHex}0a` : "#161b22",
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Tipo ${config.label}: ${config.description}`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src={config.image || "/placeholder.svg"}
                        alt={`Regenmon tipo ${config.label}`}
                        width={72}
                        height={72}
                        className="block"
                        style={{ imageRendering: "pixelated" }}
                      />
                      <span
                        className="text-[10px]"
                        style={{ color: isSelected ? config.colorHex : "#8b949e" }}
                      >
                        {config.emoji} {config.label}
                      </span>
                      <span
                        className="text-[8px] hidden sm:block"
                        style={{ color: "#484f58" }}
                      >
                        {config.description}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Create button */}
          <button
            type="button"
            className={`nes-btn ${canCreate ? "is-success" : "is-disabled"} w-full`}
            disabled={!canCreate}
            onClick={handleSubmit}
          >
            {"Eclosionar!"}
          </button>
        </div>
      </div>
    </main>
  )
}
