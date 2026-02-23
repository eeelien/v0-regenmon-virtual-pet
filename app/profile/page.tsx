"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useHub, type HubProfile } from "@/hooks/useHub"
import { SocialActions } from "@/components/social-actions"

function ProfileContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || ""
  const hub = useHub()
  const [profile, setProfile] = useState<HubProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) { setError("ID no proporcionado"); setLoading(false); return }
    hub.getProfile(id)
      .then((p) => { if (p) setProfile(p); else setError("Regenmon no encontrado") })
      .catch(() => setError("Error al cargar perfil"))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <main className="min-h-screen flex items-center justify-center"><p className="text-[10px] animate-pulse">Buscando en La Red...</p></main>
  if (error || !profile) return <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-4"><p className="text-[10px]" style={{color:"#e74c3c"}}>{error||"No encontrado"}</p><Link href="/" className="nes-btn is-primary" style={{fontSize:10}}>Volver</Link></main>

  const typeEmoji: Record<string,string> = { semilla:"🌱", gota:"💧", chispa:"✨" }
  const stageLabel: Record<number,string> = { 1:"Bebé", 2:"Joven", 3:"Adulto" }

  return (
    <main className="min-h-screen flex flex-col items-center p-4 gap-4" style={{paddingTop:24}}>
      <div className="nes-container is-dark with-title" style={{maxWidth:380,width:"100%"}}>
        <p className="title" style={{fontSize:10}}>Perfil</p>
        <div className="flex flex-col items-center gap-3">
          <span style={{fontSize:48}}>{typeEmoji[profile.type]||"❓"}</span>
          <p style={{fontSize:14}}>{profile.name}</p>
          <p style={{fontSize:10,color:"#888"}}>{stageLabel[profile.stage]||"?"} · {profile.type}</p>
          <div className="w-full flex flex-col gap-2" style={{fontSize:10}}>
            <div className="flex justify-between"><span>😊 Felicidad</span><span>{profile.happiness}</span></div>
            <div className="flex justify-between"><span>⚡ Energía</span><span>{profile.energy}</span></div>
            <div className="flex justify-between"><span>🍔 Hambre</span><span>{profile.hunger}</span></div>
            <div className="flex justify-between"><span>⭐ Puntos</span><span>{profile.totalPoints}</span></div>
          </div>
          <SocialActions targetId={profile.id} targetName={profile.name} />
        </div>
      </div>
      <Link href="/leaderboard" className="nes-btn" style={{fontSize:10}}>← Volver a La Red</Link>
    </main>
  )
}

export default function ProfilePage() {
  return <Suspense fallback={<main className="min-h-screen flex items-center justify-center"><p className="text-[10px]">Cargando...</p></main>}><ProfileContent /></Suspense>
}
