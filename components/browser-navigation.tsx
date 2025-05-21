"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { FiArrowLeft, FiArrowRight, FiRefreshCw, FiHome } from "react-icons/fi"
import { useSearchEngine } from "@/hooks/use-search-engine"
import { useRouter } from "next/navigation"
import SearchEngineIcon from "@/components/search-engine-icon"

export default function BrowserNavigation() {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { currentEngine, buildSearchUrl } = useSearchEngine()
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Verificar se podemos navegar para trás ou para frente
    setCanGoBack(window.history.length > 1)

    // Definir URL atual
    setCurrentUrl(window.location.href)

    // Adicionar listener para mudanças de URL
    const handleUrlChange = () => {
      setCurrentUrl(window.location.href)
      setCanGoBack(window.history.length > 1)
      setCanGoForward(window.history.state !== null)
    }

    // Adicionar listener para o evento loadUrl
    const handleLoadUrl = (e: CustomEvent) => {
      if (e.detail && e.detail.url) {
        setCurrentUrl(e.detail.url)
      }
    }

    window.addEventListener("popstate", handleUrlChange)
    window.addEventListener("loadUrl", handleLoadUrl as EventListener)

    return () => {
      window.removeEventListener("popstate", handleUrlChange)
      window.removeEventListener("loadUrl", handleLoadUrl as EventListener)
    }
  }, [])

  // Atualizar o placeholder quando o mecanismo de busca muda
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = `Pesquisar no ${currentEngine.name} ou digitar URL`
    }
  }, [currentEngine])

  const goBack = () => {
    if (canGoBack) {
      setIsLoading(true)
      window.history.back()
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  const goForward = () => {
    if (canGoForward) {
      setIsLoading(true)
      window.history.forward()
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  const refresh = () => {
    setIsLoading(true)
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src
    } else {
      window.location.reload()
    }
    setTimeout(() => setIsLoading(false), 500)
  }

  const goHome = () => {
    setIsLoading(true)
    router.push("/")
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const searchValue = e.currentTarget.value.trim()

      if (!searchValue) return

      // Verificar se é uma URL
      if (isValidUrl(searchValue)) {
        let url = searchValue
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          url = `https://${url}`
        }

        // Abrir em uma nova guia externa
        window.open(url, "_blank")
      } else {
        // É uma pesquisa - usar a função buildSearchUrl para criar a URL completa
        const searchUrl = buildSearchUrl(searchValue)

        // Abrir em uma nova guia externa
        window.open(searchUrl, "_blank")
      }
    }
  }

  // Função para validar se uma string é uma URL válida
  const isValidUrl = (string: string) => {
    try {
      // Verificar se contém um domínio válido
      return string.includes(".") && !string.includes(" ")
    } catch (_) {
      return false
    }
  }

  // Update placeholder text based on screen size
  useEffect(() => {
    const updatePlaceholder = () => {
      if (inputRef.current) {
        inputRef.current.placeholder =
          window.innerWidth < 640 ? "Pesquisar" : `Pesquisar no ${currentEngine.name} ou digitar URL`
      }
    }

    // Initial update
    updatePlaceholder()

    // Add event listener for resize
    window.addEventListener("resize", updatePlaceholder)

    // Cleanup
    return () => window.removeEventListener("resize", updatePlaceholder)
  }, [currentEngine])

  return (
    <div className="flex items-center w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-1 sm:px-2 py-0.5 sm:py-1">
      <div className="flex items-center space-x-0.5 sm:space-x-1">
        <button
          onClick={goBack}
          disabled={!canGoBack}
          className={`p-1 sm:p-1.5 rounded-full ${
            canGoBack
              ? "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
          }`}
          aria-label="Voltar"
        >
          <FiArrowLeft size={14} className="sm:hidden" />
          <FiArrowLeft size={16} className="hidden sm:block" />
        </button>
        <button
          onClick={goForward}
          disabled={!canGoForward}
          className={`p-1 sm:p-1.5 rounded-full ${
            canGoForward
              ? "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
          }`}
          aria-label="Avançar"
        >
          <FiArrowRight size={14} className="sm:hidden" />
          <FiArrowRight size={16} className="hidden sm:block" />
        </button>
        <button
          onClick={refresh}
          className="p-1 sm:p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          aria-label="Recarregar"
        >
          <FiRefreshCw size={14} className={`sm:hidden ${isLoading ? "animate-spin" : ""}`} />
          <FiRefreshCw size={16} className={`hidden sm:block ${isLoading ? "animate-spin" : ""}`} />
        </button>
        <button
          onClick={goHome}
          className="p-1 sm:p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          aria-label="Página inicial"
        >
          <FiHome size={14} className="sm:hidden" />
          <FiHome size={16} className="hidden sm:block" />
        </button>
      </div>

      <div className="flex-1 mx-1 sm:mx-2">
        <div className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 w-full">
          <div className="flex-shrink-0 mr-1 sm:mr-2">
            <SearchEngineIcon engine={currentEngine} size={16} className="browser-nav-icon" />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 min-w-0 bg-transparent border-none outline-none text-xs sm:text-sm text-gray-800 dark:text-gray-200 truncate"
            placeholder={`${window.innerWidth < 640 ? "Pesquisar" : `Pesquisar no ${currentEngine.name} ou digitar URL`}`}
            value={currentUrl}
            onChange={(e) => setCurrentUrl(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </div>
  )
}
