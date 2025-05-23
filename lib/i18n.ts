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
  CA: "en-US",
  MX: "es-ES",
  AR: "es-ES",
  CL: "es-ES",
  CO: "es-ES",
  PE: "es-ES",

  // Europa
  GB: "en-US",
  IE: "en-US",
  FR: "fr-FR",
  DE: "de-DE",
  ES: "es-ES",
  IT: "it-IT",
  PT: "pt-BR",
  RU: "ru-RU",

  // Ásia
  JP: "ja-JP",
  CN: "zh-CN",
  HK: "zh-CN",
  TW: "zh-CN",

  // Padrão
  DEFAULT: "en-US",
}

// Função para obter o idioma com base no código do país
export function getLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode] || countryToLocale.DEFAULT
}

// Traduções completas
export const translations: Record<Locale, Record<string, string>> = {
  "pt-BR": {
    // Geral
    search: "Pesquisar",
    search_in: "Pesquisar no {engine} ou digitar URL",
    search_with_style: "Pesquise com estilo",
    feeling_lucky: "Estou com Sorte",
    back: "Voltar",
    forward: "Avançar",
    reload: "Recarregar",
    home: "Página inicial",
    settings: "Configurações",
    search_engine: "Mecanismo de Pesquisa",
    appearance: "Aparência",
    dark_theme: "Tema escuro",
    animations: "Animações",
    glass_effects: "Efeitos de vidro",
    choose_search_engine: "Escolha seu mecanismo de pesquisa preferido",
    restore_default: "Restaurar padrão",
    save: "Salvar",
    select_language: "Selecionar idioma",

    // Categorias
    videos: "Vídeos",
    shopping: "Shopping",
    news: "Notícias",
    maps: "Mapas",

    // Menus
    choose_platform: "Escolha uma plataforma para {category}",

    // Rodapé
    about: "Sobre",
    how_it_works: "Como funciona",
    privacy: "Privacidade",
    terms: "Termos",
    all_rights_reserved: "Todos os direitos reservados",
    last_updated: "Última atualização",
    may: "de maio de",

    // Configurações avançadas
    default_search_engine: "Mecanismo de pesquisa padrão",
    advanced_ai_search: "Pesquisa com IA avançada",
    search_engines_available: "mecanismos de pesquisa disponíveis",
    selected_search_engine: "Mecanismo de pesquisa selecionado",
    filter_search_engines: "Filtrar mecanismos de pesquisa...",
    customize_appearance: "Personalize a aparência da sua experiência de pesquisa:",
    use_theme_selector: "Use o seletor de tema no cabeçalho para alternar entre temas",

    // Página Sobre
    our_mission: "Nossa Missão",
    mission_description:
      "O iSearch foi criado com uma missão simples: tornar a busca na internet mais eficiente, personalizada e acessível para todos. Acreditamos que a informação deve estar ao alcance de todos, e nosso objetivo é fornecer uma plataforma que conecte as pessoas ao conhecimento de forma rápida e intuitiva.",
    who_we_are: "Quem Somos",
    team_description:
      "Somos uma equipe de entusiastas de tecnologia, desenvolvedores e designers apaixonados por criar experiências digitais excepcionais. O iSearch nasceu da nossa frustração com as limitações dos mecanismos de busca tradicionais e do desejo de oferecer uma alternativa que coloque o usuário em primeiro lugar.",
    our_approach: "Nossa Abordagem",
    approach_description:
      "Diferentemente de outros mecanismos de busca, o iSearch não está preso a um único algoritmo ou fonte de dados. Nossa plataforma integra múltiplos mecanismos de pesquisa, permitindo que você escolha a fonte que melhor atende às suas necessidades. Acreditamos que essa abordagem oferece resultados mais abrangentes e imparciais.",
    privacy_transparency: "Privacidade e Transparência",
    privacy_description:
      "Respeitamos profundamente sua privacidade. Não rastreamos seu histórico de pesquisa para vender dados a anunciantes, nem criamos perfis detalhados dos nossos usuários. Acreditamos que você deve ter controle total sobre suas informações pessoais e ser capaz de navegar na web sem comprometer sua privacidade.",
    privacy_more_info: "Para saber mais sobre como tratamos seus dados, consulte nossa",
    exclusive_features: "Recursos Exclusivos",
    features_intro:
      "O iSearch oferece uma série de recursos exclusivos projetados para melhorar sua experiência de busca:",
    feature_multiple_engines: "Integração com múltiplos mecanismos de pesquisa",
    feature_clean_interface: "Interface limpa e intuitiva",
    feature_voice_image: "Suporte a pesquisa por voz e imagem",
    feature_themes: "Temas personalizáveis",
    feature_tabs: "Sistema de guias integrado",
    feature_quick_access: "Acesso rápido a vídeos, notícias, mapas e shopping",
    our_commitment: "Nosso Compromisso",
    commitment_description:
      "Estamos comprometidos em melhorar continuamente o iSearch com base no feedback dos usuários. Acreditamos que a melhor maneira de criar um produto excepcional é ouvir atentamente as pessoas que o utilizam todos os dias.",
    contact_us: "Entre em Contato",
    feedback_intro:
      "Valorizamos seu feedback e sugestões. Se você tiver ideias sobre como podemos melhorar o iSearch, ou se encontrar algum problema, não hesite em entrar em contato conosco:",

    // Páginas estáticas
    overview: "Visão Geral",
    overview_description:
      "O iSearch é uma plataforma de busca avançada que permite acessar múltiplos mecanismos de pesquisa através de uma única interface intuitiva.",
    main_features: "Principais Recursos",
    multiple_search_engines: "Múltiplos Mecanismos de Busca",
    multiple_engines_description:
      "O iSearch integra-se com mais de 20 mecanismos de busca diferentes, incluindo Google, Bing, DuckDuckGo, Yahoo, Yandex e muitos outros.",
    unified_interface: "Interface Unificada",
    unified_interface_description:
      "Nossa interface limpa e intuitiva oferece uma experiência consistente, independentemente do mecanismo de busca que você escolher.",
    tab_system: "Sistema de Guias",
    tab_system_description:
      "O iSearch permite que você abra múltiplas guias de pesquisa, semelhante a um navegador web.",

    // Página Termos
    terms_acceptance: "Aceitação dos Termos",
    welcome_terms:
      "Bem-vindo ao iSearch. Ao acessar ou usar nosso serviço de busca, você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com estes termos, por favor, não use nosso serviço.",
    service_description: "Descrição do Serviço",
    service_description_text:
      "O iSearch é um serviço de busca que permite aos usuários pesquisar informações na internet através de diversos mecanismos de busca. Nosso serviço inclui recursos como pesquisa por texto, imagem e voz, além de acesso a diferentes categorias de conteúdo.",
    service_use: "Uso do Serviço",
    legal_use:
      "Você concorda em usar o serviço apenas para fins legais e de acordo com estes Termos. Especificamente, você concorda em não:",
    illegal_use: "Usar o serviço para qualquer finalidade ilegal ou proibida por estes Termos",
    unauthorized_access: "Tentar acessar áreas do serviço às quais você não está autorizado",
    service_interference: "Interferir ou interromper o funcionamento do serviço",
    security_bypass: "Tentar contornar medidas de segurança ou autenticação",
    malware_distribution: "Usar o serviço para distribuir malware, spam ou conteúdo prejudicial",
    user_info_collection: "Coletar informações de outros usuários sem seu consentimento",
    user_accounts: "Contas de Usuário",
    account_responsibility:
      "Alguns recursos do serviço podem exigir que você crie uma conta. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem sob sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.",
    intellectual_property: "Propriedade Intelectual",
    ip_ownership:
      "O serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva do iSearch e seus licenciadores. O serviço é protegido por direitos autorais, marcas registradas e outras leis de propriedade intelectual.",
    no_copy:
      "Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte do serviço sem nossa permissão expressa por escrito.",
    third_party_content: "Conteúdo de Terceiros",
    third_party_disclaimer:
      "O serviço pode conter links para sites de terceiros, anúncios, serviços ou recursos que não são de propriedade ou controlados pelo iSearch. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.",
    warranty_disclaimer: "Isenção de Garantias",
    as_is_service:
      'O serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o serviço atenderá aos seus requisitos, será ininterrupto, oportuno, seguro ou livre de erros.',
    liability_limitation: "Limitação de Responsabilidade",
    no_liability:
      "Em nenhuma circunstância o iSearch, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de:",
    access_inability: "Seu acesso ou uso ou incapacidade de acessar ou usar o serviço",
    third_party_conduct: "Qualquer conduta ou conteúdo de terceiros no serviço",
    content_obtained: "Conteúdo obtido através do serviço",
    unauthorized_access_use: "Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo",
    terms_changes: "Alterações nos Termos",
    modify_terms:
      "Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso critério.",
    applicable_law: "Lei Aplicável",
    governing_law:
      "Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.",
    terms_questions: "Se você tiver dúvidas sobre estes Termos, entre em contato conosco em:",

    // Página Privacidade
    introduction: "Introdução",
    privacy_welcome:
      "Bem-vindo à Política de Privacidade do iSearch. Esta política descreve como coletamos, usamos, processamos e compartilhamos suas informações quando você utiliza nosso serviço de busca.",
    privacy_value:
      "Nós valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Por favor, leia esta política cuidadosamente para entender nossas práticas em relação aos seus dados.",
    information_collect: "Informações que Coletamos",
    information_provide: "Informações que você nos fornece",
    information_provide_description:
      "Quando você utiliza o iSearch, podemos coletar informações que você fornece diretamente, como termos de pesquisa, preferências de configuração e informações de conta se você optar por criar uma.",
    information_automatic: "Informações coletadas automaticamente",
    information_automatic_description:
      "Coletamos automaticamente certas informações quando você utiliza nosso serviço, incluindo:",
    usage_info: "Informações de uso, como termos de pesquisa, páginas visitadas e tempo gasto no serviço",
    device_info: "Informações do dispositivo, como tipo de navegador, sistema operacional e configurações de idioma",
    location_info: "Informações de localização aproximada baseadas em seu endereço IP",
    cookies_info: "Cookies e tecnologias similares para melhorar sua experiência",
    how_use_information: "Como Usamos Suas Informações",
    use_information_intro: "Utilizamos as informações coletadas para",
    provide_service: "Fornecer, manter e melhorar nosso serviço de busca",
    personalize_experience: "Personalizar sua experiência com base em suas preferências",
    develop_features: "Desenvolver novos recursos e funcionalidades",
    protect_security: "Proteger a segurança e integridade do serviço",
    legal_obligations: "Cumprir obrigações legais",
    information_sharing: "Compartilhamento de Informações",
    not_sell_info:
      "Não vendemos suas informações pessoais. Podemos compartilhar suas informações nas seguintes circunstâncias:",
    service_providers: "Com provedores de serviços terceirizados que nos ajudam a operar o serviço",
    legal_requirements: "Para cumprir com obrigações legais, como responder a intimações ou ordens judiciais",
    protect_rights: "Para proteger nossos direitos, propriedade ou segurança, ou a de nossos usuários",
    business_transfers: "Em conexão com uma fusão, aquisição ou venda de ativos, com aviso prévio",
    your_choices: "Suas Escolhas e Direitos",
    rights_intro: "Você tem certos direitos e escolhas em relação às suas informações",
    access_correct: "Acessar, corrigir ou excluir suas informações pessoais",
    opt_out: "Optar por não receber comunicações de marketing",
    disable_cookies: "Desativar cookies através das configurações do seu navegador",
    data_portability: "Solicitar a portabilidade de seus dados",
    exercise_rights: "Para exercer esses direitos, entre em contato conosco através das informações fornecidas abaixo.",
    data_security: "Segurança de Dados",
    security_measures:
      "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.",
    data_retention: "Retenção de Dados",
    retention_policy:
      "Mantemos suas informações pelo tempo necessário para fornecer o serviço e cumprir com nossas obrigações legais. Quando não precisarmos mais de suas informações, as excluiremos ou anonimizaremos.",
    children: "Crianças",
    children_policy:
      "Nosso serviço não é direcionado a crianças menores de 13 anos, e não coletamos intencionalmente informações pessoais de crianças. Se descobrirmos que coletamos informações de uma criança, tomaremos medidas para excluí-las.",
    policy_changes: "Alterações nesta Política",
    update_policy:
      "Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre quaisquer alterações materiais através de nosso site ou por outros meios.",
    contact: "Contato",
    questions_concerns:
      "Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta política ou às suas informações, entre em contato conosco em:",
  },

  "zh-CN": {
    // Geral
    search: "搜索",
    search_in: "在{engine}上搜索或输入网址",
    search_with_style: "时尚搜索",
    feeling_lucky: "手气不错",
    back: "返回",
    forward: "前进",
    reload: "刷新",
    home: "首页",
    settings: "设置",
    search_engine: "搜索引擎",
    appearance: "外观",
    dark_theme: "深色主题",
    animations: "动画",
    glass_effects: "玻璃效果",
    choose_search_engine: "选择您喜欢的搜索引擎",
    restore_default: "恢复默认",
    save: "保存",
    select_language: "选择语言",

    // Categorias
    videos: "视频",
    shopping: "购物",
    news: "新闻",
    maps: "地图",

    // Menus
    choose_platform: "选择{category}平台",

    // Rodapé
    about: "关于",
    how_it_works: "工作原理",
    privacy: "隐私",
    terms: "条款",
    all_rights_reserved: "版权所有",
    last_updated: "最后更新",
    may: "五月",

    // Configurações avançadas
    default_search_engine: "默认搜索引擎",
    advanced_ai_search: "高级人工智能搜索",
    search_engines_available: "可用的搜索引擎",
    selected_search_engine: "选定的搜索引擎",
    filter_search_engines: "筛选搜索引擎...",
    customize_appearance: "自定义您的搜索体验的外观:",
    use_theme_selector: "使用标题中的主题选择器来切换主题",

    // Página Sobre
    our_mission: "我们的使命",
    mission_description:
      "iSearch的创建使命很简单：让互联网搜索更高效、更个性化、更易于所有人使用。我们相信信息应该触手可及，我们的目标是提供一个平台，以快速直观的方式将人们与知识连接起来。",
    who_we_are: "我们是谁",
    team_description:
      "我们是一群热爱技术的爱好者、开发人员和设计师，热衷于创造卓越的数字体验。iSearch诞生于我们对传统搜索引擎局限性的挫折，以及提供以用户为中心的替代方案的愿望。",
    our_approach: "我们的方法",
    approach_description:
      "与其他搜索引擎不同，iSearch不受单一算法或数据源的限制。我们的平台集成了多个搜索引擎，让您可以选择最能满足您需求的来源。我们相信这种方法提供了更全面、更公正的结果。",
    privacy_transparency: "隐私和透明度",
    privacy_description:
      "我们深深尊重您的隐私。我们不会跟踪您的搜索历史来向广告商出售数据，也不会创建用户的详细资料。我们相信您应该完全控制您的个人信息，并能够在不损害隐私的情况下浏览网络。",
    privacy_more_info: "要了解更多关于我们如何处理您的数据，请参阅我们的",
    exclusive_features: "独家功能",
    features_intro: "iSearch提供了一系列旨在增强您的搜索体验的独家功能：",
    feature_multiple_engines: "与多个搜索引擎集成",
    feature_clean_interface: "清晰直观的界面",
    feature_voice_image: "支持语音和图像搜索",
    feature_themes: "可定制的主题",
    feature_tabs: "集成标签系统",
    feature_quick_access: "快速访问视频、新闻、地图和购物",
    our_commitment: "我们的承诺",
    commitment_description:
      "我们致力于根据用户反馈不断改进iSearch。我们相信，创造卓越产品的最佳方式是认真倾听每天使用它的人们的意见。",
    contact_us: "联系我们",
    feedback_intro: "我们重视您的反馈和建议。如果您有关于如何改进iSearch的想法，或者遇到任何问题，请随时联系我们：",

    // Páginas estáticas
    overview: "概述",
    overview_description: "iSearch是一个先进的搜索平台，允许您通过单一直观界面访问多个搜索引擎。",
    main_features: "主要功能",
    multiple_search_engines: "多个搜索引擎",
    multiple_engines_description: "iSearch与20多个不同的搜索引擎集成，包括Google、Bing、DuckDuckGo、Yahoo、Yandex等。",
    unified_interface: "统一界面",
    unified_interface_description: "我们干净直观的界面提供一致的体验，无论您选择哪个搜索引擎。",
    tab_system: "标签系统",
    tab_system_description: "iSearch允许您打开多个搜索标签，类似于网络浏览器。",

    // Página Termos
    terms_acceptance: "接受条款",
    welcome_terms:
      "欢迎使用iSearch。通过访问或使用我们的搜索服务，您同意受这些使用条款的约束。如果您不同意这些条款，请不要使用我们的服务。",
    service_description: "服务描述",
    service_description_text:
      "iSearch是一项搜索服务，允许用户通过各种搜索引擎在互联网上搜索信息。我们的服务包括文本、图像和语音搜索等功能，以及访问不同内容类别的功能。",
    service_use: "服务使用",
    legal_use: "您同意仅将服务用于合法目的，并按照这些条款使用。具体来说，您同意不：",
    illegal_use: "将服务用于这些条款禁止的任何非法目的",
    unauthorized_access: "尝试访问您未获授权的服务区域",
    service_interference: "干扰或中断服务的运行",
    security_bypass: "尝试绕过安全或认证措施",
    malware_distribution: "使用服务分发恶意软件、垃圾邮件或有害内容",
    user_info_collection: "未经同意收集其他用户的信息",
    user_accounts: "用户账户",
    account_responsibility:
      "服务的某些功能可能需要您创建账户。您负责维护账户凭证的机密性，以及在您账户下发生的所有活动。您同意立即通知我们任何未经授权使用您账户的情况。",
    intellectual_property: "知识产权",
    ip_ownership:
      "服务及其原创内容、功能和特性是并将继续是iSearch及其许可方的专有财产。该服务受版权、商标和其他知识产权法律的保护。",
    no_copy: "未经我们明确书面许可，您不得复制、修改、分发、出售或出租服务的任何部分。",
    third_party_content: "第三方内容",
    third_party_disclaimer:
      "服务可能包含非iSearch拥有或控制的第三方网站、广告、服务或资源的链接。我们对任何第三方网站或服务的内容、隐私政策或做法没有控制权，也不承担责任。",
    warranty_disclaimer: "免责声明",
    as_is_service:
      '服务按"原样"和"可用"提供，不提供任何明示或暗示的保证。我们不保证服务将满足您的要求，不间断、及时、安全或无错误。',
    liability_limitation: "责任限制",
    no_liability:
      "在任何情况下，iSearch及其董事、员工、合作伙伴、代理商、供应商或附属机构均不对任何间接、偶然、特殊、后果性或惩罚性损害负责，包括但不限于利润、数据、使用、商誉或其他无形损失，这些损失源于：",
    access_inability: "您访问或使用或无法访问或使用服务",
    third_party_conduct: "服务上第三方的任何行为或内容",
    content_obtained: "通过服务获得的内容",
    unauthorized_access_use: "未经授权访问、使用或更改您的传输或内容",
    terms_changes: "条款变更",
    modify_terms:
      "我们保留随时修改或替换这些条款的权利。如果修订是重大的，我们将尝试在任何新条款生效前至少提前30天通知。什么构成重大变更将由我们自行决定。",
    applicable_law: "适用法律",
    governing_law: "这些条款将受巴西法律管辖并按其解释，不考虑其冲突法规定。",
    terms_questions: "如果您对这些条款有任何疑问，请通过以下方式联系我们：",

    // Página Privacidade
    introduction: "介绍",
    privacy_welcome:
      "欢迎阅读iSearch的隐私政策。本政策描述了当您使用我们的搜索服务时，我们如何收集、使用、处理和共享您的信息。",
    privacy_value: "我们重视您的隐私，并致力于保护您的个人信息。请仔细阅读本政策，了解我们关于您数据的做法。",
    information_collect: "我们收集的信息",
    information_provide: "您提供给我们的信息",
    information_provide_description:
      "当您使用iSearch时，我们可能会收集您直接提供的信息，如搜索词、配置偏好，以及如果您选择创建账户，则包括账户信息。",
    information_automatic: "自动收集的信息",
    information_automatic_description: "当您使用我们的服务时，我们会自动收集某些信息，包括：",
    usage_info: "使用信息，如搜索词、访问的页面和在服务上花费的时间",
    device_info: "设备信息，如浏览器类型、操作系统和语言设置",
    location_info: "基于您IP地址的大致位置信息",
    cookies_info: "Cookie和类似技术，以改善您的体验",
    how_use_information: "我们如何使用您的信息",
    use_information_intro: "我们使用收集的信息来",
    provide_service: "提供、维护和改进我们的搜索服务",
    personalize_experience: "根据您的偏好个性化您的体验",
    develop_features: "开发新功能和功能",
    protect_security: "保护服务的安全和完整性",
    legal_obligations: "履行法律义务",
    information_sharing: "信息共享",
    not_sell_info: "我们不出售您的个人信息。我们可能在以下情况下共享您的信息：",
    service_providers: "与帮助我们运营服务的第三方服务提供商",
    legal_requirements: "为履行法律义务，如回应传票或法院命令",
    protect_rights: "为保护我们的权利、财产或安全，或我们用户的权利、财产或安全",
    business_transfers: "与合并、收购或资产出售相关，并提前通知",
    your_choices: "您的选择和权利",
    rights_intro: "您对您的信息有某些权利和选择",
    access_correct: "访问、更正或删除您的个人信息",
    opt_out: "选择不接收营销通信",
    disable_cookies: "通过浏览器设置禁用cookie",
    data_portability: "请求您数据的可携带性",
    exercise_rights: "要行使这些权利，请使用下面提供的信息联系我们。",
    data_security: "数据安全",
    security_measures:
      "我们实施技术和组织安全措施，以保护您的信息免受未经授权的访问、丢失或更改。然而，没有系统是完全安全的，我们不能保证您信息的绝对安全。",
    data_retention: "数据保留",
    retention_policy:
      "我们保留您的信息的时间仅限于提供服务和履行我们的法律义务所需的时间。当我们不再需要您的信息时，我们将删除或匿名化它。",
    children: "儿童",
    children_policy:
      "我们的服务不面向13岁以下的儿童，我们不会故意收集儿童的个人信息。如果我们发现我们收集了儿童的信息，我们将采取措施删除它。",
    policy_changes: "本政策的变更",
    update_policy:
      "我们可能会定期更新本政策，以反映我们做法的变化或出于其他运营、法律或监管原因。我们将通过我们的网站或其他方式通知您任何重大变更。",
    contact: "联系",
    questions_concerns: "如果您对本政策或您的信息有疑问、担忧或请求，请通过以下方式联系我们：",
  },

  "ru-RU": {
    // Geral
    search: "Поиск",
    search_in: "Искать в {engine} или ввести URL",
    search_with_style: "Ищите со стилем",
    feeling_lucky: "Мне повезёт",
    back: "Назад",
    forward: "Вперёд",
    reload: "Обновить",
    home: "Главная",
    settings: "Настройки",
    search_engine: "Поисковая система",
    appearance: "Внешний вид",
    dark_theme: "Тёмная тема",
    animations: "Анимации",
    glass_effects: "Эффекты стекла",
    choose_search_engine: "Выберите предпочитаемую поисковую систему",
    restore_default: "Восстановить по умолчанию",
    save: "Сохранить",
    select_language: "Выбрать язык",

    // Categorias
    videos: "Видео",
    shopping: "Покупки",
    news: "Новости",
    maps: "Карты",

    // Menus
    choose_platform: "Выберите платформу для {category}",

    // Rodapé
    about: "О нас",
    how_it_works: "Как это работает",
    privacy: "Конфиденциальность",
    terms: "Условия",
    all_rights_reserved: "Все права защищены",
    last_updated: "Последнее обновление",
    may: "мая",

    // Configurações avançadas
    default_search_engine: "Поисковая система по умолчанию",
    advanced_ai_search: "Расширенный поиск с использованием ИИ",
    search_engines_available: "доступные поисковые системы",
    selected_search_engine: "Выбранная поисковая система",
    filter_search_engines: "Фильтр поисковых систем...",
    customize_appearance: "Настройте внешний вид своей поисковой системы:",
    use_theme_selector: "Используйте переключатель тем в заголовке для переключения между темами",

    // Páginas estáticas
    overview: "Обзор",
    overview_description:
      "iSearch - это продвинутая поисковая платформа, которая позволяет получить доступ к нескольким поисковым системам через единый интуитивный интерфейс.",
    main_features: "Основные функции",
    multiple_search_engines: "Несколько поисковых систем",
    multiple_engines_description:
      "iSearch интегрируется с более чем 20 различными поисковыми системами, включая Google, Bing, DuckDuckGo, Yahoo, Yandex и многие другие.",
    unified_interface: "Единый интерфейс",
    unified_interface_description:
      "Наш чистый и интуитивный интерфейс обеспечивает последовательный опыт, независимо от того, какую поисковую систему вы выберете.",
    tab_system: "Система вкладок",
    tab_system_description: "iSearch позволяет открывать несколько вкладок поиска, аналогично веб-браузеру.",

    // Página Sobre
    our_mission: "Наша миссия",
    mission_description:
      "iSearch был создан с простой миссией: сделать поиск в интернете более эффективным, персонализированным и доступным для всех. Мы верим, что информация должна быть доступна каждому, и наша цель - предоставить платформу, которая быстро и интуитивно соединяет людей со знаниями.",
    who_we_are: "Кто мы",
    team_description:
      "Мы команда энтузиастов технологий, разработчиков и дизайнеров, увлеченных созданием исключительного цифрового опыта. iSearch родился из нашего разочарования в ограничениях традиционных поисковых систем и желания предложить альтернативу, которая ставит пользователя на первое место.",
    our_approach: "Наш подход",
    approach_description:
      "В отличие от других поисковых систем, iSearch не привязан к одному алгоритму или источнику данных. Наша платформа интегрирует несколько поисковых систем, позволяя вам выбрать источник, который лучше всего соответствует вашим потребностям. Мы считаем, что такой подход обеспечивает более полные и непредвзятые результаты.",
    privacy_transparency: "Конфиденциальность и прозрачность",
    privacy_description:
      "Мы глубоко уважаем вашу конфиденциальность. Мы не отслеживаем вашу историю поиска для продажи данных рекламодателям и не создаем подробные профили наших пользователей. Мы считаем, что вы должны иметь полный контроль над своей личной информацией и иметь возможность просматривать веб без ущерба для вашей конфиденциальности.",
    privacy_more_info: "Чтобы узнать больше о том, как мы обрабатываем ваши данные, см. нашу",
    exclusive_features: "Эксклюзивные функции",
    features_intro: "iSearch предлагает ряд эксклюзивных функций, разработанных для улучшения вашего поискового опыта:",
    feature_multiple_engines: "Интеграция с несколькими поисковыми системами",
    feature_clean_interface: "Чистый и интуитивно понятный интерфейс",
    feature_voice_image: "Поддержка голосового и изображения поиска",
    feature_themes: "Настраиваемые темы",
    feature_tabs: "Интегрированная система вкладок",
    feature_quick_access: "Быстрый доступ к видео, новостям, картам и покупкам",
    our_commitment: "Наше обязательство",
    commitment_description:
      "Мы стремимся постоянно улучшать iSearch на основе отзывов пользователей. Мы считаем, что лучший способ создать исключительный продукт - это внимательно слушать людей, которые используют его каждый день.",
    contact_us: "Свяжитесь с нами",
    feedback_intro:
      "Мы ценим ваши отзывы и предложения. Если у вас есть идеи о том, как мы можем улучшить iSearch, или если вы столкнулись с какими-либо проблемами, не стесняйтесь связаться с нами:",

    // Página Termos
    terms_acceptance: "Принятие условий",
    welcome_terms:
      "Добро пожаловать в iSearch. Получая доступ или используя нашу поисковую службу, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте нашу службу.",
    service_description: "Описание службы",
    service_description_text:
      "iSearch - это поисковая служба, которая позволяет пользователям искать информацию в интернете через различные поисковые системы. Наша служба включает такие функции, как текстовый, изображение и голосовой поиск, а также доступ к различным категориям контента.",
    service_use: "Использование службы",
    legal_use:
      "Вы соглашаетесь использовать службу только в законных целях и в соответствии с настоящими Условиями. В частности, вы соглашаетесь не:",
    illegal_use: "Использовать службу для любых незаконных целей или запрещенных настоящими Условиями",
    unauthorized_access: "Пытаться получить доступ к областям службы, к которым вы не авторизованы",
    service_interference: "Вмешиваться или нарушать работу службы",
    security_bypass: "Пытаться обойти меры безопасности или аутентификации",
    malware_distribution:
      "Использовать службу для распространения вредоносных программ, спама или вредоносного контента",
    user_info_collection: "Собирать информацию о других пользователях без их согласия",
    user_accounts: "Учетные записи пользователей",
    account_responsibility:
      "Некоторые функции службы могут потребовать от вас создания учетной записи. Вы несете ответственность за сохранение конфиденциальности учетных данных вашей учетной записи и за все действия, которые происходят под вашей учетной записью. Вы соглашаетесь немедленно уведомить нас о любом несанкционированном использовании вашей учетной записи.",
    intellectual_property: "Интеллектуальная собственность",
    ip_ownership:
      "Служба и ее оригинальный контент, функции и функциональность являются и останутся исключительной собственностью iSearch и его лицензиаров. Служба защищена авторским правом, товарным знаком и другими законами об интеллектуальной собственности.",
    no_copy:
      "Вы не можете копировать, изменять, распространять, продавать или сдавать в аренду любую часть службы без нашего явного письменного разрешения.",
    third_party_content: "Контент третьих лиц",
    third_party_disclaimer:
      "Служба может содержать ссылки на веб-сайты, рекламу, услуги или ресурсы третьих лиц, которые не принадлежат или не контролируются iSearch. Мы не контролируем и не несем ответственности за контент, политику конфиденциальности или практику любых веб-сайтов или служб третьих лиц.",
    warranty_disclaimer: "Отказ от гарантий",
    as_is_service:
      'Служба предоставляется "как есть" и "как доступно", без каких-либо гарантий любого рода, явных или подразумеваемых. Мы не гарантируем, что служба будет соответствовать вашим требованиям, будет непрерывной, своевременной, безопасной или безошибочной.',
    liability_limitation: "Ограничение ответственности",
    no_liability:
      "Ни при каких обстоятельствах iSearch, его директора, сотрудников, партнеров, агентов, поставщики или аффилированные лица не несут ответственности за любые косвенные, случайные, специальные, последующие или штрафные убытки, включая, без ограничений, потерю прибыли, данных, использования, репутации или других нематериальных потерь, возникающих из:",
    access_inability: "Вашего доступа или использования или невозможности доступа или использования службы",
    third_party_conduct: "Любого поведения или контента третьих лиц в службе",
    content_obtained: "Контента, полученного через службу",
    unauthorized_access_use: "Несанкционированного доступа, использования или изменения ваших передач или контента",
    terms_changes: "Изменения условий",
    modify_terms:
      "Мы оставляем за собой право изменять или заменять эти Условия в любое время. Если пересмотр является существенным, мы постараемся предоставить уведомление не менее чем за 30 дней до вступления в силу любых новых условий. Что составляет существенное изменение, будет определяться по нашему усмотрению.",
    applicable_law: "Применимое право",
    governing_law:
      "Настоящие Условия регулируются и толкуются в соответствии с законами Бразилии, без учета ее положений о коллизии правовых норм.",
    terms_questions: "Если у вас есть какие-либо вопросы об этих Условиях, пожалуйста, свяжитесь с нами по адресу:",

    // Página Privacidade
    introduction: "Введение",
    privacy_welcome:
      "Добро пожаловать в Политику конфиденциальности iSearch. Эта политика описывает, как мы собираем, используем, обрабатываем и делимся вашей информацией, когда вы используете нашу поисковую службу.",
    privacy_value:
      "Мы ценим вашу конфиденциальность и стремимся защищать вашу личную информацию. Пожалуйста, внимательно прочитайте эту политику, чтобы понять наши практики в отношении ваших данных.",
    information_collect: "Собираемая информация",
    information_provide: "Информация, которую вы предоставляете нам",
    information_provide_description:
      "Когда вы используете iSearch, мы можем собирать информацию, которую вы предоставляете нам напрямую, такую как поисковые запросы, настройки предпочтений и информацию об аккаунте, если вы решите создать его.",
    information_automatic: "Автоматически собираемая информация",
    information_automatic_description:
      "Когда вы используете нашу службу, мы автоматически собираем определенную информацию, включая:",
    usage_info:
      "Информация об использовании, такая как поисковые запросы, посещенные страницы и время, проведенное в службе",
    device_info: "Информация об устройстве, такая как тип браузера, операционная система и настройки языка",
    location_info: "Приблизительная информация о местоположении на основе вашего IP-адреса",
    cookies_info: "Cookies и аналогичные технологии для улучшения вашего опыта",
    how_use_information: "Как мы используем вашу информацию",
    use_information_intro: "Мы используем собранную информацию для",
    provide_service: "Предоставления, поддержания и улучшения нашей поисковой службы",
    personalize_experience: "Персонализации вашего опыта на основе ваших предпочтений",
    develop_features: "Разработки новых функций и возможностей",
    protect_security: "Защиты безопасности и целостности службы",
    legal_obligations: "Соответствия законным обязательствам",
    information_sharing: "Обмен информацией",
    not_sell_info: "Мы не продаем вашу личную информацию. Мы можем делиться вашей информацией в следующих случаях:",
    service_providers: "С третьими лицами, которые помогают нам оперировать службой",
    legal_requirements: "Для выполнения законных обязательств, таких как ответ на уведомления или судебные приказы",
    protect_rights:
      "Для защиты наших прав, собственности или безопасности, а также прав, собственности или безопасности наших пользователей",
    business_transfers: "В связи с слиянием, приобретением или продажей активов, с предварительным уведомлением",
    your_choices: "Ваши выборы и права",
    rights_intro: "У вас есть определенные права и выборы в отношении вашей информации",
    access_correct: "Доступ к, корректировке или удалению вашей личной информации",
    opt_out: "Выбор отказа от получения маркетинговых коммуникаций",
    disable_cookies: "Отключение cookies через настройки вашего браузера",
    data_portability: "Запрос переносимости ваших данных",
    exercise_rights: "Чтобы упражнить эти права, свяжитесь с нами по указанным ниже контактным данным.",
    data_security: "Безопасность данных",
    security_measures:
      "Мы внедряем технические и организационные меры безопасности для защиты вашей информации от несанкционированного доступа, потери или изменения. Однако ни одна система не является полностью безопасной, и мы не можем гарантировать абсолютную безопасность вашей информации.",
    data_retention: "Хранение данных",
    retention_policy:
      "Мы храним вашу информацию только столько времени, сколько необходимо для предоставления службы и выполнения наших юридических обязательств. Когда мы больше не нуждаемся в вашей информации, мы удаляем ее или анонимизируем.",
    children: "Дети",
    children_policy:
      "Наша служба не предназначена для детей младше 13 лет, и мы не намеренно собираем личную информацию детей. Если мы обнаружим, что собрали информацию о ребенке, мы предпримем меры для ее удаления.",
    policy_changes: "Изменения в этой политике",
    update_policy:
      "Мы можем периодически обновлять эту политику, чтобы отразить изменения в наших практиках или по другим операционным, юридическим или нормативным причинам. Мы уведомим вас о любых существенных изменениях через наш сайт или другими способами.",
    contact: "Контакт",
    questions_concerns:
      "Если у вас есть вопросы, опасения или запросы, связанные с этой политикой или вашей информацией, свяжитесь с нами по адресу:",
  },

  // Adicionar outras traduções conforme necessário...
}

