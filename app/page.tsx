"use client"

import { useState, useEffect } from "react"
import type { RegenmonData, RegenmonType } from "@/lib/regenmon"
import { loadRegenmon, saveRegenmon, deleteRegenmon } from "@/lib/regenmon"
import { CreateScreen } from "@/components/create-screen"
import { PetScreen } from "@/components/pet-screen"

export default function Page() {
  const [regenmon, setRegenmon] = useState<RegenmonData | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const saved = loadRegenmon()
    setRegenmon(saved)
    setLoaded(true)
  }, [])

  function handleCreate(name: string, type: RegenmonType) {
    const newPet: RegenmonData = {
      name,
      type,
      happiness: 50,
      energy: 50,
      hunger: 50,
      createdAt: new Date().toISOString(),
    }
    saveRegenmon(newPet)
    setRegenmon(newPet)
  }

  function handleUpdate(updated: RegenmonData) {
    setRegenmon(updated)
  }

  function handleReset() {
    deleteRegenmon()
    setRegenmon(null)
  }

  if (!loaded) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <i className="nes-pokeball animate-pulse-glow" aria-hidden="true" />
        <p className="text-[10px]" style={{ color: "#484f58" }}>
          {"Cargando..."}
        </p>
      </main>
    )
  }

  if (!regenmon) {
    return <CreateScreen onCreate={handleCreate} />
  }

  return <PetScreen data={regenmon} onUpdate={handleUpdate} onReset={handleReset} />
}
