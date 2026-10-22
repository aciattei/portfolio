// =====================================================================
// TODO O TEXTO DO SITE FICA AQUI. Edite este arquivo para atualizar o conteúdo.
// Itens marcados com "EXEMPLO" são ilustrativos: substitua por dados reais
// antes de publicar (números de impacto e depoimentos).
// =====================================================================

export const contato = {
  whatsapp: '5561999941796', // formato internacional, só números
  email: 'aciattei@gmail.com',
  cidade: 'Brasília - DF',
  mensagemPadrao:
    'Olá! Vim pelo site e gostaria de conversar sobre a presença online do meu negócio.',
}

export const linkWhatsApp = (mensagem = contato.mensagemPadrao) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`

export const navegacao = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const hero = {
  selo: 'Soluções digitais para pequenos negócios em Brasília',
  titulo: 'Transformo sua presença online e impulsiono suas vendas.',
  subtitulo:
    'Crio sites e landing pages eficientes para empreendedores e pequenos negócios que querem ser encontrados, atrair mais clientes e vender mais — enquanto eu cuido de toda a parte técnica.',
  ctaPrincipal: 'Fale com um especialista',
  ctaSecundario: 'Conheça os serviços',
  pontos: ['Sem jargão técnico', 'Orçamento transparente', 'Suporte após a entrega'],
}

export const sobre = {
  titulo: 'Tecnologia simples, a serviço do seu crescimento',
  paragrafos: [
    'Muitos empreendedores sabem que precisam estar na internet, mas esbarram na mesma barreira: a parte técnica parece complicada, cara e demorada. Foi para resolver exatamente esse problema que comecei a trabalhar com soluções digitais.',
    'Com experiência em administração e na criação de sites e landing pages, uno visão de negócio e execução técnica. Isso significa que cada projeto começa entendendo o seu objetivo — atrair clientes, gerar contatos, vender mais — e só depois parte para a tecnologia.',
    'Meu compromisso é com resultados tangíveis: uma presença online profissional, que funciona e que você entende, com transparência em cada etapa.',
  ],
  missao:
    'Acredito no poder da presença online para o crescimento de negócios. Simplifico a tecnologia para o sucesso do cliente.',
  // EXEMPLO — substitua pelos seus números reais
  numeros: [
    { valor: '5+', rotulo: 'anos de experiência' },
    { valor: '30+', rotulo: 'clientes atendidos' },
    { valor: '100%', rotulo: 'projetos com suporte pós-entrega' },
  ],
  fotoDescricao: 'Foto profissional da fundadora em ambiente de trabalho, sorrindo, com notebook aberto',
}

export const servicos = {
  titulo: 'Serviços e soluções',
  subtitulo:
    'Do primeiro site à otimização contínua: soluções pensadas para quem quer resultado sem se preocupar com a complexidade técnica.',
  itens: [
    {
      icone: 'site',
      titulo: 'Criação de sites profissionais',
      descricao:
        'Um site rápido, responsivo e com a cara do seu negócio, para que seus clientes encontrem você e confiem na sua marca desde o primeiro clique.',
    },
    {
      icone: 'landing',
      titulo: 'Landing pages de conversão',
      descricao:
        'Páginas focadas em um único objetivo — gerar contatos, vender um produto ou divulgar uma oferta — com estrutura pensada para transformar visitantes em clientes.',
    },
    {
      icone: 'suporte',
      titulo: 'Hospedagem, gestão e suporte',
      descricao:
        'Cuido de domínio, hospedagem, atualizações e ajustes. Você foca no seu negócio, sem precisar entender nada de servidores ou códigos.',
    },
    {
      icone: 'assistencia',
      titulo: 'Assistência digital e administrativa',
      descricao:
        'Apoio nas rotinas digitais do negócio: organização de informações, cadastros em plataformas e soluções que economizam o seu tempo.',
    },
    {
      icone: 'personalizada',
      titulo: 'Soluções digitais personalizadas',
      descricao:
        'Ferramentas e integrações sob medida para a administração e a presença online da sua empresa, de acordo com a sua realidade e o seu orçamento.',
    },
    {
      icone: 'consultoria',
      titulo: 'Consultoria estratégica digital',
      descricao:
        'Diagnóstico da sua presença online atual e um plano claro de melhorias para aumentar visibilidade, gerar mais contatos e impulsionar vendas.',
    },
  ],
  cta: 'Solicite um orçamento',
}

export const diferenciais = {
  titulo: 'Por que trabalhar comigo',
  subtitulo: 'Um parceiro estratégico para o sucesso digital do seu negócio — do planejamento ao pós-entrega.',
  principal: {
    icone: 'resultado',
    titulo: 'Soluções eficientes, resultados tangíveis',
    descricao:
      'Entrego soluções digitais pensadas para gerar resultado concreto, e simplifico toda a complexidade técnica para você.',
  },
  itens: [
    {
      icone: 'simples',
      titulo: 'Zero complicação técnica',
      descricao: 'Você não precisa entender de tecnologia. Explico tudo em linguagem clara e cuido da execução.',
    },
    {
      icone: 'transparencia',
      titulo: 'Investimento transparente',
      descricao: 'Orçamento detalhado e sem surpresas, ajustado ao porte e à fase do seu negócio.',
    },
    {
      icone: 'mobile',
      titulo: 'Pronto para celular',
      descricao: 'Todos os projetos funcionam bem em qualquer tela — onde a maioria dos seus clientes está.',
    },
    {
      icone: 'local',
      titulo: 'Atendimento próximo, em Brasília',
      descricao: 'Conheço o mercado local e acompanho cada projeto de perto, com comunicação direta.',
    },
  ],
}

// EXEMPLO — depoimentos ilustrativos. Substitua por depoimentos reais de clientes
// (com autorização) e troque "exemplo: true" por "exemplo: false".
export const depoimentos = {
  titulo: 'O que dizem os clientes',
  subtitulo: 'A confiança de quem já transformou a presença online do próprio negócio.',
  itens: [
    {
      nome: 'Nome do Cliente',
      cargo: 'Proprietária — Loja de Moda',
      texto:
        'Eu não sabia nem por onde começar. Recebi um site bonito, rápido e que eu consigo entender. Em poucas semanas, começaram a chegar contatos pelo WhatsApp vindos do site.',
      resultado: 'Mais contatos pelo WhatsApp',
      exemplo: true,
    },
    {
      nome: 'Nome do Cliente',
      cargo: 'Fundador — Consultoria Contábil',
      texto:
        'Atendimento claro do início ao fim. O orçamento foi transparente e a landing page ficou focada exatamente no que eu precisava: gerar pedidos de proposta.',
      resultado: 'Landing page focada em conversão',
      exemplo: true,
    },
    {
      nome: 'Nome do Cliente',
      cargo: 'Sócia — Estúdio de Estética',
      texto:
        'O melhor foi não precisar me preocupar com nada técnico. Hospedagem, domínio e ajustes ficaram por conta dela. Hoje meu negócio passa muito mais credibilidade.',
      resultado: 'Mais credibilidade online',
      exemplo: true,
    },
  ],
}

export const ctaFinal = {
  titulo: 'Pronto para transformar sua presença online e impulsionar suas vendas?',
  texto:
    'Converse sem compromisso. Entendo o seu negócio, indico a solução mais adequada ao seu momento e apresento um orçamento transparente — sem jargão técnico e sem surpresas.',
  ctaPrincipal: 'Fale com um especialista',
  ctaWhatsApp: 'Chamar no WhatsApp',
}
