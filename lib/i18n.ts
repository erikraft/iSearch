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
  CA: "en-US", // Canadá (inglês por padrão)
  MX: "es-ES",
  AR: "es-ES",
  CL: "es-ES",
  CO: "es-ES",
  PE: "es-ES",

  // Europa
  GB: "en-US", // Reino Unido
  IE: "en-US", // Irlanda
  FR: "fr-FR",
  DE: "de-DE",
  ES: "es-ES",
  IT: "it-IT",
  PT: "pt-BR", // Portugal (usando pt-BR por simplicidade)
  RU: "ru-RU",

  // Ásia
  JP: "ja-JP",
  CN: "zh-CN",
  HK: "zh-CN", // Hong Kong
  TW: "zh-CN", // Taiwan

  // Padrão
  DEFAULT: "en-US",
}

// Função para obter o idioma com base no código do país
export function getLocaleFromCountry(countryCode: string): Locale {
  return countryToLocale[countryCode] || countryToLocale.DEFAULT
}

// Traduções
export const translations: Record<Locale, Record<string, string>> = {
  "pt-BR": {
    // Geral
    search: "Pesquisar",
    search_in: "Pesquisar no {engine} ou digitar URL",
    search_with_style: "Pesquise com estilo",
    feeling_lucky: "Estou com Sorte",

    // Categorias
    videos: "Vídeos",
    shopping: "Shopping",
    news: "Notícias",
    maps: "Mapas",

    // Navegação
    back: "Voltar",
    forward: "Avançar",
    reload: "Recarregar",
    home: "Página inicial",

    // Menus
    choose_platform: "Escolha uma plataforma para {category}",
    choose_search_engine: "Escolha seu mecanismo de pesquisa preferido",
    restore_default: "Restaurar padrão",
    save: "Salvar",

    // Rodapé
    about: "Sobre",
    how_it_works: "Como funciona",
    privacy: "Privacidade",
    terms: "Termos",

    // Configurações
    settings: "Configurações",
    search_engine: "Mecanismo de Pesquisa",
    appearance: "Aparência",
    dark_theme: "Tema escuro",
    animations: "Animações",
    glass_effects: "Efeitos de vidro",

    // Adicionado
    select_language: "Selecionar idioma",

    // Geral
    back: "Voltar para a página inicial",
    all_rights_reserved: "Todos os direitos reservados",
    last_updated: "Última atualização",
    may: "de maio de",

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

    // Página Como Funciona
    overview: "Visão Geral",
    overview_description:
      "O iSearch é uma plataforma de busca avançada que permite acessar múltiplos mecanismos de pesquisa através de uma única interface intuitiva. Diferente de outros buscadores, o iSearch não possui um índice próprio, mas funciona como um agregador inteligente que direciona suas consultas para os melhores mecanismos de busca disponíveis.",
    main_features: "Principais Recursos",
    multiple_search_engines: "Múltiplos Mecanismos de Busca",
    multiple_engines_description:
      "O iSearch integra-se com mais de 20 mecanismos de busca diferentes, incluindo Google, Bing, DuckDuckGo, Yahoo, Yandex e muitos outros. Você pode escolher seu mecanismo preferido ou alternar entre eles conforme necessário.",
    unified_interface: "Interface Unificada",
    unified_interface_description:
      "Nossa interface limpa e intuitiva oferece uma experiência consistente, independentemente do mecanismo de busca que você escolher. Isso significa que você não precisa se adaptar a diferentes layouts ou aprender novos comandos ao mudar de um mecanismo para outro.",
    tab_system: "Sistema de Guias",
    tab_system_description:
      "O iSearch permite que você abra múltiplas guias de pesquisa, semelhante a um navegador web. Isso facilita a comparação de resultados de diferentes mecanismos ou a realização de várias pesquisas simultaneamente sem perder o contexto.",
    advanced_search: "Pesquisa Avançada",
    advanced_search_intro: "Além da pesquisa por texto, o iSearch suporta:",
    voice_search: "Pesquisa por Voz",
    voice_search_description: "Basta clicar no ícone do microfone e falar sua consulta",
    image_search: "Pesquisa por Imagem",
    image_search_description: "Faça upload de uma imagem para encontrar conteúdo relacionado",
    contextual_search: "Pesquisa Contextual",
    contextual_search_description: "Resultados adaptados com base em suas preferências (se você optar por isso)",
    specialized_categories: "Categorias Especializadas",
    categories_intro: "O iSearch oferece acesso rápido a categorias especializadas:",
    videos_description: "Pesquise em plataformas como YouTube, Instagram, TikTok e outras",
    shopping_description: "Encontre produtos em diversas lojas online",
    news_description: "Acesse as últimas notícias de fontes confiáveis",
    maps_description: "Navegue com Google Maps, Waze ou OpenStreetMap",
    how_to_use: "Como Usar o iSearch",
    basic_search: "Pesquisa Básica",
    basic_search_step1: "Digite sua consulta na barra de pesquisa central",
    basic_search_step2: "Pressione Enter ou clique no botão de pesquisa",
    basic_search_step3: "Os resultados serão exibidos no mecanismo de busca selecionado",
    switch_engines: "Alternar Mecanismos de Busca",
    switch_engines_step1: "Clique no ícone de configurações",
    switch_engines_step2: 'Selecione "Configurações"',
    switch_engines_step3: "Escolha seu mecanismo de busca preferido na lista",
    manage_tabs: "Gerenciar Guias",
    manage_tabs_step1: 'Clique no botão "+" na barra de guias para abrir uma nova guia',
    manage_tabs_step2: "Clique em uma guia para alternar entre elas",
    manage_tabs_step3: 'Clique no "x" em uma guia para fechá-la',
    privacy_statement:
      "O iSearch foi projetado com privacidade em mente. Não armazenamos seu histórico de pesquisa em nossos servidores, e todas as consultas são enviadas diretamente para o mecanismo de busca selecionado. Para mais informações, consulte nossa",
    feedback_support: "Feedback e Suporte",
    feedback_description:
      "Estamos sempre buscando melhorar o iSearch. Se você tiver sugestões, encontrar bugs ou precisar de ajuda, entre em contato conosco em erikraft43@gmail.com.",

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
  },

  "en-US": {
    // General
    search: "Search",
    search_in: "Search on {engine} or type URL",
    search_with_style: "Search with style",
    feeling_lucky: "I'm Feeling Lucky",

    // Categories
    videos: "Videos",
    shopping: "Shopping",
    news: "News",
    maps: "Maps",

    // Navigation
    back: "Back",
    forward: "Forward",
    reload: "Reload",
    home: "Home",

    // Menus
    choose_platform: "Choose a platform for {category}",
    choose_search_engine: "Choose your preferred search engine",
    restore_default: "Restore default",
    save: "Save",

    // Footer
    about: "About",
    how_it_works: "How it works",
    privacy: "Privacy",
    terms: "Terms",

    // Settings
    settings: "Settings",
    search_engine: "Search Engine",
    appearance: "Appearance",
    dark_theme: "Dark theme",
    animations: "Animations",
    glass_effects: "Glass effects",

    // Adicionado
    select_language: "Select language",

    // Geral
    back: "Back to home page",
    all_rights_reserved: "All rights reserved",
    last_updated: "Last updated",
    may: "May",

    // Página Sobre
    our_mission: "Our Mission",
    mission_description:
      "iSearch was created with a simple mission: to make internet search more efficient, personalized, and accessible to everyone. We believe that information should be within everyone's reach, and our goal is to provide a platform that connects people to knowledge quickly and intuitively.",
    who_we_are: "Who We Are",
    team_description:
      "We are a team of technology enthusiasts, developers, and designers passionate about creating exceptional digital experiences. iSearch was born from our frustration with the limitations of traditional search engines and the desire to offer an alternative that puts the user first.",
    our_approach: "Our Approach",
    approach_description:
      "Unlike other search engines, iSearch is not tied to a single algorithm or data source. Our platform integrates multiple search engines, allowing you to choose the source that best meets your needs. We believe this approach offers more comprehensive and unbiased results.",
    privacy_transparency: "Privacy and Transparency",
    privacy_description:
      "We deeply respect your privacy. We don't track your search history to sell data to advertisers, nor do we create detailed profiles of our users. We believe you should have complete control over your personal information and be able to browse the web without compromising your privacy.",
    privacy_more_info: "To learn more about how we handle your data, see our",
    exclusive_features: "Exclusive Features",
    features_intro: "iSearch offers a series of exclusive features designed to enhance your search experience:",
    feature_multiple_engines: "Integration with multiple search engines",
    feature_clean_interface: "Clean and intuitive interface",
    feature_voice_image: "Support for voice and image search",
    feature_themes: "Customizable themes",
    feature_tabs: "Integrated tab system",
    feature_quick_access: "Quick access to videos, news, maps, and shopping",
    our_commitment: "Our Commitment",
    commitment_description:
      "We are committed to continuously improving iSearch based on user feedback. We believe that the best way to create an exceptional product is to listen carefully to the people who use it every day.",
    contact_us: "Contact Us",
    feedback_intro:
      "We value your feedback and suggestions. If you have ideas on how we can improve iSearch, or if you encounter any issues, don't hesitate to contact us:",

    // Página Como Funciona
    overview: "Overview",
    overview_description:
      "iSearch is an advanced search platform that allows you to access multiple search engines through a single intuitive interface. Unlike other search engines, iSearch doesn't have its own index but functions as an intelligent aggregator that directs your queries to the best available search engines.",
    main_features: "Main Features",
    multiple_search_engines: "Multiple Search Engines",
    multiple_engines_description:
      "iSearch integrates with more than 20 different search engines, including Google, Bing, DuckDuckGo, Yahoo, Yandex, and many others. You can choose your preferred engine or switch between them as needed.",
    unified_interface: "Unified Interface",
    unified_interface_description:
      "Our clean and intuitive interface offers a consistent experience, regardless of which search engine you choose. This means you don't need to adapt to different layouts or learn new commands when switching from one engine to another.",
    tab_system: "Tab System",
    tab_system_description:
      "iSearch allows you to open multiple search tabs, similar to a web browser. This makes it easy to compare results from different engines or perform multiple searches simultaneously without losing context.",
    advanced_search: "Advanced Search",
    advanced_search_intro: "In addition to text search, iSearch supports:",
    voice_search: "Voice Search",
    voice_search_description: "Just click on the microphone icon and speak your query",
    image_search: "Image Search",
    image_search_description: "Upload an image to find related content",
    contextual_search: "Contextual Search",
    contextual_search_description: "Results adapted based on your preferences (if you opt in)",
    specialized_categories: "Specialized Categories",
    categories_intro: "iSearch offers quick access to specialized categories:",
    videos_description: "Search on platforms like YouTube, Instagram, TikTok, and others",
    shopping_description: "Find products in various online stores",
    news_description: "Access the latest news from reliable sources",
    maps_description: "Navigate with Google Maps, Waze, or OpenStreetMap",
    how_to_use: "How to Use iSearch",
    basic_search: "Basic Search",
    basic_search_step1: "Type your query in the central search bar",
    basic_search_step2: "Press Enter or click the search button",
    basic_search_step3: "Results will be displayed in the selected search engine",
    switch_engines: "Switch Search Engines",
    switch_engines_step1: "Click on the settings icon",
    switch_engines_step2: 'Select "Settings"',
    switch_engines_step3: "Choose your preferred search engine from the list",
    manage_tabs: "Manage Tabs",
    manage_tabs_step1: 'Click the "+" button in the tab bar to open a new tab',
    manage_tabs_step2: "Click on a tab to switch between them",
    manage_tabs_step3: 'Click the "x" on a tab to close it',
    privacy_statement:
      "iSearch was designed with privacy in mind. We don't store your search history on our servers, and all queries are sent directly to the selected search engine. For more information, see our",
    feedback_support: "Feedback and Support",
    feedback_description:
      "We're always looking to improve iSearch. If you have suggestions, find bugs, or need help, contact us at erikraft43@gmail.com.",

    // Página Privacidade
    introduction: "Introduction",
    privacy_welcome:
      "Welcome to iSearch's Privacy Policy. This policy describes how we collect, use, process, and share your information when you use our search service.",
    privacy_value:
      "We value your privacy and are committed to protecting your personal information. Please read this policy carefully to understand our practices regarding your data.",
    information_collect: "Information We Collect",
    information_provide: "Information you provide to us",
    information_provide_description:
      "When you use iSearch, we may collect information that you provide directly, such as search terms, configuration preferences, and account information if you choose to create one.",
    information_automatic: "Information collected automatically",
    information_automatic_description:
      "We automatically collect certain information when you use our service, including:",
    usage_info: "Usage information, such as search terms, pages visited, and time spent on the service",
    device_info: "Device information, such as browser type, operating system, and language settings",
    location_info: "Approximate location information based on your IP address",
    cookies_info: "Cookies and similar technologies to improve your experience",
    how_use_information: "How We Use Your Information",
    use_information_intro: "We use the collected information to",
    provide_service: "Provide, maintain, and improve our search service",
    personalize_experience: "Personalize your experience based on your preferences",
    develop_features: "Develop new features and functionalities",
    protect_security: "Protect the security and integrity of the service",
    legal_obligations: "Comply with legal obligations",
    information_sharing: "Information Sharing",
    not_sell_info:
      "We do not sell your personal information. We may share your information in the following circumstances:",
    service_providers: "With third-party service providers that help us operate the service",
    legal_requirements: "To comply with legal obligations, such as responding to subpoenas or court orders",
    protect_rights: "To protect our rights, property, or safety, or that of our users",
    business_transfers: "In connection with a merger, acquisition, or sale of assets, with prior notice",
    your_choices: "Your Choices and Rights",
    rights_intro: "You have certain rights and choices regarding your information",
    access_correct: "Access, correct, or delete your personal information",
    opt_out: "Opt out of marketing communications",
    disable_cookies: "Disable cookies through your browser settings",
    data_portability: "Request portability of your data",
    exercise_rights: "To exercise these rights, contact us using the information provided below.",
    data_security: "Data Security",
    security_measures:
      "We implement technical and organizational security measures to protect your information against unauthorized access, loss, or alteration. However, no system is completely secure, and we cannot guarantee the absolute security of your information.",
    data_retention: "Data Retention",
    retention_policy:
      "We keep your information for as long as necessary to provide the service and comply with our legal obligations. When we no longer need your information, we will delete it or anonymize it.",
    children: "Children",
    children_policy:
      "Our service is not directed at children under 13 years of age, and we do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will take steps to delete it.",
    policy_changes: "Changes to This Policy",
    update_policy:
      "We may update this policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through our website or by other means.",
    contact: "Contact",
    questions_concerns:
      "If you have questions, concerns, or requests related to this policy or your information, contact us at:",

    // Página Termos
    terms_acceptance: "Acceptance of Terms",
    welcome_terms:
      "Welcome to iSearch. By accessing or using our search service, you agree to be bound by these Terms of Use. If you do not agree with these terms, please do not use our service.",
    service_description: "Service Description",
    service_description_text:
      "iSearch is a search service that allows users to search for information on the internet through various search engines. Our service includes features such as text, image, and voice search, as well as access to different content categories.",
    service_use: "Service Use",
    legal_use:
      "You agree to use the service only for legal purposes and in accordance with these Terms. Specifically, you agree not to:",
    illegal_use: "Use the service for any illegal purpose or prohibited by these Terms",
    unauthorized_access: "Attempt to access areas of the service to which you are not authorized",
    service_interference: "Interfere with or disrupt the operation of the service",
    security_bypass: "Attempt to circumvent security or authentication measures",
    malware_distribution: "Use the service to distribute malware, spam, or harmful content",
    user_info_collection: "Collect information from other users without their consent",
    user_accounts: "User Accounts",
    account_responsibility:
      "Some features of the service may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    intellectual_property: "Intellectual Property",
    ip_ownership:
      "The service and its original content, features, and functionalities are and will remain the exclusive property of iSearch and its licensors. The service is protected by copyright, trademark, and other intellectual property laws.",
    no_copy:
      "You may not copy, modify, distribute, sell, or rent any part of the service without our express written permission.",
    third_party_content: "Third-Party Content",
    third_party_disclaimer:
      "The service may contain links to third-party websites, advertisements, services, or resources that are not owned or controlled by iSearch. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
    warranty_disclaimer: "Disclaimer of Warranties",
    as_is_service:
      'The service is provided "as is" and "as available," without warranties of any kind, express or implied. We do not guarantee that the service will meet your requirements, be uninterrupted, timely, secure, or error-free.',
    liability_limitation: "Limitation of Liability",
    no_liability:
      "In no event shall iSearch, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
    access_inability: "Your access or use or inability to access or use the service",
    third_party_conduct: "Any conduct or content of third parties on the service",
    content_obtained: "Content obtained through the service",
    unauthorized_access_use: "Unauthorized access, use, or alteration of your transmissions or content",
    terms_changes: "Changes to Terms",
    modify_terms:
      "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.",
    applicable_law: "Applicable Law",
    governing_law:
      "These Terms shall be governed and construed in accordance with the laws of Brazil, without regard to its conflict of law provisions.",
    terms_questions: "If you have any questions about these Terms, please contact us at:",
  },

  "es-ES": {
    // General
    search: "Buscar",
    search_in: "Buscar en {engine} o escribir URL",
    search_with_style: "Busca con estilo",
    feeling_lucky: "Voy a tener suerte",

    // Categories
    videos: "Videos",
    shopping: "Compras",
    news: "Noticias",
    maps: "Mapas",

    // Navigation
    back: "Atrás",
    forward: "Adelante",
    reload: "Recargar",
    home: "Inicio",

    // Menus
    choose_platform: "Elige una plataforma para {category}",
    choose_search_engine: "Elige tu motor de búsqueda preferido",
    restore_default: "Restaurar predeterminado",
    save: "Guardar",

    // Footer
    about: "Acerca de",
    how_it_works: "Cómo funciona",
    privacy: "Privacidad",
    terms: "Términos",

    // Settings
    settings: "Configuración",
    search_engine: "Motor de búsqueda",
    appearance: "Apariencia",
    dark_theme: "Tema oscuro",
    animations: "Animaciones",
    glass_effects: "Efectos de cristal",

    // Adicionado
    select_language: "Seleccionar idioma",
  },

  "fr-FR": {
    // General
    search: "Rechercher",
    search_in: "Rechercher sur {engine} ou saisir une URL",
    search_with_style: "Recherchez avec style",
    feeling_lucky: "J'ai de la chance",

    // Categories
    videos: "Vidéos",
    shopping: "Shopping",
    news: "Actualités",
    maps: "Cartes",

    // Navigation
    back: "Retour",
    forward: "Avancer",
    reload: "Actualiser",
    home: "Accueil",

    // Menus
    choose_platform: "Choisissez une plateforme pour {category}",
    choose_search_engine: "Choisissez votre moteur de recherche préféré",
    restore_default: "Restaurer par défaut",
    save: "Enregistrer",

    // Footer
    about: "À propos",
    how_it_works: "Comment ça marche",
    privacy: "Confidentialité",
    terms: "Conditions",

    // Settings
    settings: "Paramètres",
    search_engine: "Moteur de recherche",
    appearance: "Apparence",
    dark_theme: "Thème sombre",
    animations: "Animations",
    glass_effects: "Effets de verre",

    // Adicionado
    select_language: "Sélectionner la langue",
  },

  "de-DE": {
    // General
    search: "Suchen",
    search_in: "Suche auf {engine} oder URL eingeben",
    search_with_style: "Suchen Sie mit Stil",
    feeling_lucky: "Auf gut Glück!",

    // Categories
    videos: "Videos",
    shopping: "Shopping",
    news: "Nachrichten",
    maps: "Karten",

    // Navigation
    back: "Zurück",
    forward: "Vorwärts",
    reload: "Neu laden",
    home: "Startseite",

    // Menus
    choose_platform: "Wählen Sie eine Plattform für {category}",
    choose_search_engine: "Wählen Sie Ihre bevorzugte Suchmaschine",
    restore_default: "Standard wiederherstellen",
    save: "Speichern",

    // Footer
    about: "Über uns",
    how_it_works: "Wie es funktioniert",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",

    // Settings
    settings: "Einstellungen",
    search_engine: "Suchmaschine",
    appearance: "Erscheinungsbild",
    dark_theme: "Dunkles Thema",
    animations: "Animationen",
    glass_effects: "Glaseffekte",

    // Adicionado
    select_language: "Sprache auswählen",
  },

  "it-IT": {
    // General
    search: "Cerca",
    search_in: "Cerca su {engine} o digita URL",
    search_with_style: "Cerca con stile",
    feeling_lucky: "Mi sento fortunato",

    // Categories
    videos: "Video",
    shopping: "Shopping",
    news: "Notizie",
    maps: "Mappe",

    // Navigation
    back: "Indietro",
    forward: "Avanti",
    reload: "Ricarica",
    home: "Home",

    // Menus
    choose_platform: "Scegli una piattaforma per {category}",
    choose_search_engine: "Scegli il tuo motore di ricerca preferito",
    restore_default: "Ripristina predefinito",
    save: "Salva",

    // Footer
    about: "Chi siamo",
    how_it_works: "Come funziona",
    privacy: "Privacy",
    terms: "Termini",

    // Settings
    settings: "Impostazioni",
    search_engine: "Motore di ricerca",
    appearance: "Aspetto",
    dark_theme: "Tema scuro",
    animations: "Animazioni",
    glass_effects: "Effetti vetro",

    // Adicionado
    select_language: "Seleziona lingua",
  },

  "ja-JP": {
    // General
    search: "検索",
    search_in: "{engine}で検索またはURLを入力",
    search_with_style: "スタイリッシュに検索",
    feeling_lucky: "I'm Feeling Lucky",

    // Categories
    videos: "動画",
    shopping: "ショッピング",
    news: "ニュース",
    maps: "地図",

    // Navigation
    back: "戻る",
    forward: "進む",
    reload: "更新",
    home: "ホーム",

    // Menus
    choose_platform: "{category}のプラットフォームを選択",
    choose_search_engine: "検索エンジンを選択",
    restore_default: "デフォルトに戻す",
    save: "保存",

    // Footer
    about: "概要",
    how_it_works: "仕組み",
    privacy: "プライバシー",
    terms: "利用規約",

    // Settings
    settings: "設定",
    search_engine: "検索エンジン",
    appearance: "外観",
    dark_theme: "ダークテーマ",
    animations: "アニメーション",
    glass_effects: "ガラス効果",

    // Adicionado
    select_language: "言語を選択",
  },

  "zh-CN": {
    // General
    search: "搜索",
    search_in: "在{engine}上搜索或输入网址",
    search_with_style: "时尚搜索",
    feeling_lucky: "手气不错",

    // Categories
    videos: "视频",
    shopping: "购物",
    news: "新闻",
    maps: "地图",

    // Navigation
    back: "后退",
    forward: "前进",
    reload: "刷新",
    home: "首页",

    // Menus
    choose_platform: "选择{category}平台",
    choose_search_engine: "选择您喜欢的搜索引擎",
    restore_default: "恢复默认",
    save: "保存",

    // Footer
    about: "关于",
    how_it_works: "工作原理",
    privacy: "隐私",
    terms: "条款",

    // Settings
    settings: "设置",
    search_engine: "搜索引擎",
    appearance: "外观",
    dark_theme: "深色主题",
    animations: "动画",
    glass_effects: "玻璃效果",

    // Adicionado
    select_language: "选择语言",
  },

  "ru-RU": {
    // General
    search: "Поиск",
    search_in: "Искать в {engine} или ввести URL",
    search_with_style: "Ищите со стилем",
    feeling_lucky: "Мне повезёт",

    // Categories
    videos: "Видео",
    shopping: "Покупки",
    news: "Новости",
    maps: "Карты",

    // Navigation
    back: "Назад",
    forward: "Вперёд",
    reload: "Обновить",
    home: "Главная",

    // Menus
    choose_platform: "Выберите платформу для {category}",
    choose_search_engine: "Выберите предпочитаемую поисковую систему",
    restore_default: "Восстановить по умолчанию",
    save: "Сохранить",

    // Footer
    about: "О нас",
    how_it_works: "Как это работает",
    privacy: "Конфиденциальность",
    terms: "Условия",

    // Settings
    settings: "Настройки",
    search_engine: "Поисковая система",
    appearance: "Внешний вид",
    dark_theme: "Тёмная тема",
    animations: "Анимации",
    glass_effects: "Эффекты стекла",

    // Adicionado
    select_language: "Выбрать язык",
  },
}

// Hook para usar as traduções
export function useTranslation() {
  const [locale, setLocale] = useState<Locale>("pt-BR")
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
        console.log(`Mudando idioma de ${locale} para ${newLocale}`)
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
