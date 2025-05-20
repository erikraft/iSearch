import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iSearch - Pesquise com estilo",
  description: "Motor de busca iSearch - Pesquise com estilo e acesse múltiplos mecanismos de busca em um só lugar",
  keywords: "motor de busca, pesquisa, google, bing, yahoo, duckduckgo, navegador, internet",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/isearch-icon.png",
  },
  openGraph: {
    title: "iSearch - Pesquise com estilo",
    description: "Motor de busca iSearch - Pesquise com estilo e acesse múltiplos mecanismos de busca em um só lugar",
    url: "https://isearch.vercel.app",
    siteName: "iSearch",
    images: [
      {
        url: "/images/isearch-logo.png",
        width: 320,
        height: 100,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="anti-copy" strategy="afterInteractive">
          {`
            // Desabilitar menu de contexto
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
              return false;
            });

            // Desabilitar arrasto de imagens
            document.querySelectorAll('img').forEach(function(img) {
              img.setAttribute('draggable', 'false');
              img.style.userSelect = 'none';
              img.style.webkitUserSelect = 'none';
            });

            // Desabilitar atalhos de teclado para salvar
            document.addEventListener('keydown', function(e) {
              if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                return false;
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
