"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { FiX } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

interface MapsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MapsMenu({ isOpen, onClose }: MapsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleLinkClick = (url: string, title: string) => (e: React.MouseEvent) => {
    // Abrir em uma nova guia
    window.open(url, "_blank")

    // Fechar o menu
    onClose()

    return false
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        ref={menuRef}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t("maps")}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {t("choose_platform", { category: t("maps").toLowerCase() })}
          </p>

          <div className="space-y-3">
            <Link
              href="https://www.google.com/maps"
              onClick={handleLinkClick("https://www.google.com/maps", "Google Maps")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/google_maps_logo.webp"
                  alt="Google Maps"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Google Maps</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Navegação, trânsito em tempo real e Street View
                </p>
              </div>
            </Link>

            <Link
              href="https://www.waze.com"
              onClick={handleLinkClick("https://www.waze.com", "Waze")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/waze_logo.png" alt="Waze" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Waze</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Navegação colaborativa e alertas de trânsito</p>
              </div>
            </Link>

            <Link
              href="https://www.openstreetmap.org"
              onClick={handleLinkClick("https://www.openstreetmap.org", "OpenStreetMap")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/openstreetmap_logo.png"
                  alt="OpenStreetMap"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">OpenStreetMap</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mapa colaborativo e de código aberto</p>
              </div>
            </Link>

            <Link
              href="https://www.bing.com/maps"
              onClick={handleLinkClick("https://www.bing.com/maps", "Bing Maps")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/bing_maps.webp"
                  alt="Bing Maps"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Bing Maps</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mapas da Microsoft com vista de pássaro</p>
              </div>
            </Link>

            <Link
              href="https://maps.apple.com"
              onClick={handleLinkClick("https://maps.apple.com", "Apple Maps")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/apple_maps_logo.jpg"
                  alt="Apple Maps"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Apple Maps</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mapas da Apple com integração iOS</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
