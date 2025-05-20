import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Como Funciona o iSearch</h1>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Visão Geral</h2>
          <p>
            O iSearch é uma plataforma de busca avançada que permite acessar múltiplos mecanismos de pesquisa através de
            uma única interface intuitiva. Diferente de outros buscadores, o iSearch não possui um índice próprio, mas
            funciona como um agregador inteligente que direciona suas consultas para os melhores mecanismos de busca
            disponíveis.
          </p>

          <h2>Principais Recursos</h2>

          <h3>1. Múltiplos Mecanismos de Busca</h3>
          <p>
            O iSearch integra-se com mais de 20 mecanismos de busca diferentes, incluindo Google, Bing, DuckDuckGo,
            Yahoo, Yandex e muitos outros. Você pode escolher seu mecanismo preferido ou alternar entre eles conforme
            necessário.
          </p>

          <h3>2. Interface Unificada</h3>
          <p>
            Nossa interface limpa e intuitiva oferece uma experiência consistente, independentemente do mecanismo de
            busca que você escolher. Isso significa que você não precisa se adaptar a diferentes layouts ou aprender
            novos comandos ao mudar de um mecanismo para outro.
          </p>

          <h3>3. Sistema de Guias</h3>
          <p>
            O iSearch permite que você abra múltiplas guias de pesquisa, semelhante a um navegador web. Isso facilita a
            comparação de resultados de diferentes mecanismos ou a realização de várias pesquisas simultaneamente sem
            perder o contexto.
          </p>

          <h3>4. Pesquisa Avançada</h3>
          <p>Além da pesquisa por texto, o iSearch suporta:</p>
          <ul>
            <li>
              <strong>Pesquisa por Voz:</strong> Basta clicar no ícone do microfone e falar sua consulta
            </li>
            <li>
              <strong>Pesquisa por Imagem:</strong> Faça upload de uma imagem para encontrar conteúdo relacionado
            </li>
            <li>
              <strong>Pesquisa Contextual:</strong> Resultados adaptados com base em suas preferências (se você optar
              por isso)
            </li>
          </ul>

          <h3>5. Categorias Especializadas</h3>
          <p>O iSearch oferece acesso rápido a categorias especializadas:</p>
          <ul>
            <li>
              <strong>Vídeos:</strong> Pesquise em plataformas como YouTube, Instagram, TikTok e outras
            </li>
            <li>
              <strong>Shopping:</strong> Encontre produtos em diversas lojas online
            </li>
            <li>
              <strong>Notícias:</strong> Acesse as últimas notícias de fontes confiáveis
            </li>
            <li>
              <strong>Mapas:</strong> Navegue com Google Maps, Waze ou OpenStreetMap
            </li>
          </ul>

          <h2>Como Usar o iSearch</h2>

          <h3>Pesquisa Básica</h3>
          <ol>
            <li>Digite sua consulta na barra de pesquisa central</li>
            <li>Pressione Enter ou clique no botão de pesquisa</li>
            <li>Os resultados serão exibidos no mecanismo de busca selecionado</li>
          </ol>

          <h3>Alternar Mecanismos de Busca</h3>
          <ol>
            <li>Clique no ícone de configurações</li>
            <li>Selecione "Configurações"</li>
            <li>Escolha seu mecanismo de busca preferido na lista</li>
          </ol>

          <h3>Gerenciar Guias</h3>
          <ol>
            <li>Clique no botão "+" na barra de guias para abrir uma nova guia</li>
            <li>Clique em uma guia para alternar entre elas</li>
            <li>Clique no "x" em uma guia para fechá-la</li>
          </ol>

          <h2>Privacidade</h2>
          <p>
            O iSearch foi projetado com privacidade em mente. Não armazenamos seu histórico de pesquisa em nossos
            servidores, e todas as consultas são enviadas diretamente para o mecanismo de busca selecionado. Para mais
            informações, consulte nossa{" "}
            <Link href="/privacidade" className="text-blue-600 dark:text-blue-400 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>

          <h2>Feedback e Suporte</h2>
          <p>
            Estamos sempre buscando melhorar o iSearch. Se você tiver sugestões, encontrar bugs ou precisar de ajuda,
            entre em contato conosco em erikraft43@gmail.com.
          </p>
        </div>
      </div>
    </div>
  )
}
