import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Política de Privacidade</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>Última atualização: 20 de maio de 2025</p>

          <h2>1. Introdução</h2>
          <p>
            Bem-vindo à Política de Privacidade do iSearch. Esta política descreve como coletamos, usamos, processamos e
            compartilhamos suas informações quando você utiliza nosso serviço de busca.
          </p>
          <p>
            Nós valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Por favor,
            leia esta política cuidadosamente para entender nossas práticas em relação aos seus dados.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <p>
            <strong>Informações que você nos fornece:</strong> Quando você utiliza o iSearch, podemos coletar
            informações que você fornece diretamente, como termos de pesquisa, preferências de configuração e
            informações de conta se você optar por criar uma.
          </p>
          <p>
            <strong>Informações coletadas automaticamente:</strong> Coletamos automaticamente certas informações quando
            você utiliza nosso serviço, incluindo:
          </p>
          <ul>
            <li>Informações de uso, como termos de pesquisa, páginas visitadas e tempo gasto no serviço</li>
            <li>Informações do dispositivo, como tipo de navegador, sistema operacional e configurações de idioma</li>
            <li>Informações de localização aproximada baseadas em seu endereço IP</li>
            <li>Cookies e tecnologias similares para melhorar sua experiência</li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Utilizamos as informações coletadas para:</p>
          <ul>
            <li>Fornecer, manter e melhorar nosso serviço de busca</li>
            <li>Personalizar sua experiência com base em suas preferências</li>
            <li>Desenvolver novos recursos e funcionalidades</li>
            <li>Proteger a segurança e integridade do serviço</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes circunstâncias:
          </p>
          <ul>
            <li>Com provedores de serviços terceirizados que nos ajudam a operar o serviço</li>
            <li>Para cumprir com obrigações legais, como responder a intimações ou ordens judiciais</li>
            <li>Para proteger nossos direitos, propriedade ou segurança, ou a de nossos usuários</li>
            <li>Em conexão com uma fusão, aquisição ou venda de ativos, com aviso prévio</li>
          </ul>

          <h2>5. Suas Escolhas e Direitos</h2>
          <p>Você tem certos direitos e escolhas em relação às suas informações:</p>
          <ul>
            <li>Acessar, corrigir ou excluir suas informações pessoais</li>
            <li>Optar por não receber comunicações de marketing</li>
            <li>Desativar cookies através das configurações do seu navegador</li>
            <li>Solicitar a portabilidade de seus dados</li>
          </ul>
          <p>Para exercer esses direitos, entre em contato conosco através das informações fornecidas abaixo.</p>

          <h2>6. Segurança de Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso
            não autorizado, perda ou alteração. No entanto, nenhum sistema é completamente seguro, e não podemos
            garantir a segurança absoluta de suas informações.
          </p>

          <h2>7. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pelo tempo necessário para fornecer o serviço e cumprir com nossas obrigações
            legais. Quando não precisarmos mais de suas informações, as excluiremos ou anonimizaremos.
          </p>

          <h2>8. Crianças</h2>
          <p>
            Nosso serviço não é direcionado a crianças menores de 13 anos, e não coletamos intencionalmente informações
            pessoais de crianças. Se descobrirmos que coletamos informações de uma criança, tomaremos medidas para
            excluí-las.
          </p>

          <h2>9. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por outros
            motivos operacionais, legais ou regulatórios. Notificaremos você sobre quaisquer alterações materiais
            através de nosso site ou por outros meios.
          </p>

          <h2>10. Contato</h2>
          <p>
            Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta política ou às suas informações,
            entre em contato conosco em:
          </p>
          <p>Email: erikraft43@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
