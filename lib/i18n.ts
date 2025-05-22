"use client"

import { useCallback } from "react"

import { useEffect } from "react"

import { useState } from "react"

// Tipos para as traduções
export type Locale = "pt-BR" | "en-US" | "es-ES" | "fr-FR" | "de-DE" | "it-IT" | "ja-JP" | "zh-CN" | "ru-RU"

// Mapeamento de códigos de país para idiomas
export const countryToLocale: Record<string, Locale> = {
  // América
  BR: "pt-BR",
  US: "en-US",
  CA: "en-US", // Canadá (inglês por padrão)
  MX: "es-ES",
  AR: "es-ES",
  CL: "es-ES",
  CO: "es-ES",
  PE: "es-ES",

  // Europa
  GB: "en-US", // Reino Unido
  IE: "en-US", // Irlanda
  FR: "fr-FR",
  DE: "de-DE",
  ES: "es-ES",
  IT: "it-IT",
  PT: "pt-BR", // Portugal (usando pt-BR por simplicidade)
  RU: "ru-RU",

  // Ásia
  JP: "ja-JP",
  CN: "zh-CN",
  HK: "zh-CN", // Hong Kong
  TW: "zh-CN", // Taiwan

  // Padrão
  DEFAULT: "en-US",
}

// Função para obter o idioma com base no código do país
export function getLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode] || countryToLocale.DEFAULT
}

