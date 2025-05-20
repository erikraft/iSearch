import Link from "next/link"
import Image from "next/image"
import { FiArrowLeft } from "react-icons/fi"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sobre o iSearch</h1>

        <div className="prose dark:prose-invert max-w-none">
          <div className="flex justify-center mb-8">
            <div className="w-64">
              <Image
                src="/images/isearch-logo.png"
                alt="iSearch Logo"
                width={320}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2>Nossa Missão</h2>
          <p>
            O iSearch foi criado com uma missão simples: tornar a busca na internet mais eficiente, personalizada e
            acessível para todos. Acreditamos que a informação deve estar ao alcance de todos, e nosso objetivo é
            fornecer uma plataforma que conecte as pessoas ao conhecimento de forma rápida e intuitiva.
          </p>

          <h2>Quem Somos</h2>
          <p>
            Somos uma equipe de entusiastas de tecnologia, desenvolvedores e designers apaixonados por criar
            experiências digitais excepcionais. O iSearch nasceu da nossa frustração com as limitações dos mecanismos de
            busca tradicionais e do desejo de oferecer uma alternativa que coloque o usuário em primeiro lugar.
          </p>

          <h2>Nossa Abordagem</h2>
          <p>
            Diferentemente de outros mecanismos de busca, o iSearch não está preso a um único algoritmo ou fonte de
            dados. Nossa plataforma integra múltiplos mecanismos de pesquisa, permitindo que você escolha a fonte que
            melhor atende às suas necessidades. Acreditamos que essa abordagem oferece resultados mais abrangentes e
            imparciais.
          </p>

          <h2>Privacidade e Transparência</h2>
          <p>
            Respeitamos profundamente sua privacidade. Não rastreamos seu histórico de pesquisa para vender dados a
            anunciantes, nem criamos perfis detalhados dos nossos usuários. Acreditamos que você deve ter controle total
            sobre suas informações pessoais e ser capaz de navegar na web sem comprometer sua privacidade.
          </p>
          <p>
            Para saber mais sobre como tratamos seus dados, consulte nossa{" "}
            <Link href="/privacidade" className="text-blue-600 dark:text-blue-400 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>

          <h2>Recursos Exclusivos</h2>
          <p>O iSearch oferece uma série de recursos exclusivos projetados para melhorar sua experiência de busca:</p>
          <ul>
            <li>Integração com múltiplos mecanismos de pesquisa</li>
            <li>Interface limpa e intuitiva</li>
            <li>Suporte a pesquisa por voz e imagem</li>
            <li>Temas personalizáveis</li>
            <li>Sistema de guias integrado</li>
            <li>Acesso rápido a vídeos, notícias, mapas e shopping</li>
          </ul>

          <h2>Nosso Compromisso</h2>
          <p>
            Estamos comprometidos em melhorar continuamente o iSearch com base no feedback dos usuários. Acreditamos que
            a melhor maneira de criar um produto excepcional é ouvir atentamente as pessoas que o utilizam todos os
            dias.
          </p>

          <h2>Entre em Contato</h2>
          <p>
            Valorizamos seu feedback e sugestões. Se você tiver ideias sobre como podemos melhorar o iSearch, ou se
            encontrar algum problema, não hesite em entrar em contato conosco:
          </p>
          <p>
            Email: erikraft43@gmail.com
            <br />
            Twitter: @ErikrafTbr
            <br />
            GitHub: github.com/erikraft/iSearch
          </p>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 iSearch. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
