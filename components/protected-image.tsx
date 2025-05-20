"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ProtectedImageProps extends Omit<ImageProps, "onContextMenu"> {
  overlayColor?: string
}

export default function ProtectedImage({
  overlayColor = "rgba(0,0,0,0.0001)",
  className,
  alt,
  ...props
}: ProtectedImageProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Prevenir menu de contexto
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  if (!isClient) {
    // Renderização do lado do servidor - usar Image padrão
    return <Image {...props} alt={alt || ""} className={className} />
  }

  return (
    <div className={`relative ${className || ""}`}>
      <Image
        {...props}
        alt={alt || ""}
        onContextMenu={preventContextMenu}
        draggable={false}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />
      {/* Camada de proteção transparente */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: overlayColor,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </div>
  )
}
