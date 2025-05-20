"use client"

import { useState, useEffect } from "react"

export type SearchEngine = {
  name: string
  url: string
  queryParam: string
  color?: string
  favicon?: string
  additionalParams?: string
}

// Modificar o array searchEngines para adicionar mais mecanismos de pesquisa
export const searchEngines: SearchEngine[] = [
  {
    name: "Google",
    url: "https://www.google.com/search",
    queryParam: "q",
    color: "#4285F4",
    favicon: "https://www.google.com/favicon.ico",
  },
  {
    name: "Wikipedia",
    url: "https://pt.wikipedia.org/w/index.php",
    queryParam: "search",
    color: "#000000",
    favicon: "https://pt.wikipedia.org/static/favicon/wikipedia.ico",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/results",
    queryParam: "search_query",
    color: "#FF0000",
    favicon: "https://www.youtube.com/favicon.ico",
  },
  {
    name: "Bing",
    url: "https://www.bing.com/search",
    queryParam: "q",
    color: "#008373",
    favicon: "https://www.bing.com/favicon.ico",
  },
  {
    name: "Yahoo!",
    url: "https://search.yahoo.com/search",
    queryParam: "p",
    color: "#6001D2",
    favicon: "https://www.yahoo.com/favicon.ico",
  },
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    queryParam: "q",
    color: "#DE5833",
    favicon: "https://duckduckgo.com/favicon.ico",
  },
  {
    name: "Yandex",
    url: "https://yandex.com/search/",
    queryParam: "text",
    color: "#FF0000",
    favicon: "https://yandex.com/favicon.ico",
  },
  {
    name: "JW.org",
    url: "https://www.jw.org/pt/busca/",
    queryParam: "q",
    color: "#4A6DA7",
    favicon: "https://www.jw.org/favicon.ico",
  },
  {
    name: "Minecraft Wiki",
    url: "https://minecraft.wiki/w/Special:Search",
    queryParam: "search",
    color: "#70C050",
    favicon: "https://minecraft.wiki/favicon.ico",
  },
  {
    name: "Baidu",
    url: "https://www.baidu.com/s",
    queryParam: "wd",
    color: "#2932E1",
    favicon: "https://www.baidu.com/favicon.ico",
  },
  {
    name: "Ecosia",
    url: "https://www.ecosia.org/search",
    queryParam: "q",
    color: "#4C7D4C",
    favicon: "https://www.ecosia.org/favicon.ico",
  },
  {
    name: "Qwant",
    url: "https://www.qwant.com/",
    queryParam: "q",
    color: "#5C97FF",
    favicon: "https://www.qwant.com/favicon.ico",
  },
  {
    name: "Startpage",
    url: "https://www.startpage.com/do/search",
    queryParam: "q",
    color: "#6573FF",
    favicon: "https://www.startpage.com/favicon.ico",
  },
  {
    name: "Ask.com",
    url: "https://www.ask.com/web",
    queryParam: "q",
    color: "#D51C29",
    favicon: "https://www.ask.com/favicon.ico",
  },
  {
    name: "AOL",
    url: "https://search.aol.com/aol/search",
    queryParam: "q",
    color: "#39CFFD",
    favicon: "/images/logos/aol_logo.svg",
  },
  {
    name: "Brave Search",
    url: "https://search.brave.com/search",
    queryParam: "q",
    color: "#FB542B",
    favicon: "/images/logos/brave_search_logo.png",
  },
  {
    name: "Swisscows",
    url: "https://swisscows.com/web",
    queryParam: "query",
    color: "#FF0000",
    favicon: "https://swisscows.com/favicon.ico",
  },
  {
    name: "Mojeek",
    url: "https://www.mojeek.com/search",
    queryParam: "q",
    color: "#5A4AE3",
    favicon: "https://www.mojeek.com/favicon.ico",
  },
  {
    name: "Gibiru",
    url: "https://gibiru.com/results.html",
    queryParam: "q",
    color: "#F58220",
    favicon: "/images/logos/gibiru_logo.png",
  },
  {
    name: "MetaGer",
    url: "https://metager.org/meta/meta.ger3",
    queryParam: "eingabe",
    color: "#9CCB3B",
    favicon: "https://metager.org/favicon.ico",
  },
  {
    name: "SearX",
    url: "https://searx.space/",
    queryParam: "q",
    color: "#444444",
    favicon: "https://searx.space/favicon.ico",
  },
  {
    name: "Presearch",
    url: "https://presearch.com/search",
    queryParam: "q",
    color: "#2C65EF",
    favicon: "https://presearch.com/favicon.ico",
  },
  {
    name: "Kagi",
    url: "https://kagi.com/search",
    queryParam: "q",
    color: "#7C5295",
    favicon: "https://kagi.com/favicon.ico",
  },
  // Novos mecanismos de busca adicionados
  {
    name: "Minecraft.net",
    url: "https://www.minecraft.net/pt-br/search",
    queryParam: "q",
    color: "#70C050",
    favicon: "/images/logos/minecraft_search_logo.png",
    // Parâmetros adicionais para o Minecraft.net
    additionalParams: "tabs=%7B%22searchApp%22%3A0%7D",
  },
  {
    name: "Blog ErikRaft",
    url: "https://blog.erikraft.com/search",
    queryParam: "q",
    color: "#1E88E5",
    favicon: "https://blog.erikraft.com/favicon.ico",
  },
]

export function useSearchEngine() {
  const [currentEngine, setCurrentEngine] = useState<SearchEngine>(searchEngines[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedEngine = localStorage.getItem("searchEngine")
    if (savedEngine) {
      try {
        const parsedEngine = JSON.parse(savedEngine)
        setCurrentEngine(parsedEngine)
      } catch (e) {
        console.error("Erro ao carregar mecanismo de pesquisa:", e)
        localStorage.removeItem("searchEngine")
      }
    }
  }, [])

  const setSearchEngine = (engine: SearchEngine) => {
    setCurrentEngine(engine)
    if (mounted) {
      localStorage.setItem("searchEngine", JSON.stringify(engine))
    }
  }

  // Função para construir a URL de pesquisa completa
  const buildSearchUrl = (query: string) => {
    const baseUrl = `${currentEngine.url}?${currentEngine.queryParam}=${encodeURIComponent(query)}`

    // Adicionar parâmetros adicionais se existirem
    if (currentEngine.additionalParams) {
      return `${baseUrl}&${currentEngine.additionalParams}`
    }

    return baseUrl
  }

  return {
    currentEngine,
    setSearchEngine,
    searchEngines,
    mounted,
    buildSearchUrl,
  }
}
