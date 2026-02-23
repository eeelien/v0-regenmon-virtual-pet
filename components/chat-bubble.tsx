"use client"

import { useEffect, useRef, useState } from "react"

export interface ChatMessage {
  id: number
  text: string
  sender: "user" | "pet"
  timestamp: number
}

interface ChatBubbleProps {
  message: ChatMessage
  petColor: string
  isNew: boolean
}

export function ChatBubble({ message, petColor, isNew }: ChatBubbleProps) {
  const isUser = message.sender === "user"

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${isNew ? "animate-bounce-in" : ""}`}
    >
      <div
        className="max-w-[80%] px-3 py-2"
        style={{
          background: isUser ? "#1c2129" : `${petColor}18`,
          border: `2px solid ${isUser ? "#30363d" : petColor + "40"}`,
          borderRadius: isUser ? "8px 8px 0 8px" : "8px 8px 8px 0",
          fontSize: "9px",
          lineHeight: "1.6",
          color: isUser ? "#e2e8f0" : petColor,
        }}
      >
        {message.text}
      </div>
    </div>
  )
}

interface ChatContainerProps {
  messages: ChatMessage[]
  petColor: string
  onSend: (text: string) => void
  petName: string
}

export function ChatContainer({ messages, petColor, onSend, petName }: ChatContainerProps) {
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [latestId, setLatestId] = useState(0)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
    if (messages.length > 0) {
      setLatestId(messages[messages.length - 1].id)
    }
  }, [messages])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    onSend(trimmed)
    setInput("")
  }

  return (
    <div className="nes-container is-rounded animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <p className="text-[9px] mb-3" style={{ color: "#484f58" }}>
        {"Habla con "}{petName}
      </p>

      <div
        ref={scrollRef}
        className="flex flex-col gap-2 overflow-y-auto mb-3"
        style={{ maxHeight: "180px", minHeight: "60px" }}
      >
        {messages.length === 0 && (
          <p className="text-[8px] text-center py-4" style={{ color: "#30363d" }}>
            {"Escribe algo para hablar con tu mascota..."}
          </p>
        )}
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg}
            petColor={petColor}
            isNew={msg.id === latestId}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="nes-input flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe..."
          maxLength={200}
          style={{ fontSize: "9px", padding: "6px 10px" }}
          aria-label={`Mensaje para ${petName}`}
        />
        <button
          type="submit"
          className="nes-btn is-primary"
          disabled={!input.trim()}
          style={{ fontSize: "9px", padding: "6px 12px" }}
        >
          {"Enviar"}
        </button>
      </form>
    </div>
  )
}
