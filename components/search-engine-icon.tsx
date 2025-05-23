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
  const [currentSrc, setCurrentSrc] = useState(engine.favicon || "")

  // Reset error state when engine changes
  useEffect(() => {
    setImageError(false)
    setIsLoading(true)
    setCurrentSrc(engine.favicon || "")
  }, [engine])

  // Fallback to letter icon if no favicon or error loading
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

  const handleImageError = () => {
    // Sistema de fallback para Google e JW.ORG
    if (engine.name === "Google" && currentSrc.includes("google-logo-new-favicon-perfil.png")) {
      setCurrentSrc("https://www.google.com/favicon.ico")
      return
    }

    if (engine.name === "Google Images" && currentSrc.includes("google-logo-new-favicon-perfil.png")) {
      setCurrentSrc("https://www.google.com/favicon.ico")
      return
    }

    if (engine.name === "JW.ORG" && currentSrc.includes("JW_Logo_FaviconNew.png")) {
      setCurrentSrc("https://www.jw.org/favicon.ico")
      return
    }

    // Se chegou aqui, usar fallback de letra
    setImageError(true)
    setIsLoading(false)
  }

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={`${engine.name} logo`}
        width={size}
        height={size}
        className={`rounded-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
        onError={handleImageError}
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
