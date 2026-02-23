"use client"

import { useEffect, useState } from "react"
import { useHub, type FeedItem } from "@/hooks/useHub"

interface Props {
  accentColor: string
}

export function ActivityFeed({ accentColor }: Props) {
  const { getFeed } = useHub()
  const [feed, setFeed] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFeed().then((items) => {
      setFeed(items)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="nes-container is-rounded animate-slide-up">
      <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>📡 Actividad reciente</p>
      {loading ? (
        <p className="text-[8px]" style={{ color: "#8b949e" }}>Cargando...</p>
      ) : feed.length === 0 ? (
        <p className="text-[8px]" style={{ color: "#8b949e" }}>
          No hay actividad aún. ¡Sé el primero en registrarte!
        </p>
      ) : (
        <div className="flex flex-col gap-2" style={{ maxHeight: 200, overflowY: "auto" }}>
          {feed.slice(0, 20).map((item) => (
            <div key={item.id} className="text-[8px] flex gap-2" style={{ color: "#c9d1d9" }}>
              <span style={{ color: accentColor }}>•</span>
              <span>{item.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
