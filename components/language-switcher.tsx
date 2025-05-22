"use client"

import { useState, useRef, useEffect } from "react"
import { FiGlobe, FiCheck, FiChevronDown } from "react-icons/fi"
import { type Locale, useTranslation } from "@/lib/i18n"

// Mapeamento de idiomas para nomes legíveis
const localeNames: Record<Locale, string> = {
  "pt-BR": "Português (Brasil)",
  "en-US": "English (US)",
  "es-ES": "Español",
  "fr-FR": "Français",
  "de-DE": "Deutsch",
  "it-IT": "Italiano",
  "ja-JP": "日本語",
  "zh-CN": "中文 (简体)",
  "ru-RU": "Русский",
}

// Bandeiras para cada idioma (emoji)
const localeFlags: Record<Locale, string> = {
  "pt-BR": "🇧🇷",
  "en-US": "🇺🇸",
  "es-ES": "🇪🇸",
  "fr-FR": "🇫🇷",
  "de-DE": "🇩🇪",
  "it-IT": "🇮🇹",
  "ja-JP": "🇯🇵",
  "zh-CN": "🇨🇳",
  "ru-RU": "🇷🇺",
}

export default function LanguageSwitcher() {
  const { locale, changeLocale, availableLocales } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Adicionar este useEffect após o useEffect existente
  useEffect(() => {
    function handleResize() {
      // Forçar re-renderização quando a janela for redimensionada
      if (isOpen) {
        setIsOpen(false)
        setTimeout(() => setIsOpen(true), 0)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Mudar idioma"
      >
        <FiGlobe className="text-gray-600 dark:text-gray-400" size={16} />
        <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline-block">{localeFlags[locale]}</span>
        <FiChevronDown className="text-gray-500 dark:text-gray-500" size={14} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50 origin-top-right"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            maxWidth: "calc(100vw - 20px)",
            transform: "translateX(0)",
            right: window.innerWidth < 640 ? "0" : "auto",
          }}
        >
          <div className="py-1">
            {availableLocales.map((localeOption) => (
              <button
                key={localeOption}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  locale === localeOption
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                  changeLocale(localeOption)
                  setIsOpen(false)
                }}
              >
                <span className="mr-2">{localeFlags[localeOption]}</span>
                <span className="flex-1 text-left">{localeNames[localeOption]}</span>
                {locale === localeOption && <FiCheck className="text-blue-600 dark:text-blue-400" size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
