"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { FiX } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

interface NewsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsMenu({ isOpen, onClose }: NewsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

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

  const handleLinkClick = (url: string, title: string) => (e: React.MouseEvent) => {
    // Abrir em uma nova guia
    window.open(url, "_blank")

    // Fechar o menu
    onClose()

    return false
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        ref={menuRef}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Notícias</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Escolha uma fonte para ler as últimas notícias:
          </p>

          <div className="space-y-3">
            <Link
              href="https://news.google.com"
              onClick={handleLinkClick("https://news.google.com", "Google News")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/google_logo.png"
                  alt="Google News"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Google News</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Notícias personalizadas de várias fontes</p>
              </div>
            </Link>

            <Link
              href="https://www.bbc.com/news"
              onClick={handleLinkClick("https://www.bbc.com/news", "BBC News")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/bbc_news_logo.jpg"
                  alt="BBC News"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">BBC News</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Notícias internacionais confiáveis</p>
              </div>
            </Link>

            <Link
              href="https://www.cnn.com"
              onClick={handleLinkClick("https://www.cnn.com", "CNN")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/cnn_logo.png" alt="CNN" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">CNN</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Notícias e análises em tempo real</p>
              </div>
            </Link>

            <Link
              href="https://www.reuters.com"
              onClick={handleLinkClick("https://www.reuters.com", "Reuters")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/reuters.jpg" alt="Reuters" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Reuters</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Agência de notícias internacional</p>
              </div>
            </Link>

            <Link
              href="https://www.theguardian.com"
              onClick={handleLinkClick("https://www.theguardian.com", "The Guardian")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/the_guardian_logo.jpg"
                  alt="The Guardian"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">The Guardian</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Jornalismo independente e investigativo</p>
              </div>
            </Link>

            <Link
              href="https://g1.globo.com"
              onClick={handleLinkClick("https://g1.globo.com", "G1")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/g1_logo.png" alt="G1" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">G1</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Portal de notícias da Globo</p>
              </div>
            </Link>

            <Link
              href="https://www.uol.com.br"
              onClick={handleLinkClick("https://www.uol.com.br", "UOL")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/uol_logo.png" alt="UOL" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">UOL</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Portal de notícias brasileiro</p>
              </div>
            </Link>

            <Link
              href="https://www.folha.uol.com.br"
              onClick={handleLinkClick("https://www.folha.uol.com.br", "Folha de S.Paulo")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/folha_de_sp_logo.jpg"
                  alt="Folha de S.Paulo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Folha de S.Paulo</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Jornal brasileiro de grande circulação</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
