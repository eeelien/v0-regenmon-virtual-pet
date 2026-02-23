export type RegenmonType = "semilla" | "gota" | "chispa"

export interface TrainingEntry {
  score: number
  category: string
  timestamp: string
}

export interface RegenmonData {
  name: string
  type: RegenmonType
  happiness: number
  energy: number
  hunger: number
  createdAt: string
  totalPoints: number
  stage: 1 | 2 | 3
  balance: number
  trainingHistory: TrainingEntry[]
}

export const EVOLUTION_THRESHOLDS = [0, 500, 1500] as const
export const STAGE_LABELS: Record<number, string> = {
  1: "Bebe",
  2: "Joven",
  3: "Adulto",
}
export const STAGE_ICONS: Record<number, string> = {
  1: "\u{1F95A}",
  2: "\u{1F423}",
  3: "\u{1F409}",
}

export function getNextEvolutionPoints(stage: 1 | 2 | 3): number | null {
  if (stage >= 3) return null
  return EVOLUTION_THRESHOLDS[stage]
}

export function checkEvolution(totalPoints: number, currentStage: 1 | 2 | 3): 1 | 2 | 3 {
  if (totalPoints >= 1500) return 3
  if (totalPoints >= 500) return 2
  return currentStage
}

export type PetMood = "happy" | "sleepy" | "eating" | "sad"

export function getPetMood(data: RegenmonData, actionOverride?: PetMood): PetMood {
  if (actionOverride) return actionOverride
  if (data.energy < 25) return "sleepy"
  if (data.happiness < 30) return "sad"
  return "happy"
}

export const TYPE_CONFIG: Record<
  RegenmonType,
  {
    label: string
    emoji: string
    color: string
    colorHex: string
    image: string
    images: Record<PetMood, string>
    description: string
  }
> = {
  semilla: {
    label: "Semilla",
    emoji: "\u{1F331}",
    color: "is-success",
    colorHex: "#4cd964",
    image: "/semilla-happy.webp",
    images: {
      happy: "/semilla-happy.webp",
      sleepy: "/semilla-sleepy.webp",
      eating: "/semilla-eating.webp",
      sad: "/semilla-sad.webp",
    },
    description: "Naturaleza y vida",
  },
  gota: {
    label: "Gota",
    emoji: "\u{1F4A7}",
    color: "is-primary",
    colorHex: "#209cee",
    image: "/gota-happy.webp",
    images: {
      happy: "/gota-happy.webp",
      sleepy: "/gota-sleepy.webp",
      eating: "/gota-eating.webp",
      sad: "/gota-sad.webp",
    },
    description: "Agua y serenidad",
  },
  chispa: {
    label: "Chispa",
    emoji: "\u2728",
    color: "is-warning",
    colorHex: "#ffdd57",
    image: "/chispa-happy.webp",
    images: {
      happy: "/chispa-happy.webp",
      sleepy: "/chispa-sleepy.webp",
      eating: "/chispa-eating.webp",
      sad: "/chispa-sad.webp",
    },
    description: "Luz y energia",
  },
}

const STORAGE_KEY = "regenmon-data"

export function loadRegenmon(): RegenmonData | null {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    // Migrate old data without training fields
    return {
      totalPoints: 0,
      stage: 1,
      balance: 0,
      trainingHistory: [],
      ...parsed,
    } as RegenmonData
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
