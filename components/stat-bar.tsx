"use client"

interface StatBarProps {
  label: string
  value: number
  max: number
  colorClass: string
  icon: string
}

export function StatBar({ label, value, max, colorClass, icon }: StatBarProps) {
  const percentage = Math.round((value / max) * 100)
  const isLow = percentage < 25
  const fillClass = isLow ? "stat-fill-red" : colorClass

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] flex items-center gap-2" style={{ color: "#8b949e" }}>
          <span>{icon}</span>
          <span>{label}</span>
        </span>
        <span
          className="text-[9px]"
          style={{ color: isLow ? "#ff6b6b" : "#e2e8f0" }}
        >
          {value}/{max}
        </span>
      </div>
      <div className="stat-track">
        <div
          className={`stat-fill ${fillClass}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={`${label}: ${percentage}%`}
        />
      </div>
    </div>
  )
}
