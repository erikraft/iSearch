"use client"

import { useState, useEffect } from "react"
import { FiPlus, FiX } from "react-icons/fi"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Tab {
  id: string
  title: string
  url: string
  active: boolean
  favicon?: string
}

export default function BrowserTabs() {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "tab1",
      title: "iSearch",
      url: "/",
      active: true,
      favicon: "/images/isearch-icon.png",
    },
  ])
  const router = useRouter()

  useEffect(() => {
    // Carregar guias salvas do localStorage
    const savedTabs = localStorage.getItem("browser_tabs")
    if (savedTabs) {
      try {
        const parsedTabs = JSON.parse(savedTabs)
        if (Array.isArray(parsedTabs) && parsedTabs.length > 0) {
          setTabs(parsedTabs)
        }
      } catch (e) {
        console.error("Erro ao carregar guias:", e)
      }
    }

    // Adicionar event listener para teclas de atalho
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+T para nova guia
      if (e.ctrlKey && e.key === "t") {
        e.preventDefault()
        addNewTab()
      }
    }

    // Adicionar event listener para o evento personalizado de nova guia
    const handleAddNewTab = () => {
      addNewTab()
    }

    // Adicionar event listener para o evento de página carregada
    const handlePageLoaded = (e: CustomEvent) => {
      const { url, title } = e.detail
      updateCurrentTab(url, title || url)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("addNewTab", handleAddNewTab)
    window.addEventListener("pageLoaded", handlePageLoaded as EventListener)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("addNewTab", handleAddNewTab)
      window.removeEventListener("pageLoaded", handlePageLoaded as EventListener)
    }
  }, [])

  // Mova a referência a tabs para dentro de uma função que será chamada quando necessário
  const closeCurrentTab = () => {
    const activeTab = tabs.find((tab) => tab.active)
    if (activeTab && tabs.length > 1) {
      closeTab(activeTab.id)
    }
  }

  // Adicione um novo useEffect para lidar com atalhos que dependem do estado atual das tabs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "w") {
        e.preventDefault()
        closeCurrentTab()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [tabs])

  // Salvar guias no localStorage quando mudam
  useEffect(() => {
    // Evite salvar durante a renderização inicial
    if (tabs.length > 0) {
      // Use um timeout para evitar múltiplas atualizações em sequência
      const timeoutId = setTimeout(() => {
        localStorage.setItem("browser_tabs", JSON.stringify(tabs))
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [tabs])

  const addNewTab = () => {
    const newTab = {
      id: `tab${Date.now()}`,
      title: "Nova guia",
      url: "/",
      active: true,
      favicon: "/images/isearch-icon.png",
    }

    // Atualize o estado em uma única operação
    setTabs((prevTabs) =>
      prevTabs
        .map((tab) => ({
          ...tab,
          active: false,
        }))
        .concat(newTab),
    )

    // Navegar para a página inicial
    router.push("/")
  }

  const switchTab = (id: string) => {
    // Encontrar a tab que será ativada
    const tabToActivate = tabs.find((tab) => tab.id === id)

    if (!tabToActivate) return

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      })),
    )

    // Se a tab tiver uma URL, navegar para ela
    if (tabToActivate.url && tabToActivate.url !== "/") {
      // Disparar evento para carregar a URL no iframe
      window.dispatchEvent(
        new CustomEvent("loadUrl", {
          detail: { url: tabToActivate.url },
        }),
      )
    } else {
      // Navegar para a página inicial
      router.push("/")
    }
  }

  const updateCurrentTab = (url: string, title: string) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.active) {
          // Tentar extrair o favicon do domínio
          let favicon = tab.favicon
          try {
            const urlObj = new URL(url)
            favicon = `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`
          } catch (e) {
            // Manter o favicon atual se não conseguir extrair
          }

          return {
            ...tab,
            url,
            title,
            favicon,
          }
        }
        return tab
      }),
    )
  }

  const extractFaviconFromUrl = (url: string) => {
    try {
      const urlObj = new URL(url)
      return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`
    } catch (e) {
      return null
    }
  }

  const closeTab = (id: string) => {
    // Não permite fechar a última guia
    if (tabs.length <= 1) return

    const tabIndex = tabs.findIndex((tab) => tab.id === id)
    const isActive = tabs[tabIndex].active

    // Remove a guia e atualiza o estado em uma única operação
    setTabs((prevTabs) => {
      const newTabs = prevTabs.filter((tab) => tab.id !== id)

      // Se a guia fechada estava ativa, ativa a guia anterior ou a próxima
      if (isActive && newTabs.length > 0) {
        const newActiveIndex = tabIndex === 0 ? 0 : tabIndex - 1
        newTabs[newActiveIndex].active = true
      }

      return newTabs
    })

    // Navegar para a página inicial se a guia ativa foi fechada
    if (isActive) {
      router.push("/")
    }
  }

  return (
    <div className="flex items-center w-full bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <div className="flex-1 flex items-center space-x-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            className={`flex items-center px-3 py-2 max-w-[200px] min-w-[120px] cursor-pointer ${
              tab.active
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            } rounded-t-lg relative group`}
          >
            <div className="flex items-center overflow-hidden">
              {tab.favicon && (
                <div className="w-4 h-4 mr-2 flex-shrink-0">
                  <Image
                    src={tab.favicon || "/placeholder.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Se o favicon não carregar, usar um fallback
                      const target = e.target as HTMLImageElement
                      target.src = "/images/isearch-icon.png"
                    }}
                  />
                </div>
              )}
              <span className="truncate text-sm">{tab.title}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeTab(tab.id)
              }}
              className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
        <button
          onClick={addNewTab}
          className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-t-lg flex-shrink-0"
          aria-label="Nova guia"
        >
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  )
}
