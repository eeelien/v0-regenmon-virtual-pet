"use client"

import { useEffect, useRef, useState } from "react"
import { useHub } from "./useHub"
import type { RegenmonData } from "@/lib/regenmon"
import { loadMemories } from "@/lib/memory"

const SYNC_INTERVAL = 5 * 60 * 1000

export function useHubSync(data: RegenmonData | null) {
  const { syncToHub } = useHub()
  const [syncStatus, setSyncStatus] = useState<"idle" | "syncing" | "ok" | "error">("idle")
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  function buildProfile() {
    if (!data) return null
    const hubId = typeof window !== "undefined" ? localStorage.getItem("regenmon-hub-id") : null
    if (!hubId) return null
    return {
      id: hubId,
      name: data.name,
      type: data.type,
      stage: data.stage,
      totalPoints: data.totalPoints,
      happiness: data.happiness,
      energy: data.energy,
      hunger: data.hunger,
      balance: data.balance,
      memoryCount: loadMemories().length,
      isPublic: true,
      lastSync: new Date().toISOString(),
    }
  }

  async function doSync() {
    const profile = buildProfile()
    if (!profile) return
    setSyncStatus("syncing")
    const ok = await syncToHub(profile)
    setSyncStatus(ok ? "ok" : "error")
  }

  useEffect(() => {
    doSync()
    timer.current = setInterval(doSync, SYNC_INTERVAL)
    return () => { if (timer.current) clearInterval(timer.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.totalPoints, data?.stage])

  return { syncStatus, doSync }
}
