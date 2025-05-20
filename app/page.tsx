"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiSearch, FiSettings, FiVideo, FiShoppingBag, FiFileText, FiMap } from "react-icons/fi"
import { useSearchEngine } from "@/hooks/use-search-engine"
import BrowserTabs from "@/components/browser-tabs"
import BrowserNavigation from "@/components/browser-navigation"
import VideoMenu from "@/components/video-menu"
import MapsMenu from "@/components/maps-menu"
import ShoppingMenu from "@/components/shopping-menu"
import NewsMenu from "@/components/news-menu"
import SettingsMenu from "@/components/settings-menu"
import ThemeSwitcher from "@/components/theme-switcher"

export default function ModernSearch() {
  const [mounted, setMounted] = useState(false)
  const [showVideoMenu, setShowVideoMenu] = useState(false)
  const [showMapsMenu, setShowMapsMenu] = useState(false)
  const [showShoppingMenu, setShowShoppingMenu] = useState(false)
  const [showNewsMenu, setShowNewsMenu] = useState(false)
  const [showSettingsMenu, setShowSettingsMenu] = useState(false)
  const { currentEngine, mounted: engineMounted, buildSearchUrl } = useSearchEngine()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showHomepage, setShowHomepage] = useState(true)
  const [currentIframeUrl, setCurrentIframeUrl] = useState("")

  useEffect(() => {
    setMounted(true)

    // Atualizar o placeholder imediatamente após a montagem
    if (searchInputRef.current && currentEngine) {
      searchInputRef.current.placeholder = `Pesquisar no ${currentEngine.name} ou digitar URL`
    }

    // Desabilitar menu de contexto globalmente
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Adicionar listeners
    document.addEventListener("contextmenu", disableContextMenu)

    // Listener para carregar URL no iframe
    const handleLoadUrlInIframe = (e: CustomEvent) => {
      if (e.detail && e.detail.url) {
        setShowHomepage(false)
        setCurrentIframeUrl(e.detail.url)
      }
    }

    window.addEventListener("loadUrlInIframe", handleLoadUrlInIframe as EventListener)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu)
      window.removeEventListener("loadUrlInIframe", handleLoadUrlInIframe as EventListener)
    }
  }, [currentEngine])

  useEffect(() => {
    setMounted(true)

    // Atualizar o placeholder imediatamente após a montagem
    if (searchInputRef.current && currentEngine) {
      searchInputRef.current.placeholder = `Pesquisar no ${currentEngine.name} ou digitar URL`
    }

    // Desabilitar menu de contexto globalmente
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Adicionar listeners
    document.addEventListener("contextmenu", disableContextMenu)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu)
    }
  }, [currentEngine])

  // Atualizar o placeholder quando o mecanismo de busca muda
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.placeholder = `Pesquisar no ${currentEngine.name} ou digitar URL`
    }
  }, [currentEngine])

  // Função para abrir a categoria específica
  const openCategory = (category: string) => {
    switch (category) {
      case "videos":
        setShowVideoMenu(true)
        break
      case "shopping":
        setShowShoppingMenu(true)
        break
      case "news":
        setShowNewsMenu(true)
        break
      case "maps":
        setShowMapsMenu(true)
        break
      default:
        break
    }
  }

  // Função para lidar com a pesquisa
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const searchInput = searchInputRef.current
    if (!searchInput) return

    const searchValue = searchInput.value.trim()
    if (!searchValue) return

    // Usar a função buildSearchUrl para criar a URL de pesquisa completa
    const searchUrl = buildSearchUrl(searchValue)

    // Abrir em uma nova guia
    window.open(searchUrl, "_blank")
  }

  // Função para abrir o Google Doodles
  const openGoogleDoodles = (e: React.MouseEvent) => {
    e.preventDefault()

    // Abrir em uma nova guia
    window.open("https://doodles.google/", "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-all duration-500">
      {/* Browser Tabs */}
      <div className="block">
        <BrowserTabs />
      </div>

      {/* Browser Navigation */}
      <div className="block">
        <BrowserNavigation />
      </div>

      {/* Controles de tema e mecanismo de busca */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
        </div>
        <div>
          <button
            onClick={() => setShowSettingsMenu(true)}
            className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <FiSettings className="mr-1.5" size={16} />
            Alterar mecanismo de busca
          </button>
        </div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-2xl flex flex-col items-center">
          <div className="mb-8 md:mb-10 text-center flex flex-col items-center">
            {/* Logo retangular principal */}
            <div className="mb-4 w-64 md:w-80">
              <Image
                src="/images/isearch-logo.png"
                alt="iSearch Logo"
                width={320}
                height={100}
                className="w-full h-auto"
                priority
                draggable={false}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">Pesquise com estilo</p>
          </div>

          {engineMounted && (
            <form onSubmit={handleSearch} className="w-full">
              <div className="w-full relative mb-8">
                {/* Barra de pesquisa otimizada para telas pequenas */}
                <div className="flex items-center backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl px-3 sm:px-4 md:px-6 py-3 md:py-4 shadow-lg hover:shadow-xl focus-within:shadow-xl transition-all duration-300 focus-within:border-blue-400 dark:focus-within:border-blue-500">
                  <FiSearch className="text-gray-400 dark:text-gray-500 mr-2 sm:mr-3 flex-shrink-0" size={18} />
                  <input
                    ref={searchInputRef}
                    name={currentEngine.queryParam}
                    type="text"
                    className="flex-grow min-w-0 outline-none text-base md:text-lg bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                    aria-label="Search"
                    id="search-input"
                    placeholder={`Pesquisar no ${currentEngine.name} ou digitar URL`}
                  />
                  <button
                    type="submit"
                    className="p-2 md:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 flex-shrink-0"
                    aria-label="Pesquisar"
                  >
                    <FiSearch size={18} className="md:hidden" />
                    <FiSearch size={20} className="hidden md:block" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                {currentEngine.name === "Google" && (
                  <a
                    href="https://doodles.google/"
                    onClick={openGoogleDoodles}
                    className="bg-white dark:bg-gray-800 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 flex items-center justify-center"
                  >
                    🍀 Estou com Sorte
                  </a>
                )}
              </div>
            </form>
          )}

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => openCategory("videos")}
              className="flex flex-col items-center p-3 md:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-20 md:w-24"
            >
              <FiVideo className="mb-2 text-blue-500 dark:text-blue-400" size={20} />
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">Vídeos</span>
            </button>
            <button
              onClick={() => openCategory("shopping")}
              className="flex flex-col items-center p-3 md:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-20 md:w-24"
            >
              <FiShoppingBag className="mb-2 text-blue-500 dark:text-blue-400" size={20} />
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">Shopping</span>
            </button>
            <button
              onClick={() => openCategory("news")}
              className="flex flex-col items-center p-3 md:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-20 md:w-24"
            >
              <FiFileText className="mb-2 text-blue-500 dark:text-blue-400" size={20} />
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">Notícias</span>
            </button>
            <button
              onClick={() => openCategory("maps")}
              className="flex flex-col items-center p-3 md:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-20 md:w-24"
            >
              <FiMap className="mb-2 text-blue-500 dark:text-blue-400" size={20} />
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">Mapas</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <div className="px-4 md:px-8 py-3 md:py-4">
          {/* Footer para desktop */}
          <div className="hidden md:flex md:flex-row md:justify-between">
            <div className="flex flex-wrap gap-y-2 gap-x-5">
              <Link href="/sobre" className="hover:text-blue-500 transition-colors duration-200">
                Sobre
              </Link>
              <Link href="/como-funciona" className="hover:text-blue-500 transition-colors duration-200">
                Como funciona
              </Link>
            </div>
            <div className="flex flex-wrap gap-y-2 gap-x-5">
              <Link href="/privacidade" className="hover:text-blue-500 transition-colors duration-200">
                Privacidade
              </Link>
              <Link href="/termos" className="hover:text-blue-500 transition-colors duration-200">
                Termos
              </Link>
            </div>
          </div>

          {/* Footer para mobile */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            <Link href="/sobre" className="hover:text-blue-500 transition-colors duration-200">
              Sobre
            </Link>
            <Link href="/privacidade" className="hover:text-blue-500 transition-colors duration-200">
              Privacidade
            </Link>
            <Link href="/como-funciona" className="hover:text-blue-500 transition-colors duration-200">
              Como funciona
            </Link>
            <Link href="/termos" className="hover:text-blue-500 transition-colors duration-200">
              Termos
            </Link>
          </div>
        </div>
      </footer>

      {/* Menus de categorias */}
      {showVideoMenu && <VideoMenu isOpen={showVideoMenu} onClose={() => setShowVideoMenu(false)} />}
      {showMapsMenu && <MapsMenu isOpen={showMapsMenu} onClose={() => setShowMapsMenu(false)} />}
      {showShoppingMenu && <ShoppingMenu isOpen={showShoppingMenu} onClose={() => setShowShoppingMenu(false)} />}
      {showNewsMenu && <NewsMenu isOpen={showNewsMenu} onClose={() => setShowNewsMenu(false)} />}
      {showSettingsMenu && <SettingsMenu isOpen={showSettingsMenu} onClose={() => setShowSettingsMenu(false)} />}
    </div>
  )
}
