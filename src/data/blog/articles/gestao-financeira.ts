import type { Article } from "../types";

const AUTHOR = "equipe-precocerto";

export const GESTAO_ARTICLES: Article[] = [
  {
    id: "gest-001",
    slug: "o-que-fazer-com-o-lucro-da-empresa",
    title: "O que fazer com o lucro da sua empresa depois de pagar as contas?",
    excerpt:
      "Sobrou dinheiro no fim do mês. Antes de gastar, existe uma ordem de prioridades que protege o negócio e começa a construir patrimônio.",
    category: "gestao-financeira",
    authorId: AUTHOR,
    publishedAt: "2026-02-16",
    readingTime: 8,
    metaTitle: "O que fazer com o lucro da empresa depois de pagar as contas",
    metaDescription:
      "Ordem de prioridades para o lucro do negócio: reserva, reinvestimento, pró-labore, distribuição e organização financeira pessoal.",
    relatedArticles: [
      "como-separar-dinheiro-da-empresa-do-pessoal",
      "como-criar-reserva-financeira-para-o-negocio",
      "como-organizar-o-lucro-e-construir-patrimonio",
    ],
    featured: false,
    keywords: ["lucro", "reserva", "reinvestimento", "pró-labore", "distribuição"],
    faq: [
      {
        question: "Todo o lucro pode ser retirado?",
        answer:
          "Não é recomendável. Parte do lucro precisa ficar no negócio como reserva e para financiar o próprio crescimento, especialmente quando há estoque ou prazo de recebimento.",
      },
      {
        question: "Lucro no relatório significa dinheiro no banco?",
        answer:
          "Não necessariamente. Vendas parceladas, estoque comprado e contas a pagar fazem o lucro do relatório e o saldo do caixa andarem em ritmos diferentes.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Depois de acertar o preço e ver o dinheiro sobrar, aparece uma pergunta nova: para onde vai esse dinheiro? Sem uma resposta definida, o lucro tende a ser absorvido por decisões improvisadas.",
      },
      { type: "ad", variant: "responsive" },
      { type: "h2", text: "Antes de tudo: lucro não é saldo em conta" },
      {
        type: "paragraph",
        text: "Faturamento é o que entra. Lucro é o que sobra depois de custos e despesas. Caixa é o que está disponível hoje. Um negócio pode ter lucro no mês e caixa apertado porque vendeu parcelado e pagou o fornecedor à vista.",
      },
      {
        type: "internalLink",
        to: "/blog/meu-preco-realmente-da-lucro",
        label: "Como saber se o preço que estou cobrando realmente dá lucro",
        text: "Se ainda há dúvida sobre a origem do lucro:",
      },
      { type: "h2", text: "Uma ordem de prioridades que funciona" },
      {
        type: "list",
        ordered: true,
        items: [
          "Regularize o pró-labore: uma retirada fixa e previsível, tratada como despesa do negócio.",
          "Monte a reserva do negócio até cobrir de três a seis meses de custos fixos.",
          "Quite dívidas caras, começando pelas de maior custo efetivo.",
          "Reinvista no que aumenta margem ou capacidade, não no que só aumenta despesa fixa.",
          "Distribua o excedente e organize esse dinheiro na vida pessoal.",
        ],
      },
      { type: "h2", text: "Reinvestir com critério" },
      {
        type: "paragraph",
        text: "Todo reinvestimento deveria responder a uma pergunta: isso reduz custo, aumenta preço possível ou aumenta a quantidade que consigo entregar? Compra que não responde a nenhuma das três normalmente é despesa disfarçada.",
      },
      {
        type: "table",
        caption: "Exemplo de destino do lucro de R$ 4.000",
        head: ["Destino", "Valor", "Objetivo"],
        rows: [
          ["Reserva do negócio", "R$ 1.200", "Proteger contra meses fracos"],
          ["Reinvestimento", "R$ 1.000", "Equipamento que reduz tempo de produção"],
          ["Quitação de dívida", "R$ 800", "Reduzir custo financeiro"],
          ["Distribuição ao dono", "R$ 1.000", "Objetivos pessoais e patrimônio"],
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Defina percentuais e repita todo mês" },
      {
        type: "paragraph",
        text: "Decidir uma vez e repetir é mais eficaz que decidir a cada mês. Percentuais fixos — por exemplo 30% reserva, 25% reinvestimento, 45% distribuição — transformam a intenção em rotina.",
      },
      {
        type: "callout",
        title: "Sinal de alerta",
        text: "Se o lucro só aparece quando você atrasa um pagamento, o problema não é destino do lucro: é preço ou custo fixo.",
      },
      {
        type: "internalLink",
        to: "/blog/como-organizar-o-lucro-e-construir-patrimonio",
        label: "Como organizar o lucro do seu negócio e começar a construir patrimônio",
        text: "O passo seguinte, quando a reserva já existe:",
      },
    ],
    status: "published",
  },
  {
    id: "gest-002",
    slug: "como-separar-dinheiro-da-empresa-do-pessoal",
    title: "Como separar o dinheiro da empresa do dinheiro pessoal",
    excerpt:
      "Misturar as contas é o que faz muitos donos não saberem se o negócio dá lucro. A separação é simples e pode começar nesta semana.",
    category: "gestao-financeira",
    authorId: AUTHOR,
    publishedAt: "2026-02-19",
    readingTime: 6,
    metaTitle: "Como separar o dinheiro da empresa do dinheiro pessoal",
    metaDescription:
      "Passo a passo para separar contas, definir pró-labore e enxergar o resultado real do negócio sem misturar despesas pessoais.",
    relatedArticles: [
      "o-que-fazer-com-o-lucro-da-empresa",
      "como-organizar-financas-pequeno-negocio",
      "como-criar-reserva-financeira-para-o-negocio",
    ],
    keywords: ["pró-labore", "conta separada", "caixa", "despesa pessoal"],
    content: [
      {
        type: "paragraph",
        text: "Quando a mesma conta paga o fornecedor e o supermercado, nenhum relatório consegue dizer se o negócio é lucrativo. A separação não é burocracia: é a condição para tomar qualquer decisão financeira com dados.",
      },
      { type: "h2", text: "Passo 1: duas contas, sempre" },
      {
        type: "paragraph",
        text: "Uma conta recebe as vendas e paga os custos do negócio. A outra é sua. Nenhuma despesa pessoal sai da conta do negócio — nem “só esta vez”.",
      },
      { type: "h2", text: "Passo 2: defina um pró-labore fixo" },
      {
        type: "paragraph",
        text: "Escolha um valor mensal que o negócio consiga pagar e transfira sempre na mesma data. Retirada por necessidade transforma o caixa em conta pessoal.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Passo 3: trate o pró-labore como custo" },
      {
        type: "paragraph",
        text: "Ele entra nos custos fixos e, portanto, no cálculo do preço de venda. Sem isso, o preço não remunera o dono.",
      },
      {
        type: "internalLink",
        to: "/blog/como-calcular-preco-de-venda",
        label: "Como calcular o preço de venda corretamente",
        text: "É exatamente aqui que o pró-labore entra na conta:",
      },
      { type: "h2", text: "Passo 4: registre tudo em um só lugar" },
      {
        type: "list",
        items: [
          "Entradas do mês por forma de pagamento.",
          "Custos variáveis (mercadoria, material, taxas).",
          "Custos fixos (aluguel, energia, pró-labore, sistema).",
          "Retiradas e distribuições.",
        ],
      },
      {
        type: "callout",
        title: "Comece simples",
        text: "Uma planilha com quatro colunas resolve os primeiros meses. Sistema mais completo faz sentido quando o volume justificar.",
      },
    ],
    status: "published",
  },
  {
    id: "gest-003",
    slug: "como-criar-reserva-financeira-para-o-negocio",
    title: "Como criar uma reserva financeira para o seu negócio",
    excerpt:
      "A reserva é o que permite atravessar um mês fraco sem recorrer a crédito caro. Veja quanto guardar e como chegar lá.",
    category: "gestao-financeira",
    authorId: AUTHOR,
    publishedAt: "2026-02-23",
    readingTime: 6,
    metaTitle: "Como criar uma reserva financeira para o seu negócio",
    metaDescription:
      "Quanto guardar de reserva empresarial, onde manter esse dinheiro e como construir a reserva sem comprometer o caixa do mês.",
    relatedArticles: [
      "o-que-fazer-com-o-lucro-da-empresa",
      "como-separar-dinheiro-da-empresa-do-pessoal",
      "como-comecar-a-investir",
    ],
    keywords: ["reserva", "emergência", "caixa", "liquidez", "sazonalidade"],
    faq: [
      {
        question: "Quanto devo guardar de reserva?",
        answer:
          "Um ponto de partida comum é de três a seis meses de custos fixos. Negócios sazonais ou com receita irregular tendem a precisar da faixa maior.",
      },
      {
        question: "A reserva pode ficar investida?",
        answer:
          "A característica mais importante da reserva é estar disponível rapidamente e com baixa oscilação. Aplicações com liquidez diária costumam ser usadas com essa finalidade, mas cada opção tem riscos e condições próprias que precisam ser avaliadas.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Todo negócio tem um mês fraco. A diferença entre um susto e uma crise é ter dinheiro guardado para atravessá-lo sem pegar crédito emergencial.",
      },
      { type: "h2", text: "Descubra seu custo fixo mensal" },
      {
        type: "paragraph",
        text: "Some tudo que precisa ser pago mesmo em um mês sem vendas: aluguel, energia, internet, contador, sistemas, pró-labore e parcelas fixas.",
      },
      {
        type: "example",
        title: "Meta de reserva",
        lines: [
          "Custos fixos: R$ 3.200/mês",
          "Meta mínima (3 meses): R$ 9.600",
          "Meta confortável (6 meses): R$ 19.200",
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Construa em etapas" },
      {
        type: "list",
        ordered: true,
        items: [
          "Primeiro objetivo: um mês de custos fixos.",
          "Depois: três meses.",
          "Por último: a faixa confortável para o seu tipo de receita.",
        ],
      },
      {
        type: "paragraph",
        text: "Guardar um percentual fixo do lucro todos os meses funciona melhor do que esperar sobrar. Trate a reserva como uma conta a pagar.",
      },
      { type: "h2", text: "Regras de uso" },
      {
        type: "paragraph",
        text: "Reserva serve para queda de faturamento, quebra de equipamento e imprevisto. Não serve para oportunidade de compra, expansão ou reforma — isso é reinvestimento, e vem de outro lugar.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Sem reserva, o crédito manda",
        text: "Quem não tem reserva paga juros para resolver problemas pequenos, e o custo financeiro passa a consumir a margem conquistada no preço.",
      },
    ],
    status: "published",
  },
  {
    id: "gest-004",
    slug: "como-aumentar-o-lucro-sem-aumentar-vendas",
    title: "Como aumentar o lucro sem precisar aumentar as vendas",
    excerpt:
      "Existem caminhos mais rápidos que vender mais: corrigir preço, melhorar mix, reduzir taxa efetiva e cortar custo que não gera valor.",
    category: "gestao-financeira",
    authorId: AUTHOR,
    publishedAt: "2026-02-26",
    readingTime: 7,
    metaTitle: "Como aumentar o lucro sem aumentar as vendas",
    metaDescription:
      "Cinco alavancas para aumentar o lucro com o mesmo faturamento: preço, mix de produtos, taxas, custos fixos e desperdício.",
    relatedArticles: [
      "meu-preco-realmente-da-lucro",
      "como-calcular-ponto-de-equilibrio",
      "o-que-fazer-com-o-lucro-da-empresa",
    ],
    keywords: ["lucro", "mix", "custos", "eficiência", "taxas"],
    content: [
      {
        type: "paragraph",
        text: "Aumentar vendas custa tempo e dinheiro. Aumentar lucro com o mesmo faturamento costuma ser mais rápido — e depende de decisões internas.",
      },
      { type: "h2", text: "1. Corrija os preços defasados" },
      {
        type: "paragraph",
        text: "Um ajuste de 5% no preço, quando a margem é de 15%, aumenta o lucro em cerca de um terço. É a alavanca mais direta que existe.",
      },
      {
        type: "table",
        caption: "Efeito de +5% no preço (custo constante)",
        head: ["Cenário", "Preço", "Custo", "Lucro"],
        rows: [
          ["Atual", "R$ 100,00", "R$ 85,00", "R$ 15,00"],
          ["Com ajuste", "R$ 105,00", "R$ 85,00", "R$ 20,00"],
        ],
      },
      { type: "h2", text: "2. Mude o mix" },
      {
        type: "paragraph",
        text: "Dar destaque aos itens de melhor margem muda o resultado sem mudar o volume. Vitrine, cardápio e ordem da oferta são decisões financeiras.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "3. Reduza a taxa efetiva de recebimento" },
      {
        type: "paragraph",
        text: "Negociar a taxa da adquirente, reduzir antecipações e incentivar formas de pagamento mais baratas devolve pontos percentuais direto à margem.",
      },
      { type: "h2", text: "4. Revise custos fixos item por item" },
      {
        type: "list",
        items: [
          "Assinaturas e sistemas que não são usados.",
          "Contratos antigos com preço acima do mercado atual.",
          "Consumo de energia e desperdício de material.",
        ],
      },
      { type: "h2", text: "5. Ataque o retrabalho" },
      {
        type: "paragraph",
        text: "Troca, refação e perda consomem margem sem aparecer em nenhuma linha de despesa. Medir a taxa de retrabalho costuma revelar o custo escondido mais alto do negócio.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "gest-005",
    slug: "como-organizar-financas-pequeno-negocio",
    title: "Como organizar as finanças de um pequeno negócio",
    excerpt:
      "Uma rotina financeira simples, com quatro registros e uma revisão mensal, já resolve a maior parte dos problemas de controle.",
    category: "gestao-financeira",
    authorId: AUTHOR,
    publishedAt: "2026-03-02",
    readingTime: 7,
    metaTitle: "Como organizar as finanças de um pequeno negócio",
    metaDescription:
      "Rotina financeira prática para pequenos negócios: registro de entradas e saídas, fluxo de caixa, custos fixos e revisão mensal de resultado.",
    relatedArticles: [
      "como-separar-dinheiro-da-empresa-do-pessoal",
      "como-criar-reserva-financeira-para-o-negocio",
      "como-organizar-o-lucro-e-construir-patrimonio",
    ],
    keywords: ["fluxo de caixa", "controle", "planilha", "rotina", "organização"],
    content: [
      {
        type: "paragraph",
        text: "Organização financeira não exige sistema caro nem conhecimento contábil. Exige constância em quatro registros e uma revisão por mês.",
      },
      { type: "h2", text: "Registro 1: entradas" },
      {
        type: "paragraph",
        text: "Anote o valor vendido e a forma de pagamento. É o que permite calcular sua taxa efetiva e o prazo médio de recebimento.",
      },
      { type: "h2", text: "Registro 2: custos variáveis" },
      {
        type: "paragraph",
        text: "Mercadoria, material, embalagem, comissão e taxas. Variam conforme o volume vendido.",
      },
      { type: "h2", text: "Registro 3: custos fixos" },
      {
        type: "paragraph",
        text: "Aluguel, energia, internet, contador, sistemas, pró-labore. É a base do rateio no preço e do ponto de equilíbrio.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Registro 4: retiradas" },
      {
        type: "paragraph",
        text: "Pró-labore e distribuição de lucro, separados um do outro. Confundir os dois é o que impede saber o resultado real.",
      },
      { type: "h2", text: "A revisão mensal" },
      {
        type: "list",
        ordered: true,
        items: [
          "Some entradas e subtraia custos variáveis: você tem a margem de contribuição.",
          "Subtraia os custos fixos: você tem o resultado do mês.",
          "Compare com o mês anterior e com o ponto de equilíbrio.",
          "Decida o destino do que sobrou antes de gastar.",
        ],
      },
      {
        type: "internalLink",
        to: "/blog/como-calcular-ponto-de-equilibrio",
        label: "Como calcular o ponto de equilíbrio de um negócio",
        text: "O número que dá sentido à revisão mensal:",
      },
      {
        type: "callout",
        title: "Fluxo de caixa e resultado são diferentes",
        text: "O fluxo mostra quando o dinheiro entra e sai. O resultado mostra se o negócio deu lucro. Você precisa dos dois.",
      },
    ],
    status: "published",
  },
];
