"use client"

import { useState, useEffect } from "react"
import { FiGlobe, FiCheck, FiChevronDown, FiX } from "react-icons/fi"
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
  const { locale, changeLocale, availableLocales, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Verificar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Modificar a função handleLanguageChange para remover o reload redundante
  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale)
    setIsOpen(false)
    // A função changeLocale já inclui o reload da página
  }

  // Impedir rolagem do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={t("change_language")}
      >
        <FiGlobe className="text-gray-600 dark:text-gray-400" size={16} />
        <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline-block">{localeFlags[locale]}</span>
        <FiChevronDown className="text-gray-500 dark:text-gray-500" size={14} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-xs w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium">{t("select_language")}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: "calc(80vh - 60px)" }}>
              {availableLocales.map((localeOption) => (
                <button
                  key={localeOption}
                  className={`flex items-center w-full px-4 py-3 text-sm ${
                    locale === localeOption
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleLanguageChange(localeOption)}
                >
                  <span className="mr-3 text-lg">{localeFlags[localeOption]}</span>
                  <span className="flex-1 text-left">{localeNames[localeOption]}</span>
                  {locale === localeOption && <FiCheck className="text-blue-600 dark:text-blue-400" size={18} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
