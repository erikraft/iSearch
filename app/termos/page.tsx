import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Voltar para a página inicial</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Termos de Uso</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>Última atualização: 20 de maio de 2025</p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Bem-vindo ao iSearch. Ao acessar ou usar nosso serviço de busca, você concorda em ficar vinculado a estes
            Termos de Uso. Se você não concordar com estes termos, por favor, não use nosso serviço.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            O iSearch é um serviço de busca que permite aos usuários pesquisar informações na internet através de
            diversos mecanismos de busca. Nosso serviço inclui recursos como pesquisa por texto, imagem e voz, além de
            acesso a diferentes categorias de conteúdo.
          </p>

          <h2>3. Uso do Serviço</h2>
          <p>
            Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. Especificamente, você
            concorda em não:
          </p>
          <ul>
            <li>Usar o serviço para qualquer finalidade ilegal ou proibida por estes Termos</li>
            <li>Tentar acessar áreas do serviço às quais você não está autorizado</li>
            <li>Interferir ou interromper o funcionamento do serviço</li>
            <li>Tentar contornar medidas de segurança ou autenticação</li>
            <li>Usar o serviço para distribuir malware, spam ou conteúdo prejudicial</li>
            <li>Coletar informações de outros usuários sem seu consentimento</li>
          </ul>

          <h2>4. Contas de Usuário</h2>
          <p>
            Alguns recursos do serviço podem exigir que você crie uma conta. Você é responsável por manter a
            confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem sob sua conta. Você
            concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            O serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva do
            iSearch e seus licenciadores. O serviço é protegido por direitos autorais, marcas registradas e outras leis
            de propriedade intelectual.
          </p>
          <p>
            Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte do serviço sem nossa permissão
            expressa por escrito.
          </p>

          <h2>6. Conteúdo de Terceiros</h2>
          <p>
            O serviço pode conter links para sites de terceiros, anúncios, serviços ou recursos que não são de
            propriedade ou controlados pelo iSearch. Não temos controle sobre, e não assumimos responsabilidade pelo
            conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
          </p>

          <h2>7. Isenção de Garantias</h2>
          <p>
            O serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou
            implícitas. Não garantimos que o serviço atenderá aos seus requisitos, será ininterrupto, oportuno, seguro
            ou livre de erros.
          </p>

          <h2>8. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância o iSearch, seus diretores, funcionários, parceiros, agentes, fornecedores ou
            afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou
            punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis,
            resultantes de:
          </p>
          <ul>
            <li>Seu acesso ou uso ou incapacidade de acessar ou usar o serviço</li>
            <li>Qualquer conduta ou conteúdo de terceiros no serviço</li>
            <li>Conteúdo obtido através do serviço</li>
            <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo</li>
          </ul>

          <h2>9. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for
            material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos
            termos entrem em vigor. O que constitui uma alteração material será determinado a nosso critério.
          </p>

          <h2>10. Lei Aplicável</h2>
          <p>
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições
            sobre conflitos de leis.
          </p>

          <h2>11. Contato</h2>
          <p>Se você tiver dúvidas sobre estes Termos, entre em contato conosco em:</p>
          <p>Email: erikraft43@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
