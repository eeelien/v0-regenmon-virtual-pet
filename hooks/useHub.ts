"use client"

const HUB_URL = ""  // local CF Pages Functions

export interface HubProfile {
  id: string
  name: string
  type: string
  stage: number
  totalPoints: number
  happiness: number
  energy: number
  hunger: number
  balance: number
  memoryCount: number
  isPublic: boolean
  lastSync: string
}

export interface FeedItem {
  id: string
  type: string
  message: string
  timestamp: string
  fromName?: string
  toName?: string
}

async function hubFetch<T>(path: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${HUB_URL}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...options?.headers },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export function useHub() {
  async function registerInHub(profile: Partial<HubProfile>): Promise<HubProfile | null> {
    return hubFetch<HubProfile>("/api/hub/register", {
      method: "POST",
      body: JSON.stringify(profile),
    })
  }

  async function syncToHub(profile: Partial<HubProfile>): Promise<boolean> {
    const res = await hubFetch("/api/hub/sync", {
      method: "POST",
      body: JSON.stringify(profile),
    })
    return res !== null
  }

  async function getLeaderboard(): Promise<HubProfile[]> {
    return (await hubFetch<HubProfile[]>("/api/hub/leaderboard")) ?? []
  }

  async function getProfile(id: string): Promise<HubProfile | null> {
    return hubFetch<HubProfile>(`/api/hub/profile/${id}`)
  }

  async function sendGift(fromId: string, toId: string, amount: number): Promise<boolean> {
    const res = await hubFetch("/api/hub/gift", {
      method: "POST",
      body: JSON.stringify({ fromId, toId, amount }),
    })
    return res !== null
  }

  async function getFeed(): Promise<FeedItem[]> {
    return (await hubFetch<FeedItem[]>("/api/hub/feed")) ?? []
  }

  return { registerInHub, syncToHub, getLeaderboard, getProfile, sendGift, getFeed }
}
