"use client"

import type { Memory } from "@/lib/memory"

interface MemoryIndicatorProps {
  memories: Memory[]
  color: string
}

export function MemoryIndicator({ memories, color }: MemoryIndicatorProps) {
  if (memories.length === 0) return null

  return (
    <div
      className="flex items-center gap-2 px-3 py-1"
      style={{
        background: `${color}10`,
        border: `2px solid ${color}30`,
        borderRadius: "6px",
        fontSize: "9px",
        color,
      }}
      title={memories.map((m) => `${m.type}: ${m.value}`).join(", ")}
    >
      <span aria-hidden="true">{"🧠"}</span>
      <span>{memories.length} {memories.length === 1 ? "memoria" : "memorias"}</span>
    </div>
  )
}
