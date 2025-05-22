"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { FiX } from "react-icons/fi"
import Link from "next/link"
import Image from "next/image"

interface ShoppingMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingMenu({ isOpen, onClose }: ShoppingMenuProps) {
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
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Shopping</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FiX size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Escolha uma plataforma para comprar produtos:</p>

          <div className="space-y-3">
            <Link
              href="https://shopping.google.com"
              onClick={handleLinkClick("https://shopping.google.com", "Google Shopping")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/google_logo.png"
                  alt="Google Shopping"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Google Shopping</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Compare preços em várias lojas</p>
              </div>
            </Link>

            <Link
              href="https://www.amazon.com"
              onClick={handleLinkClick("https://www.amazon.com", "Amazon")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/amazon_logo.jpg"
                  alt="Amazon"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Amazon</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Maior marketplace do mundo</p>
              </div>
            </Link>

            <Link
              href="https://www.mercadolivre.com.br"
              onClick={handleLinkClick("https://www.mercadolivre.com.br", "Mercado Livre")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/mercado_livre_logo.png"
                  alt="Mercado Livre"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Mercado Livre</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Maior marketplace da América Latina</p>
              </div>
            </Link>

            <Link
              href="https://www.magazineluiza.com.br"
              onClick={handleLinkClick("https://www.magazineluiza.com.br", "Magazine Luiza")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/magalu_logo.png"
                  alt="Magalu"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Magalu</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Magazine Luiza - Produtos e ofertas</p>
              </div>
            </Link>

            <Link
              href="https://www.shopee.com.br"
              onClick={handleLinkClick("https://www.shopee.com.br", "Shopee")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/shopee_logo.png"
                  alt="Shopee"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Shopee</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Produtos com preços acessíveis</p>
              </div>
            </Link>

            <Link
              href="https://www.americanas.com.br"
              onClick={handleLinkClick("https://www.americanas.com.br", "Americanas")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/americanas_logo.png"
                  alt="Americanas"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Americanas</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Variedade de produtos e departamentos</p>
              </div>
            </Link>

            <Link
              href="https://www.lojasrenner.com.br"
              onClick={handleLinkClick("https://www.lojasrenner.com.br", "Renner")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/renner_logo.png"
                  alt="Renner"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Renner</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Moda e acessórios</p>
              </div>
            </Link>

            <Link
              href="https://www.carrefour.com.br"
              onClick={handleLinkClick("https://www.carrefour.com.br", "Carrefour")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/carrefour_logo.webp"
                  alt="Carrefour"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Carrefour</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Supermercado e produtos diversos</p>
              </div>
            </Link>

            <Link
              href="https://www.extra.com.br"
              onClick={handleLinkClick("https://www.extra.com.br", "Extra")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/Extra_Shopping.ico"
                  alt="Extra"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Extra</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Eletrônicos, eletrodomésticos e mais</p>
              </div>
            </Link>

            <Link
              href="https://www.ebay.com"
              onClick={handleLinkClick("https://www.ebay.com", "eBay")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image src="/images/logos/ebay_logo.webp" alt="eBay" width={30} height={30} className="rounded-full" />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">eBay</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Leilões e produtos novos e usados</p>
              </div>
            </Link>

            <Link
              href="https://www.aliexpress.com"
              onClick={handleLinkClick("https://www.aliexpress.com", "AliExpress")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/aliexpress_logo.webp"
                  alt="AliExpress"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">AliExpress</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Produtos importados com preços acessíveis</p>
              </div>
            </Link>

            <Link
              href="https://www.temu.com/br"
              onClick={handleLinkClick("https://www.temu.com/br", "Temu")}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Image
                  src="/images/logos/temu_logo.png"
                  alt="Temu"
                  width={30}
                  height={30}
                  className="rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    target.parentElement!.innerHTML =
                      '<div class="w-full h-full rounded-full bg-orange-500 flex items-center justify-center"><span class="text-white font-bold">T</span></div>'
                  }}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">Temu</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Produtos importados com preços baixos</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