// Traduções
export const translations: Record<Locale, Record<string, string>> = {
  "pt-BR": {
    // Geral
    search: "Pesquisar",
    search_in: "Pesquisar no {engine} ou digitar URL",
    search_with_style: "Pesquise com estilo",
    feeling_lucky: "Estou com Sorte",

    // Categorias
    videos: "Vídeos",
    shopping: "Shopping",
    news: "Notícias",
    maps: "Mapas",

    // Navegação
    back: "Voltar",
    forward: "Avançar",
    reload: "Recarregar",
    home: "Página inicial",

    // Menus
    choose_platform: "Escolha uma plataforma para {category}",
    choose_search_engine: "Escolha seu mecanismo de pesquisa preferido",
    restore_default: "Restaurar padrão",
    save: "Salvar",

    // Rodapé
    about: "Sobre",
    how_it_works: "Como funciona",
    privacy: "Privacidade",
    terms: "Termos",

    // Configurações
    settings: "Configurações",
    search_engine: "Mecanismo de Pesquisa",
    appearance: "Aparência",
    dark_theme: "Tema escuro",
    animations: "Animações",
    glass_effects: "Efeitos de vidro",
  },

  "en-US": {
    // General
    search: "Search",
    search_in: "Search on {engine} or type URL",
    search_with_style: "Search with style",
    feeling_lucky: "I'm Feeling Lucky",

    // Categories
    videos: "Videos",
    shopping: "Shopping",
    news: "News",
    maps: "Maps",

    // Navigation
    back: "Back",
    forward: "Forward",
    reload: "Reload",
    home: "Home",

    // Menus
    choose_platform: "Choose a platform for {category}",
    choose_search_engine: "Choose your preferred search engine",
    restore_default: "Restore default",
    save: "Save",

    // Footer
    about: "About",
    how_it_works: "How it works",
    privacy: "Privacy",
    terms: "Terms",

    // Settings
    settings: "Settings",
    search_engine: "Search Engine",
    appearance: "Appearance",
    dark_theme: "Dark theme",
    animations: "Animations",
    glass_effects: "Glass effects",
  },

  "es-ES": {
    // General
    search: "Buscar",
    search_in: "Buscar en {engine} o escribir URL",
    search_with_style: "Busca con estilo",
    feeling_lucky: "Voy a tener suerte",

    // Categories
    videos: "Videos",
    shopping: "Compras",
    news: "Noticias",
    maps: "Mapas",

    // Navigation
    back: "Atrás",
    forward: "Adelante",
    reload: "Recargar",
    home: "Inicio",

    // Menus
    choose_platform: "Elige una plataforma para {category}",
    choose_search_engine: "Elige tu motor de búsqueda preferido",
    restore_default: "Restaurar predeterminado",
    save: "Guardar",

    // Footer
    about: "Acerca de",
    how_it_works: "Cómo funciona",
    privacy: "Privacidad",
    terms: "Términos",

    // Settings
    settings: "Configuración",
    search_engine: "Motor de búsqueda",
    appearance: "Apariencia",
    dark_theme: "Tema oscuro",
    animations: "Animaciones",
    glass_effects: "Efectos de cristal",
  },

  "fr-FR": {
    // General
    search: "Rechercher",
    search_in: "Rechercher sur {engine} ou saisir une URL",
    search_with_style: "Recherchez avec style",
    feeling_lucky: "J'ai de la chance",

    // Categories
    videos: "Vidéos",
    shopping: "Shopping",
    news: "Actualités",
    maps: "Cartes",

    // Navigation
    back: "Retour",
    forward: "Avancer",
    reload: "Actualiser",
    home: "Accueil",

    // Menus
    choose_platform: "Choisissez une plateforme pour {category}",
    choose_search_engine: "Choisissez votre moteur de recherche préféré",
    restore_default: "Restaurer par défaut",
    save: "Enregistrer",

    // Footer
    about: "À propos",
    how_it_works: "Comment ça marche",
    privacy: "Confidentialité",
    terms: "Conditions",

    // Settings
    settings: "Paramètres",
    search_engine: "Moteur de recherche",
    appearance: "Apparence",
    dark_theme: "Thème sombre",
    animations: "Animations",
    glass_effects: "Effets de verre",
  },

  "de-DE": {
    // General
    search: "Suchen",
    search_in: "Suche auf {engine} oder URL eingeben",
    search_with_style: "Suchen Sie mit Stil",
    feeling_lucky: "Auf gut Glück!",

    // Categories
    videos: "Videos",
    shopping: "Shopping",
    news: "Nachrichten",
    maps: "Karten",

    // Navigation
    back: "Zurück",
    forward: "Vorwärts",
    reload: "Neu laden",
    home: "Startseite",

    // Menus
    choose_platform: "Wählen Sie eine Plattform für {category}",
    choose_search_engine: "Wählen Sie Ihre bevorzugte Suchmaschine",
    restore_default: "Standard wiederherstellen",
    save: "Speichern",

    // Footer
    about: "Über uns",
    how_it_works: "Wie es funktioniert",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",

    // Settings
    settings: "Einstellungen",
    search_engine: "Suchmaschine",
    appearance: "Erscheinungsbild",
    dark_theme: "Dunkles Thema",
    animations: "Animationen",
    glass_effects: "Glaseffekte",
  },

  "it-IT": {
    // General
    search: "Cerca",
    search_in: "Cerca su {engine} o digita URL",
    search_with_style: "Cerca con stile",
    feeling_lucky: "Mi sento fortunato",

    // Categories
    videos: "Video",
    shopping: "Shopping",
    news: "Notizie",
    maps: "Mappe",

    // Navigation
    back: "Indietro",
    forward: "Avanti",
    reload: "Ricarica",
    home: "Home",

    // Menus
    choose_platform: "Scegli una piattaforma per {category}",
    choose_search_engine: "Scegli il tuo motore di ricerca preferito",
    restore_default: "Ripristina predefinito",
    save: "Salva",

    // Footer
    about: "Chi siamo",
    how_it_works: "Come funziona",
    privacy: "Privacy",
    terms: "Termini",

    // Settings
    settings: "Impostazioni",
    search_engine: "Motore di ricerca",
    appearance: "Aspetto",
    dark_theme: "Tema scuro",
    animations: "Animazioni",
    glass_effects: "Effetti vetro",
  },

  "ja-JP": {
    // General
    search: "検索",
    search_in: "{engine}で検索またはURLを入力",
    search_with_style: "スタイリッシュに検索",
    feeling_lucky: "I'm Feeling Lucky",

    // Categories
    videos: "動画",
    shopping: "ショッピング",
    news: "ニュース",
    maps: "地図",

    // Navigation
    back: "戻る",
    forward: "進む",
    reload: "更新",
    home: "ホーム",

    // Menus
    choose_platform: "{category}のプラットフォームを選択",
    choose_search_engine: "検索エンジンを選択",
    restore_default: "デフォルトに戻す",
    save: "保存",

    // Footer
    about: "概要",
    how_it_works: "仕組み",
    privacy: "プライバシー",
    terms: "利用規約",

    // Settings
    settings: "設定",
    search_engine: "検索エンジン",
    appearance: "外観",
    dark_theme: "ダークテーマ",
    animations: "アニメーション",
    glass_effects: "ガラス効果",
  },

  "zh-CN": {
    // General
    search: "搜索",
    search_in: "在{engine}上搜索或输入网址",
    search_with_style: "时尚搜索",
    feeling_lucky: "手气不错",

    // Categories
    videos: "视频",
    shopping: "购物",
    news: "新闻",
    maps: "地图",

    // Navigation
    back: "后退",
    forward: "前进",
    reload: "刷新",
    home: "首页",

    // Menus
    choose_platform: "选择{category}平台",
    choose_search_engine: "选择您喜欢的搜索引擎",
    restore_default: "恢复默认",
    save: "保存",

    // Footer
    about: "关于",
    how_it_works: "工作原理",
    privacy: "隐私",
    terms: "条款",

    // Settings
    settings: "设置",
    search_engine: "搜索引擎",
    appearance: "外观",
    dark_theme: "深色主题",
    animations: "动画",
    glass_effects: "玻璃效果",
  },

  "ru-RU": {
    // General
    search: "Поиск",
    search_in: "Искать в {engine} или ввести URL",
    search_with_style: "Ищите со стилем",
    feeling_lucky: "Мне повезёт",

    // Categories
    videos: "Видео",
    shopping: "Покупки",
    news: "Новости",
    maps: "Карты",

    // Navigation
    back: "Назад",
    forward: "Вперёд",
    reload: "Обновить",
    home: "Главная",

    // Menus
    choose_platform: "Выберите платформу для {category}",
    choose_search_engine: "Выберите предпочитаемую поисковую систему",
    restore_default: "Восстановить по умолчанию",
    save: "Сохранить",

    // Footer
    about: "О нас",
    how_it_works: "Как это работает",
    privacy: "Конфиденциальность",
    terms: "Условия",

    // Settings
    settings: "Настройки",
    search_engine: "Поисковая система",
    appearance: "Внешний вид",
    dark_theme: "Тёмная тема",
    animations: "Анимации",
    glass_effects: "Эффекты стекла",
  },
}

