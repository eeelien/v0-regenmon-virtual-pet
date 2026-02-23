"use client"

import { useState, useEffect } from "react"
import { usePrivy } from "@privy-io/react-auth"
import type { RegenmonData, RegenmonType } from "@/lib/regenmon"
import { loadRegenmon, saveRegenmon, deleteRegenmon } from "@/lib/regenmon"
import { deleteAllMemories } from "@/lib/memory"
import { CreateScreen } from "@/components/create-screen"
import { PetScreen } from "@/components/pet-screen"
import { HatchScreen } from "@/components/hatch-screen"

export default function Page() {
  const { ready, authenticated, login } = usePrivy()
  const [regenmon, setRegenmon] = useState<RegenmonData | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [hatching, setHatching] = useState<{ name: string; type: RegenmonType } | null>(null)

  useEffect(() => {
    if (ready && authenticated) {
      const saved = loadRegenmon()
      setRegenmon(saved)
      setLoaded(true)
    }
  }, [ready, authenticated])

  function handleCreate(name: string, type: RegenmonType) {
    setHatching({ name, type })
  }

  function handleHatchComplete() {
    if (!hatching) return
    const newPet: RegenmonData = {
      name: hatching.name,
      type: hatching.type,
      happiness: 50,
      energy: 50,
      hunger: 50,
      createdAt: new Date().toISOString(),
      totalPoints: 0,
      stage: 1,
      balance: 0,
      trainingHistory: [],
    }
    saveRegenmon(newPet)
    setRegenmon(newPet)
    setHatching(null)
  }

  function handleUpdate(updated: RegenmonData) {
    setRegenmon(updated)
  }

  function handleReset() {
    deleteRegenmon()
    deleteAllMemories()
    setRegenmon(null)
  }

  if (!ready) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <i className="nes-pokeball animate-pulse-glow" aria-hidden="true" />
        <p className="text-[10px]" style={{ color: "#484f58" }}>Cargando...</p>
      </main>
    )
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div className="nes-container is-rounded flex flex-col items-center gap-4" style={{ maxWidth: 360 }}>
          <p className="text-sm" style={{ color: "#209cee" }}>🥚 Regenmon</p>
          <p className="text-[9px] text-center leading-relaxed" style={{ color: "#8b949e" }}>
            Inicia sesión con tu correo para crear y cuidar tu mascota virtual
          </p>
          <button type="button" className="nes-btn is-primary" style={{ fontSize: "9px" }} onClick={login}>
            Iniciar Sesión
          </button>
        </div>
      </main>
    )
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

  if (hatching) {
    return <HatchScreen name={hatching.name} type={hatching.type} onComplete={handleHatchComplete} />
  }

  if (!regenmon) {
    return <CreateScreen onCreate={handleCreate} />
  }

  return <PetScreen data={regenmon} onUpdate={handleUpdate} onReset={handleReset} />
}
