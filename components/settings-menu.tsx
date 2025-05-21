"use client"

import { useState, useEffect, useRef } from "react"
import { FiX, FiCheck, FiRefreshCw, FiSearch } from "react-icons/fi"
import { useSearchEngine } from "@/hooks/use-search-engine"
import SearchEngineIcon from "@/components/search-engine-icon"

interface SettingsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsMenu({ isOpen, onClose }: SettingsMenuProps) {
  const { currentEngine, setSearchEngine, searchEngines, mounted } = useSearchEngine()
  const [activeTab, setActiveTab] = useState("search")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEngine, setSelectedEngine] = useState<typeof currentEngine | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Inicializar o mecanismo selecionado com o atual quando o componente é montado
  useEffect(() => {
    setSelectedEngine(currentEngine)
  }, [currentEngine])

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

  // Função para restaurar o Google como mecanismo padrão
  const restoreDefaultEngine = () => {
    // Apenas selecionar o Google, não aplicar ainda
    setSelectedEngine(searchEngines[0])
  }

  // Função para selecionar temporariamente um mecanismo de busca
  const selectEngineTemporarily = (engine: typeof currentEngine) => {
    // Apenas atualizar o estado local, não aplicar ainda
    setSelectedEngine(engine)
  }

  // Função para salvar e aplicar o mecanismo de busca selecionado
  const saveAndApplyEngine = () => {
    if (!selectedEngine) return

    // Remover do localStorage se for o padrão (Google)
    if (selectedEngine.name === searchEngines[0].name) {
      localStorage.removeItem("searchEngine")
    } else {
      // Salvar o mecanismo de busca no localStorage
      localStorage.setItem("searchEngine", JSON.stringify(selectedEngine))
    }

    // Atualizar o estado global
    setSearchEngine(selectedEngine)

    // Atualizar todos os placeholders na página
    document.querySelectorAll('input[placeholder*="Pesquisar no"]').forEach((input) => {
      ;(input as HTMLInputElement).placeholder = `Pesquisar no ${selectedEngine.name} ou digitar URL`
    })

    // Atualizar o ícone na barra de navegação
    const navIconContainer = document.querySelector(".browser-nav-icon") as HTMLElement
    if (navIconContainer) {
      // Limpar o conteúdo atual
      while (navIconContainer.firstChild) {
        navIconContainer.removeChild(navIconContainer.firstChild)
      }

      // Criar um novo ícone
      const newIcon = document.createElement("div")
      newIcon.className = "browser-nav-icon"

      // Renderizar o novo ícone do mecanismo de busca
      if (selectedEngine.favicon) {
        const img = document.createElement("img")
        img.src = selectedEngine.favicon
        img.alt = `${selectedEngine.name} icon`
        img.className = "w-4 h-4 rounded-full"
        newIcon.appendChild(img)
      } else {
        newIcon.style.backgroundColor = selectedEngine.color || "#4285F4"
        newIcon.style.width = "16px"
        newIcon.style.height = "16px"
        newIcon.style.borderRadius = "50%"
        newIcon.style.display = "flex"
        newIcon.style.alignItems = "center"
        newIcon.style.justifyContent = "center"

        const span = document.createElement("span")
        span.className = "text-white text-xs font-bold"
        span.textContent = selectedEngine.name.charAt(0)
        newIcon.appendChild(span)
      }

      navIconContainer.appendChild(newIcon)
    }

    // Atualizar o nome do parâmetro de consulta nos formulários
    document.querySelectorAll("form input[name]").forEach((input) => {
      ;(input as HTMLInputElement).name = selectedEngine.queryParam
    })

    // Fechar o menu de configurações
    onClose()

    // Recarregar a página após um breve atraso
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  // Função melhorada para filtrar mecanismos de pesquisa
  const filterEngines = (engines: typeof searchEngines, term: string) => {
    if (!term) return engines

    const lowerTerm = term.toLowerCase()

    return engines.filter((engine) => {
      // Verificar se o termo corresponde ao nome do mecanismo
      if (engine.name.toLowerCase().includes(lowerTerm)) return true

      // Verificar se o termo corresponde a alguma palavra-chave do mecanismo
      if (engine.keywords && engine.keywords.some((keyword) => keyword.toLowerCase().includes(lowerTerm))) return true

      return false
    })
  }

  // Filtrar o Google separadamente
  const googleEngine = searchEngines[0]

  // Filtrar GPT Search para destacá-lo quando termos relacionados forem pesquisados
  const gptEngine = searchEngines.find((engine) => engine.name === "GPT Search")

  // Verificar se o termo de pesquisa está relacionado ao GPT
  const isGptRelatedSearch =
    searchTerm &&
    ["gpt", "chatgpt", "openai", "ia", "ai", "inteligência artificial", "artificial intelligence"].some((term) =>
      searchTerm.toLowerCase().includes(term),
    )

  // Filtrar os demais mecanismos
  const filteredEngines = filterEngines(searchEngines, searchTerm)

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        ref={menuRef}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Configurações</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex border-b border-gray-200 dark:border-gray-800">
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === "search"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("search")}
          >
            Mecanismo de Pesquisa
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === "appearance"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("appearance")}
          >
            Aparência
          </button>
        </div>

        <div className="overflow-y-auto flex-grow">
          {activeTab === "search" && (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Escolha seu mecanismo de pesquisa preferido:</p>
                <button
                  onClick={restoreDefaultEngine}
                  className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <FiRefreshCw size={12} className="mr-1" />
                  Restaurar Google
                </button>
              </div>

              {/* Campo de pesquisa para filtrar mecanismos */}
              <div className="mb-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Filtrar mecanismos de pesquisa..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Google destacado */}
              <button
                key={googleEngine.name}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 w-full mb-3 ${
                  selectedEngine?.name === googleEngine.name
                    ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                    : "bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => selectEngineTemporarily(googleEngine)}
              >
                <SearchEngineIcon engine={googleEngine} size={24} className="mr-3 flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{googleEngine.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Mecanismo de pesquisa padrão</span>
                </div>
                {selectedEngine?.name === googleEngine.name && (
                  <FiCheck className="ml-auto text-blue-600 dark:text-blue-400" size={18} />
                )}
              </button>

              {/* GPT Search destacado quando relevante */}
              {(isGptRelatedSearch || !searchTerm) && gptEngine && (
                <button
                  key={gptEngine.name}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 w-full mb-3 ${
                    isGptRelatedSearch
                      ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 animate-pulse"
                      : selectedEngine?.name === gptEngine.name
                        ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                        : "bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  }`}
                  onClick={() => selectEngineTemporarily(gptEngine)}
                >
                  <SearchEngineIcon engine={gptEngine} size={24} className="mr-3 flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{gptEngine.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Pesquisa com IA avançada</span>
                  </div>
                  {selectedEngine?.name === gptEngine.name && (
                    <FiCheck className="ml-auto text-blue-600 dark:text-blue-400" size={18} />
                  )}
                </button>
              )}

              {/* Contador de mecanismos */}
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {filteredEngines.length} mecanismos de pesquisa disponíveis
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredEngines.map((engine) => (
                  <button
                    key={engine.name}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                      selectedEngine?.name === engine.name
                        ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent"
                    }`}
                    onClick={() => selectEngineTemporarily(engine)}
                  >
                    <SearchEngineIcon engine={engine} size={24} className="mr-3 flex-shrink-0" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{engine.name}</span>
                    {selectedEngine?.name === engine.name && (
                      <FiCheck className="ml-auto text-blue-600 dark:text-blue-400" size={18} />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Mecanismo de pesquisa selecionado
                </h3>
                {selectedEngine && (
                  <div className="flex items-center">
                    <SearchEngineIcon engine={selectedEngine} size={32} className="mr-3" />
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">{selectedEngine.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{selectedEngine.url}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Personalize a aparência da sua experiência de pesquisa:
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800 dark:text-gray-200">Tema escuro</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Use o seletor de tema no cabeçalho para alternar entre temas
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800 dark:text-gray-200">Animações</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="animations" id="animations" defaultChecked className="sr-only peer" />
                    <label
                      htmlFor="animations"
                      className="block h-6 rounded-full w-11 bg-gray-300 dark:bg-gray-700 cursor-pointer peer-checked:bg-blue-500"
                    ></label>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:left-6"></span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800 dark:text-gray-200">Efeitos de vidro</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="glassmorphism"
                      id="glassmorphism"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <label
                      htmlFor="glassmorphism"
                      className="block h-6 rounded-full w-11 bg-gray-300 dark:bg-gray-700 cursor-pointer peer-checked:bg-blue-500"
                    ></label>
                    <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:left-6"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-between">
          <button
            onClick={restoreDefaultEngine}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
          >
            <FiRefreshCw size={16} className="mr-2" />
            Restaurar padrão
          </button>
          <button
            onClick={saveAndApplyEngine}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
