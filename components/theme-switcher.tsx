"use client"

import { useState, useEffect } from "react"
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"

type Theme = "light" | "dark" | "system"

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  // Efeito para carregar o tema salvo e marcar o componente como montado
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  // Efeito para aplicar o tema quando ele muda
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  // Não renderiza nada até que o componente esteja montado para evitar hidratação incorreta
  if (!mounted) return null

  return (
    <div className="flex items-center backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-md">
      <button
        onClick={() => setTheme("light")}
        className={`p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-blue-100 text-blue-600 shadow-sm"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Tema claro"
      >
        <FiSun size={14} className="sm:hidden" />
        <FiSun size={16} className="hidden sm:block md:hidden" />
        <FiSun size={18} className="hidden md:block" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-gray-700 text-blue-400 shadow-sm"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Tema escuro"
      >
        <FiMoon size={14} className="sm:hidden" />
        <FiMoon size={16} className="hidden sm:block md:hidden" />
        <FiMoon size={18} className="hidden md:block" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-200 ${
          theme === "system"
            ? "bg-gray-200 dark:bg-gray-600 text-blue-500 shadow-sm"
            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        aria-label="Tema do sistema"
      >
        <FiMonitor size={14} className="sm:hidden" />
        <FiMonitor size={16} className="hidden sm:block md:hidden" />
        <FiMonitor size={18} className="hidden md:block" />
      </button>
    </div>
  )
}
