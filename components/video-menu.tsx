"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { FiX } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

interface VideoMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoMenu({ isOpen, onClose }: VideoMenuProps) {
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
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Vídeos</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Escolha uma plataforma para assistir ou pesquisar vídeos:
          </p>

          <div className="space-y-3">
            <Link
              href="https://www.youtube.com"
              onClick={handleLinkClick("https://www.youtube.com", "YouTube")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/youtube_logo.jpg"
                  alt="YouTube"
                  width={30}
                  height={30}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<span class="text-white font-bold bg-red-600 w-full h-full rounded-full flex items-center justify-center">Y</span>'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">YouTube</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos, música, streaming e muito mais</p>
              </div>
            </Link>

            <Link
              href="https://www.instagram.com"
              onClick={handleLinkClick("https://www.instagram.com", "Instagram")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                {/* Instagram Logo */}
                <svg viewBox="0 0 24 24" width="30" height="30">
                  <defs>
                    <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                      <stop offset="0%" stopColor="#FFDD55" />
                      <stop offset="10%" stopColor="#FFDD55" />
                      <stop offset="50%" stopColor="#FF543E" />
                      <stop offset="85%" stopColor="#C837AB" />
                      <stop offset="100%" stopColor="#C837AB" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="url(#instagramGradient)"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Instagram</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Reels, stories e vídeos curtos</p>
              </div>
            </Link>

            <Link
              href="https://www.facebook.com/watch"
              onClick={handleLinkClick("https://www.facebook.com/watch", "Facebook Watch")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                {/* Facebook Logo */}
                <svg viewBox="0 0 36 36" width="30" height="30">
                  <path
                    fill="#1877F2"
                    d="M36 18C36 8.059 27.941 0 18 0S0 8.059 0 18c0 8.99 6.584 16.448 15.188 17.797V23.25h-4.57V18h4.57v-3.975c0-4.509 2.685-7.001 6.799-7.001 1.969 0 4.029.352 4.029.352v4.429h-2.269c-2.235 0-2.932 1.387-2.932 2.809V18h4.988l-.797 5.25h-4.191v12.547C29.416 34.448 36 26.99 36 18"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M25.016 23.25l.797-5.25h-4.988v-3.386c0-1.422.697-2.809 2.932-2.809h2.269V7.376s-2.06-.352-4.029-.352c-4.114 0-6.799 2.492-6.799 7.001V18h-4.57v5.25h4.57v12.547a18.207 18.207 0 005.624 0V23.25h4.194z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Facebook Watch</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos, lives e séries originais</p>
              </div>
            </Link>

            <Link
              href="https://www.tiktok.com"
              onClick={handleLinkClick("https://www.tiktok.com", "TikTok")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/tiktok_logo.png"
                  alt="TikTok"
                  width={30}
                  height={30}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<span class="text-white font-bold bg-black w-full h-full rounded-full flex items-center justify-center">T</span>'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">TikTok</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos curtos e tendências</p>
              </div>
            </Link>

            <Link
              href="https://www.kwai.com"
              onClick={handleLinkClick("https://www.kwai.com", "Kwai")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                <Image
                  src="/images/logos/kwai_logo.png"
                  alt="Kwai"
                  width={30}
                  height={30}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<span class="text-white font-bold bg-orange-500 w-full h-full rounded-full flex items-center justify-center">K</span>'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Kwai</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos curtos e entretenimento</p>
              </div>
            </Link>

            <Link
              href="https://vimeo.com"
              onClick={handleLinkClick("https://vimeo.com", "Vimeo")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/vimeo_logo.png"
                  alt="Vimeo"
                  width={30}
                  height={30}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<span class="text-white font-bold bg-blue-500 w-full h-full rounded-full flex items-center justify-center">V</span>'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Vimeo</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Vídeos profissionais e de alta qualidade</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
