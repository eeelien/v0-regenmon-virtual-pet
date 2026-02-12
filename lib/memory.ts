export interface Memory {
  key: string
  value: string
  type: "name" | "like" | "dislike" | "fact"
  createdAt: string
}

const MEMORY_KEY = "regenmon-memories"

export function loadMemories(): Memory[] {
  if (typeof window === "undefined") return []
  const raw = localStorage.getItem(MEMORY_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw) as Memory[]
  } catch {
    return []
  }
}

export function saveMemories(memories: Memory[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(MEMORY_KEY, JSON.stringify(memories))
}

export function addMemory(memory: Omit<Memory, "createdAt">): Memory[] {
  const memories = loadMemories()
  const existing = memories.findIndex((m) => m.key === memory.key)
  const newMemory: Memory = { ...memory, createdAt: new Date().toISOString() }
  if (existing >= 0) {
    memories[existing] = newMemory
  } else {
    memories.push(newMemory)
  }
  saveMemories(memories)
  return memories
}

export function deleteAllMemories(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(MEMORY_KEY)
}

const LIKE_PATTERNS: { pattern: RegExp; extract: (match: RegExpMatchArray) => { key: string; value: string; type: Memory["type"] } }[] = [
  {
    pattern: /me llamo\s+(\w+)/i,
    extract: (m) => ({ key: "user_name", value: m[1], type: "name" }),
  },
  {
    pattern: /mi nombre es\s+(\w+)/i,
    extract: (m) => ({ key: "user_name", value: m[1], type: "name" }),
  },
  {
    pattern: /soy\s+(\w+)/i,
    extract: (m) => ({ key: "user_name", value: m[1], type: "name" }),
  },
  {
    pattern: /me gusta(?:n)?\s+(?:el |la |los |las |mucho )?(.+)/i,
    extract: (m) => ({ key: `like_${m[1].trim().toLowerCase().slice(0, 30)}`, value: m[1].trim(), type: "like" }),
  },
  {
    pattern: /me encanta(?:n)?\s+(?:el |la |los |las )?(.+)/i,
    extract: (m) => ({ key: `like_${m[1].trim().toLowerCase().slice(0, 30)}`, value: m[1].trim(), type: "like" }),
  },
  {
    pattern: /mi (?:comida |color |animal |deporte |juego )?favorit[oa] es\s+(.+)/i,
    extract: (m) => ({ key: `fav_${m[1].trim().toLowerCase().slice(0, 30)}`, value: m[1].trim(), type: "like" }),
  },
  {
    pattern: /no me gusta(?:n)?\s+(?:el |la |los |las )?(.+)/i,
    extract: (m) => ({ key: `dislike_${m[1].trim().toLowerCase().slice(0, 30)}`, value: m[1].trim(), type: "dislike" }),
  },
  {
    pattern: /odio\s+(?:el |la |los |las )?(.+)/i,
    extract: (m) => ({ key: `dislike_${m[1].trim().toLowerCase().slice(0, 30)}`, value: m[1].trim(), type: "dislike" }),
  },
  {
    pattern: /tengo\s+(\d+)\s+a[nñ]os/i,
    extract: (m) => ({ key: "user_age", value: m[1], type: "fact" }),
  },
  {
    pattern: /vivo en\s+(.+)/i,
    extract: (m) => ({ key: "user_location", value: m[1].trim(), type: "fact" }),
  },
]

export function extractMemories(message: string): Omit<Memory, "createdAt">[] {
  const found: Omit<Memory, "createdAt">[] = []
  for (const { pattern, extract } of LIKE_PATTERNS) {
    const match = message.match(pattern)
    if (match) {
      found.push(extract(match))
    }
  }
  return found
}

export function buildMemoryContext(memories: Memory[]): string {
  if (memories.length === 0) return ""
  const parts: string[] = []
  const userName = memories.find((m) => m.key === "user_name")
  if (userName) parts.push(`El usuario se llama ${userName.value}.`)
  const likes = memories.filter((m) => m.type === "like")
  if (likes.length > 0) parts.push(`Le gusta: ${likes.map((l) => l.value).join(", ")}.`)
  const dislikes = memories.filter((m) => m.type === "dislike")
  if (dislikes.length > 0) parts.push(`No le gusta: ${dislikes.map((d) => d.value).join(", ")}.`)
  const facts = memories.filter((m) => m.type === "fact" && m.key !== "user_name")
  if (facts.length > 0) parts.push(`Datos: ${facts.map((f) => `${f.key.replace("user_", "")}: ${f.value}`).join(", ")}.`)
  return parts.join(" ")
}