// Hook para usar as traduções
export function useTranslation() {
  const [locale, setLocale] = useState<Locale>("en-US")
  const [country, setCountry] = useState<string | null>(null)
  const [translationsLoaded, setTranslationsLoaded] = useState(false)

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
        setTranslationsLoaded(true)
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
        setTranslationsLoaded(true)
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
      setTranslationsLoaded(true)
    } else {
      detectCountry()
    }
  }, [])

  // Função para traduzir uma string
  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      if (!translationsLoaded) {
        // Retornar a chave se as traduções ainda não foram carregadas
        return key
      }

      const translation = translations[locale]?.[key] || key

      if (params) {
        return Object.entries(params).reduce((str, [key, value]) => str.replace(`{${key}}`, value), translation)
      }

      return translation
    },
    [locale, translationsLoaded],
  )

  // Modificar a função changeLocale para garantir que todos os componentes sejam atualizados
  const changeLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale !== locale) {
        console.log(`Mudando idioma de ${locale} для ${newLocale}`)
        setLocale(newLocale)
        localStorage.setItem("locale", newLocale)

        // Disparar um evento personalizado para notificar a mudança de idioma
        if (typeof window !== "undefined") {
          const event = new CustomEvent("localeChanged", { detail: { locale: newLocale } })
          window.dispatchEvent(event)

          // Forçar atualização da página para aplicar as traduções em todos os componentes
          window.location.reload()
        }
      }
    },
    [locale],
  )

  return {
    t,
    locale,
    country,
    changeLocale,
    availableLocales: Object.keys(translations) as Locale[],
    translationsLoaded,
  }
}
