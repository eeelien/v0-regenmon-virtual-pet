"use client"

import { useState, useEffect } from "react"

interface FloatingItem {
  id: number
  text: string
  color: string
}

let idCounter = 0

export function useFloatingText() {
  const [items, setItems] = useState<FloatingItem[]>([])

  function spawn(text: string, color: string) {
    const id = ++idCounter
    setItems((prev) => [...prev, { id, text, color }])
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }, 1200)
  }

  return { items, spawn }
}

export function FloatingTextLayer({ items }: { items: FloatingItem[] }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <FloatingTextItem key={item.id} text={item.text} color={item.color} />
      ))}
    </div>
  )
}

function FloatingTextItem({ text, color }: { text: string; color: string }) {
  const [style, setStyle] = useState<React.CSSProperties>({
    position: "absolute",
    left: "50%",
    top: "45%",
    transform: "translateX(-50%) translateY(0)",
    opacity: 1,
    transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
    color,
    fontSize: "11px",
    fontFamily: 'var(--font-press-start), "Press Start 2P", cursive',
    textShadow: `0 0 8px ${color}80, 0 0 16px ${color}40`,
    whiteSpace: "nowrap",
  })

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setStyle((prev) => ({
          ...prev,
          transform: "translateX(-50%) translateY(-80px)",
          opacity: 0,
        }))
      })
    })
  }, [])

  return <div style={style}>{text}</div>
}
