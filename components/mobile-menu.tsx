"use client"

import { FiX, FiSettings } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import SettingsMenu from "@/components/settings-menu"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-xl p-4 flex flex-col">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
            <div className="h-8">
              <Image
                src="/images/isearch-logo.png"
                alt="iSearch Logo"
                width={100}
                height={30}
                className="h-full w-auto object-contain"
                draggable={false}
              />
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <FiX size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="https://mail.google.com"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Email</span>
            </Link>

            <Link
              href="https://www.google.com.br/imghp"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Imagens</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Vídeos</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Shopping</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Notícias</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <span className="text-gray-800 dark:text-gray-200">Mapas</span>
            </Link>

            <button
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-left"
              onClick={() => setShowSettings(true)}
            >
              <FiSettings className="text-gray-600 dark:text-gray-400" size={18} />
              <span className="text-gray-800 dark:text-gray-200">Configurações</span>
            </button>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
            <button className="w-full google-gradient text-white py-3 rounded-xl text-sm font-medium shadow-md transition-all duration-200">
              Entrar
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <SettingsMenu
          isOpen={showSettings}
          onClose={() => {
            setShowSettings(false)
            onClose()
          }}
        />
      )}
    </>
  )
}
