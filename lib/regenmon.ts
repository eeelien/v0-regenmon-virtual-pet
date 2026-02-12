export type RegenmonType = "semilla" | "gota" | "chispa"

export interface RegenmonData {
  name: string
  type: RegenmonType
  happiness: number
  energy: number
  hunger: number
  createdAt: string
}

export const TYPE_CONFIG: Record<
  RegenmonType,
  {
    label: string
    emoji: string
    color: string
    colorHex: string
    image: string
    description: string
  }
> = {
  semilla: {
    label: "Semilla",
    emoji: "\u{1F331}",
    color: "is-success",
    colorHex: "#4cd964",
    image: "/regenmon-semilla.jpg",
    description: "Naturaleza y vida",
  },
  gota: {
    label: "Gota",
    emoji: "\u{1F4A7}",
    color: "is-primary",
    colorHex: "#209cee",
    image: "/regenmon-gota.jpg",
    description: "Agua y serenidad",
  },
  chispa: {
    label: "Chispa",
    emoji: "\u2728",
    color: "is-warning",
    colorHex: "#ffdd57",
    image: "/regenmon-chispa.jpg",
    description: "Luz y energia",
  },
}

const STORAGE_KEY = "regenmon-data"

export function loadRegenmon(): RegenmonData | null {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as RegenmonData
  } catch {
    return null
  }
}

export function saveRegenmon(data: RegenmonData): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function deleteRegenmon(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
