"use client"

import { useState, useEffect } from "react"

export type SearchEngine = {
  name: string
  url: string
  queryParam: string
  color?: string
  favicon?: string
  additionalParams?: string
  keywords?: string[] // Adicionando campo para palavras-chave de pesquisa
}

// Modificar o array searchEngines para adicionar mais mecanismos de pesquisa
export const searchEngines: SearchEngine[] = [
  {
    name: "Google",
    url: "https://www.google.com/search",
    queryParam: "q",
    color: "#4285F4",
    favicon: "https://www.google.com/favicon.ico",
    keywords: ["google", "busca", "search", "pesquisa", "geral", "principal"],
  },
  {
    name: "GPT Search",
    url: "https://chat.openai.com/",
    queryParam: "q",
    color: "#10A37F", // Cor verde do OpenAI
    favicon: "/images/logos/gpt_search_logo.png",
    keywords: ["gpt", "chatgpt", "openai", "ia", "ai", "inteligência artificial", "artificial intelligence", "chat"],
  },
  {
    name: "Wikipedia",
    url: "https://pt.wikipedia.org/w/index.php",
    queryParam: "search",
    color: "#000000",
    favicon: "https://pt.wikipedia.org/static/favicon/wikipedia.ico",
    keywords: ["wikipedia", "enciclopédia", "conhecimento", "artigos", "informação", "wiki"],
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/results",
    queryParam: "search_query",
    color: "#FF0000",
    favicon: "https://www.youtube.com/favicon.ico",
    keywords: ["youtube", "vídeos", "música", "streaming", "canal", "youtuber"],
  },
  {
    name: "Bing",
    url: "https://www.bing.com/search",
    queryParam: "q",
    color: "#008373",
    favicon: "https://www.bing.com/favicon.ico",
    keywords: ["bing", "microsoft", "busca", "search", "pesquisa", "alternativo"],
  },
  {
    name: "Yahoo!",
    url: "https://search.yahoo.com/search",
    queryParam: "p",
    color: "#6001D2",
    favicon: "https://www.yahoo.com/favicon.ico",
    keywords: ["yahoo", "busca", "search", "pesquisa", "email", "notícias"],
  },
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    queryParam: "q",
    color: "#DE5833",
    favicon: "/images/logos/duckduckgo_logo.png",
    keywords: ["duckduckgo", "privacidade", "privacy", "anônimo", "sem rastreamento", "duck"],
  },
  {
    name: "Yandex",
    url: "https://yandex.com/search/",
    queryParam: "text",
    color: "#FF0000",
    favicon: "https://yandex.com/favicon.ico",
    keywords: ["yandex", "russo", "russia", "busca", "search", "internacional"],
  },
  {
    name: "JW.org",
    url: "https://www.jw.org/pt/busca/",
    queryParam: "q",
    color: "#4A6DA7",
    favicon: "https://www.jw.org/favicon.ico",
    keywords: ["jw", "testemunhas de jeová", "bíblia", "religião", "publicações", "watchtower"],
  },
  {
    name: "Minecraft Wiki",
    url: "https://minecraft.wiki/w/Special:Search",
    queryParam: "search",
    color: "#70C050",
    favicon: "/images/logos/minecraft_wiki_logo.ico",
    keywords: ["minecraft", "wiki", "jogo", "game", "mojang", "crafting", "blocos", "mobs"],
  },
  {
    name: "Baidu",
    url: "https://www.baidu.com/s",
    queryParam: "wd",
    color: "#2932E1",
    favicon: "/images/logos/baidu_logo.png",
    keywords: ["baidu", "china", "chinês", "busca", "search", "internacional", "asiático"],
  },
  {
    name: "Ecosia",
    url: "https://www.ecosia.org/search",
    queryParam: "q",
    color: "#4C7D4C",
    favicon: "https://www.ecosia.org/favicon.ico",
    keywords: ["ecosia", "ecológico", "árvores", "sustentável", "meio ambiente", "eco"],
  },
  {
    name: "Qwant",
    url: "https://www.qwant.com/",
    queryParam: "q",
    color: "#5C97FF",
    favicon: "https://www.qwant.com/favicon.ico",
    keywords: ["qwant", "privacidade", "europa", "francês", "privacy", "sem rastreamento"],
  },
  {
    name: "Startpage",
    url: "https://www.startpage.com/do/search",
    queryParam: "q",
    color: "#6573FF",
    favicon: "https://www.startpage.com/favicon.ico",
    keywords: ["startpage", "privacidade", "google", "anônimo", "privacy", "sem rastreamento"],
  },
  {
    name: "Ask.com",
    url: "https://www.ask.com/web",
    queryParam: "q",
    color: "#D51C29",
    favicon: "https://www.ask.com/favicon.ico",
    keywords: ["ask", "perguntas", "respostas", "busca", "search", "ask jeeves"],
  },
  {
    name: "AOL",
    url: "https://search.aol.com/aol/search",
    queryParam: "q",
    color: "#39CFFD",
    favicon: "/images/logos/aol_logo.svg",
    keywords: ["aol", "america online", "vintage", "clássico", "email", "portal"],
  },
  {
    name: "Brave Search",
    url: "https://search.brave.com/search",
    queryParam: "q",
    color: "#FB542B",
    favicon: "/images/logos/brave_search_logo.png",
    keywords: ["brave", "privacidade", "navegador", "browser", "privacy", "sem rastreamento", "crypto"],
  },
  {
    name: "Swisscows",
    url: "https://swisscows.com/web",
    queryParam: "query",
    color: "#FF0000",
    favicon: "https://swisscows.com/favicon.ico",
    keywords: ["swisscows", "suíça", "privacidade", "família", "seguro", "sem rastreamento"],
  },
  {
    name: "Mojeek",
    url: "https://www.mojeek.com/search",
    queryParam: "q",
    color: "#5A4AE3",
    favicon: "https://www.mojeek.com/favicon.ico",
    keywords: ["mojeek", "independente", "privacidade", "índice próprio", "uk", "britânico"],
  },
  {
    name: "Gibiru",
    url: "https://gibiru.com/results.html",
    queryParam: "q",
    color: "#F58220",
    favicon: "/images/logos/gibiru_logo.png",
    keywords: ["gibiru", "não censurado", "privacidade", "alternativo", "uncensored", "liberdade"],
  },
  {
    name: "MetaGer",
    url: "https://metager.org/meta/meta.ger3",
    queryParam: "eingabe",
    color: "#9CCB3B",
    favicon: "https://metager.org/favicon.ico",
    keywords: ["metager", "alemão", "privacidade", "meta busca", "sustentável", "sem fins lucrativos"],
  },
  {
    name: "SearX",
    url: "https://searx.space/",
    queryParam: "q",
    color: "#444444",
    favicon: "https://searx.space/favicon.ico",
    keywords: ["searx", "código aberto", "open source", "privacidade", "meta busca", "descentralizado"],
  },
  {
    name: "Presearch",
    url: "https://presearch.com/search",
    queryParam: "q",
    color: "#2C65EF",
    favicon: "https://presearch.com/favicon.ico",
    keywords: ["presearch", "blockchain", "descentralizado", "crypto", "token", "recompensas"],
  },
  {
    name: "Kagi",
    url: "https://kagi.com/search",
    queryParam: "q",
    color: "#7C5295",
    favicon: "https://kagi.com/favicon.ico",
    keywords: ["kagi", "premium", "ia", "personalizado", "sem anúncios", "privacidade"],
  },
  // Novos mecanismos de busca adicionados
  {
    name: "Minecraft.net",
    url: "https://www.minecraft.net/pt-br/search",
    queryParam: "q",
    color: "#70C050",
    favicon: "/images/logos/minecraft_search_logo.png",
    keywords: ["minecraft", "mojang", "jogo", "game", "oficial", "microsoft", "blocos", "mods"],
    // Parâmetros adicionais para o Minecraft.net
    additionalParams: "tabs=%7B%22searchApp%22%3A0%7D",
  },
  {
    name: "ErikrafT Blog",
    url: "https://blog.erikraft.com/search",
    queryParam: "q",
    color: "#1E88E5",
    favicon: "https://blog.erikraft.com/favicon.ico",
    keywords: ["erikraft", "blog", "minecraft", "jogos", "games", "tutoriais", "mods", "servidor", "youtuber"],
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
