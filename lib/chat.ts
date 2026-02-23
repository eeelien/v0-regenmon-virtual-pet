import type { RegenmonData } from "@/lib/regenmon"
import { TYPE_CONFIG } from "@/lib/regenmon"
import type { Memory } from "@/lib/memory"
import { buildMemoryContext } from "@/lib/memory"

const GREETINGS = [
  "Hola! Que bueno verte!",
  "Yay! Quieres hablar conmigo?",
  "Estaba esperandote!",
]

const HAPPY_RESPONSES = [
  "Me siento genial hoy!",
  "Estoy super contento!",
  "La vida es bella!",
  "Todo esta increible!",
]

const NORMAL_RESPONSES = [
  "Estoy bien, gracias por preguntar.",
  "Normal, aqui andamos.",
  "Podria estar mejor, pero no me quejo.",
]

const SAD_RESPONSES = [
  "Estoy un poco triste...",
  "Me siento solito...",
  "Necesito mas atencion...",
  "No me siento muy bien hoy...",
]

const HUNGRY_RESPONSES = [
  "Tengo mucha hambre! Dame de comer!",
  "Mi pancita hace ruidos...",
  "Necesito comida urgente!",
]

const TIRED_RESPONSES = [
  "Estoy agotado... necesito dormir.",
  "Mis ojitos se cierran solos...",
  "Zzz... perdon, me quede dormido un segundo.",
]

const PLAY_RESPONSES = [
  "Si! Vamos a jugar!",
  "Me encanta jugar contigo!",
  "Eso suena divertido!",
]

const FOOD_RESPONSES = [
  "Mmmm que rico! Gracias!",
  "Me encanta la comida!",
  "Delicioso! Quiero mas!",
]

const LOVE_RESPONSES = [
  "Yo tambien te quiero mucho!",
  "Eres el mejor!",
  "Me haces muy feliz!",
]

const MEMORY_GREETINGS = [
  "Me acuerdo de ti, {name}!",
  "Hola {name}! Que bueno verte de nuevo!",
  "{name}! Te extrañaba!",
]

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generatePetResponse(
  message: string,
  pet: RegenmonData,
  memories: Memory[]
): string {
  const lower = message.toLowerCase()
  const config = TYPE_CONFIG[pet.type]
  const memoryContext = buildMemoryContext(memories)
  const userName = memories.find((m) => m.key === "user_name")

  // Greetings
  if (/^(hola|hey|buenas|hi|hello|que tal|ey)\b/i.test(lower)) {
    if (userName) {
      return pick(MEMORY_GREETINGS).replace("{name}", userName.value)
    }
    return pick(GREETINGS)
  }

  // How are you / status
  if (/como est[aá]s|que tal est[aá]s|como te sientes|como vas/i.test(lower)) {
    if (pet.hunger < 25) return pick(HUNGRY_RESPONSES)
    if (pet.energy < 25) return pick(TIRED_RESPONSES)
    if (pet.happiness > 70) return pick(HAPPY_RESPONSES)
    if (pet.happiness > 40) return pick(NORMAL_RESPONSES)
    return pick(SAD_RESPONSES)
  }

  // Food
  if (/comer|comida|hambre|alimentar|fruta|manzana/i.test(lower)) {
    return pick(FOOD_RESPONSES)
  }

  // Play
  if (/jugar|juego|divertir|bola|pelota/i.test(lower)) {
    return pick(PLAY_RESPONSES)
  }

  // Sleep
  if (/dormir|descansar|sue[nñ]o|cansad/i.test(lower)) {
    return pick(TIRED_RESPONSES)
  }

  // Love
  if (/te quiero|te amo|love|cari[nñ]o|amor/i.test(lower)) {
    return pick(LOVE_RESPONSES)
  }

  // Name mention
  if (/como te llamas|tu nombre|quien eres/i.test(lower)) {
    return `Me llamo ${pet.name}! Soy un ${config.label} ${config.emoji}`
  }

  // User introduces themselves - use memory
  if (/me llamo|mi nombre es|soy /i.test(lower)) {
    const nameMatch = lower.match(/(?:me llamo|mi nombre es|soy)\s+(\w+)/i)
    if (nameMatch) {
      return `Mucho gusto, ${nameMatch[1]}! Voy a recordar tu nombre!`
    }
  }

  // User shares likes
  if (/me gusta|me encanta|favorit/i.test(lower)) {
    return "Que interesante! Voy a recordar eso!"
  }

  // Memory-aware responses
  if (memoryContext && /recuerd|memori|sabes de mi/i.test(lower)) {
    const parts = []
    if (userName) parts.push(`Se que te llamas ${userName.value}`)
    const likes = memories.filter((m) => m.type === "like")
    if (likes.length > 0) parts.push(`te gusta ${likes.map((l) => l.value).join(" y ")}`)
    const facts = memories.filter((m) => m.type === "fact")
    if (facts.length > 0) parts.push(`se que ${facts.map((f) => f.value).join(", ")}`)
    return parts.length > 0 ? parts.join(", ") + "!" : "Hmm, aun no se mucho de ti. Cuentame algo!"
  }

  // Default
  const defaults = [
    `${config.emoji} *hace sonidos de ${config.label}*`,
    "No entiendo bien, pero me gusta hablar contigo!",
    "Cuentame mas! Me encanta escucharte!",
    "Interesante! Que mas me quieres decir?",
    `*${pet.name} te mira con curiosidad*`,
  ]
  return pick(defaults)
}