// Hook para usar as traduções
export function useTranslation() {
  const [locale, setLocale] = useState<Locale>("pt-BR")
  const [country, setCountry] = useState<string | null>(null)

  // Detectar o país do usuário
  useEffect(() => {
    async function detectCountry() {
      try {
        // Tentar obter o país do usuário usando um serviço de geolocalização
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        if (data && data.country) {
          setCountry(data.country)
          const detectedLocale = getLocaleFromCountry(data.country)
          setLocale(detectedLocale)

          // Salvar no localStorage para uso futuro
          localStorage.setItem("locale", detectedLocale)
          localStorage.setItem("country", data.country)
        }
      } catch (error) {
        console.error("Erro ao detectar país:", error)

        // Tentar usar o idioma do navegador como fallback
        const browserLang = navigator.language
        if (browserLang) {
          const langCode = browserLang.split("-")[0]
          const matchingLocale = Object.keys(translations).find((locale) => locale.startsWith(langCode)) as
            | Locale
            | undefined

          if (matchingLocale) {
            setLocale(matchingLocale)
            localStorage.setItem("locale", matchingLocale)
          }
        }
      }
    }

    // Verificar se já temos um idioma salvo
    const savedLocale = localStorage.getItem("locale") as Locale | null
    const savedCountry = localStorage.getItem("country")

    if (savedLocale) {
      setLocale(savedLocale)
      if (savedCountry) {
        setCountry(savedCountry)
      }
    } else {
      detectCountry()
    }
  }, [])

  // Função para traduzir uma string
  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      const translation = translations[locale][key] || key

      if (params) {
        return Object.entries(params).reduce((str, [key, value]) => str.replace(`{${key}}`, value), translation)
      }

      return translation
    },
    [locale],
  )

  // Função para mudar o idioma manualmente
  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }, [])

  return {
    t,
    locale,
    country,
    changeLocale,
    availableLocales: Object.keys(translations) as Locale[],
  }
}
