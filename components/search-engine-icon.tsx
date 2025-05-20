"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { SearchEngine } from "@/hooks/use-search-engine"

interface SearchEngineIconProps {
  engine: SearchEngine
  size?: number
  className?: string
}

export default function SearchEngineIcon({ engine, size = 24, className = "" }: SearchEngineIconProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Reset error state when engine changes
  useEffect(() => {
    setImageError(false)
    setIsLoading(true)
  }, [engine])

  if (!engine.favicon || imageError) {
    return (
      <div
        className={`flex items-center justify-center rounded-full ${className}`}
        style={{
          backgroundColor: engine.color || "#4285F4",
          width: size,
          height: size,
        }}
      >
        <span className="text-white font-bold text-xs">{engine.name.charAt(0)}</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src={engine.favicon || "/placeholder.svg"}
        alt={`${engine.name} logo`}
        width={size}
        height={size}
        className={`rounded-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
        onError={() => setImageError(true)}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{ backgroundColor: engine.color || "#4285F4" }}
        >
          <span className="text-white font-bold text-xs">{engine.name.charAt(0)}</span>
        </div>
      )}
    </div>
  )
}
