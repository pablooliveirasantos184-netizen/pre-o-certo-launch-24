import type { Article } from "../types";

const AUTHOR = "equipe-precocerto";

export const PRECIFICACAO_ARTICLES: Article[] = [
  {
    id: "prec-001",
    slug: "como-calcular-preco-de-venda",
    title: "Como calcular o preço de venda corretamente",
    excerpt:
      "O preço de venda não é o custo mais uma porcentagem qualquer. Veja o passo a passo para chegar a um preço que cobre custos, taxas e ainda deixa lucro.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-12",
    readingTime: 9,
    metaTitle: "Como calcular o preço de venda corretamente (passo a passo)",
    metaDescription:
      "Aprenda a calcular o preço de venda considerando custo, custo fixo, taxas de cartão, impostos e margem de lucro. Com exemplos em reais.",
    relatedArticles: [
      "margem-de-lucro-x-markup",
      "como-calcular-preco-de-venda-com-taxa-de-cartao",
      "meu-preco-realmente-da-lucro",
    ],
    featured: true,
    keywords: ["preço de venda", "cálculo", "custo", "margem", "markup", "cartão"],
    faq: [
      {
        question: "Como saber se meu preço de venda está correto?",
        answer:
          "Um preço está correto quando cobre o custo do item, a parcela dos custos fixos, todas as taxas percentuais que incidem sobre a venda e ainda deixa a margem que você definiu. Se qualquer um desses itens estiver fora da conta, o preço parece bom e o lucro não aparece no fim do mês.",
      },
      {
        question: "Posso simplesmente dobrar o custo?",
        answer:
          "Dobrar o custo é um atalho que funciona por acidente em alguns negócios e destrói a margem em outros. Depende do peso dos seus custos fixos e das taxas que incidem sobre cada venda. O cálculo correto leva menos de um minuto na calculadora.",
      },
      {
        question: "As taxas do cartão devem entrar no preço?",
        answer:
          "Sim. A taxa do cartão incide sobre o valor total da venda, não sobre o custo. Por isso ela precisa ser tratada como percentual do preço final, e não somada ao custo.",
      },
      {
        question: "Preciso incluir meu próprio trabalho no custo?",
        answer:
          "Sim, sempre que você executa o serviço ou produz o item. Se o seu tempo não estiver no custo, o preço só remunera o material e você trabalha de graça.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Definir preço é a decisão mais repetida de um pequeno negócio e, na maioria das vezes, a menos calculada. O caminho comum é olhar o custo, olhar o preço do concorrente e escolher um número que pareça razoável. O problema aparece depois: o faturamento cresce, o movimento aumenta e o dinheiro não sobra.",
      },
      { type: "ad", variant: "responsive" },
      {
        type: "paragraph",
        text: "Um preço de venda correto responde a quatro perguntas: quanto este item custa, quanto do meu custo fixo ele precisa pagar, quanto será descontado da venda em taxas e impostos, e quanto eu quero que sobre. Vamos por partes.",
      },
      { type: "h2", text: "1. Comece pelo custo direto" },
      {
        type: "paragraph",
        text: "Custo direto é tudo que só existe porque aquela venda aconteceu: matéria-prima, mercadoria comprada para revenda, embalagem, etiqueta, frete de compra e a mão de obra usada na produção.",
      },
      {
        type: "list",
        items: [
          "Revenda: use o valor pago ao fornecedor, já com o frete de entrada rateado.",
          "Produção: some materiais, perdas normais e as horas de trabalho aplicadas.",
          "Serviço: some material aplicado, deslocamento e as horas dedicadas ao atendimento.",
        ],
      },
      {
        type: "example",
        title: "Exemplo: bolo de pote vendido por encomenda",
        lines: [
          "Ingredientes: R$ 6,40",
          "Pote e colher: R$ 1,10",
          "Etiqueta: R$ 0,30",
          "Mão de obra (20 min a R$ 30/h): R$ 10,00",
          "Custo direto: R$ 17,80",
        ],
      },
      { type: "h2", text: "2. Adicione a parcela dos custos fixos" },
      {
        type: "paragraph",
        text: "Aluguel, energia, internet, telefone, contador, mensalidade de sistema e pró-labore não mudam se você vende dez ou cem unidades — mas alguém precisa pagar por eles. A forma mais simples de colocar isso no preço é dividir o custo fixo mensal pela quantidade média vendida no mês.",
      },
      {
        type: "example",
        title: "Rateio do custo fixo",
        lines: [
          "Custos fixos do mês: R$ 1.800,00",
          "Média de vendas no mês: 300 unidades",
          "Custo fixo por unidade: R$ 6,00",
          "Custo total do item: R$ 17,80 + R$ 6,00 = R$ 23,80",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Cuidado com a média",
        text: "Se você usar uma quantidade otimista, o custo fixo por unidade fica artificialmente baixo e o preço sai barato demais. Use a média real dos últimos meses.",
      },
      { type: "h2", text: "3. Trate taxas e impostos como percentual do preço" },
      {
        type: "paragraph",
        text: "Aqui está o erro que mais aparece. Taxa de cartão, comissão de marketplace, taxa de plataforma e imposto sobre faturamento incidem sobre o valor da venda, não sobre o custo. Somar 5% ao custo não devolve os 5% que a máquina vai descontar do preço final.",
      },
      {
        type: "paragraph",
        text: "A conta correta é reservar um pedaço do preço para esses percentuais. Se as taxas somam 12% e você quer 20% de margem sobre a venda, o custo precisa caber nos 68% restantes.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "4. Defina a margem sobre a venda" },
      {
        type: "paragraph",
        text: "Margem é o percentual do preço de venda que sobra depois de tudo. Não confunda com markup, que é o percentual somado ao custo. Trinta por cento de markup não são trinta por cento de margem — a diferença costuma custar caro.",
      },
      {
        type: "internalLink",
        to: "/blog/margem-de-lucro-x-markup",
        label: "Margem de lucro x markup: qual é a diferença?",
        text: "Se essa distinção ainda gera dúvida, vale ler antes de continuar:",
      },
      { type: "h2", text: "5. A fórmula" },
      {
        type: "paragraph",
        text: "Com custo total, taxas percentuais e margem desejada, o preço sai de uma divisão simples:",
      },
      {
        type: "quote",
        text: "Preço de venda = Custo total ÷ (1 − taxas% − margem%)",
      },
      {
        type: "example",
        title: "Fechando o exemplo",
        lines: [
          "Custo total: R$ 23,80",
          "Taxas e impostos: 12%",
          "Margem desejada: 20%",
          "Preço = 23,80 ÷ (1 − 0,12 − 0,20) = 23,80 ÷ 0,68",
          "Preço de venda = R$ 35,00",
        ],
      },
      {
        type: "table",
        caption: "Como os R$ 35,00 se dividem",
        head: ["Destino", "Valor"],
        rows: [
          ["Custo direto", "R$ 17,80"],
          ["Custo fixo rateado", "R$ 6,00"],
          ["Taxas e impostos (12%)", "R$ 4,20"],
          ["Lucro (20%)", "R$ 7,00"],
        ],
      },
      { type: "h2", text: "6. Confronte com o mercado — depois, nunca antes" },
      {
        type: "paragraph",
        text: "O cálculo mostra o preço mínimo saudável. O mercado mostra o preço possível. Se o número calculado ficar acima do que o cliente aceita pagar, o problema não é a conta: é custo alto, produtividade baixa ou posicionamento. Baixar o preço sem mexer nessas causas apenas transfere o prejuízo para o fim do mês.",
      },
      { type: "calculatorCta" },
      { type: "h2", text: "Erros que mais aparecem" },
      {
        type: "list",
        items: [
          "Somar a taxa do cartão ao custo em vez de descontá-la do preço.",
          "Esquecer o próprio salário e o pró-labore.",
          "Ignorar perdas, quebras e trocas.",
          "Usar markup pensando que é margem.",
          "Nunca revisar o preço depois de aumento de custo do fornecedor.",
        ],
      },
    ],
    status: "published",
  },
  {
    id: "prec-002",
    slug: "margem-de-lucro-x-markup",
    title: "Margem de lucro x markup: qual é a diferença?",
    excerpt:
      "Markup é o quanto você soma ao custo. Margem é o quanto sobra do preço de venda. Confundir os dois é o erro mais comum na precificação.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-15",
    readingTime: 6,
    metaTitle: "Margem de lucro x markup: a diferença com exemplos em reais",
    metaDescription:
      "Entenda a diferença entre margem de lucro e markup, veja as fórmulas, a tabela de conversão e por que confundir os dois reduz seu lucro.",
    relatedArticles: [
      "como-calcular-preco-de-venda",
      "meu-preco-realmente-da-lucro",
      "como-calcular-ponto-de-equilibrio",
    ],
    keywords: ["margem", "markup", "lucro", "conversão", "fórmula"],
    faq: [
      {
        question: "Qual a diferença entre margem e markup?",
        answer:
          "Markup é calculado sobre o custo; margem é calculada sobre o preço de venda. O mesmo preço tem markup maior e margem menor, sempre.",
      },
      {
        question: "Qual dos dois devo usar no dia a dia?",
        answer:
          "Use markup para formar o preço rapidamente e margem para avaliar o resultado do negócio. O importante é não trocar um pelo outro na hora de definir a meta de lucro.",
      },
      {
        question: "Existe margem ideal?",
        answer:
          "Não existe um número universal. Um mercado de bairro trabalha com margens baixas e giro alto; um serviço especializado faz o contrário. O que precisa existir é margem suficiente para pagar os custos fixos e sobrar.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Duas pessoas podem dizer a mesma frase — “trabalho com 30%” — e estar falando de preços completamente diferentes. Uma calculou sobre o custo, a outra sobre a venda. Essa confusão é a causa silenciosa de muitos negócios que vendem bem e não lucram.",
      },
      { type: "h2", text: "Markup: percentual sobre o custo" },
      {
        type: "paragraph",
        text: "Markup é quanto você acrescenta ao custo para chegar ao preço. Se o custo é R$ 100 e você aplica 30% de markup, o preço é R$ 130.",
      },
      { type: "quote", text: "Preço = Custo × (1 + markup)" },
      { type: "h2", text: "Margem: percentual sobre o preço de venda" },
      {
        type: "paragraph",
        text: "Margem é quanto sobra do preço depois dos custos. No mesmo exemplo, os R$ 30 de lucro sobre um preço de R$ 130 representam 23,1% de margem — não 30%.",
      },
      { type: "quote", text: "Margem = (Preço − Custo) ÷ Preço" },
      { type: "ad", variant: "in-content" },
      {
        type: "table",
        caption: "Conversão entre markup e margem (custo de R$ 100)",
        head: ["Markup", "Preço", "Margem real"],
        rows: [
          ["20%", "R$ 120,00", "16,7%"],
          ["30%", "R$ 130,00", "23,1%"],
          ["50%", "R$ 150,00", "33,3%"],
          ["100%", "R$ 200,00", "50,0%"],
        ],
      },
      { type: "h2", text: "Quando o erro custa mais caro" },
      {
        type: "paragraph",
        text: "Quanto maior o percentual, maior a distância entre os dois conceitos. Quem precisa de 40% de margem e aplica 40% de markup fica com 28,6% — uma diferença de mais de onze pontos, exatamente o pedaço que costuma pagar o aluguel.",
      },
      {
        type: "callout",
        title: "Regra prática",
        text: "Para alcançar uma margem desejada, divida o custo por (1 − margem). Para 40% de margem sobre um custo de R$ 100: 100 ÷ 0,60 = R$ 166,67.",
      },
      {
        type: "internalLink",
        to: "/blog/como-calcular-preco-de-venda",
        label: "Como calcular o preço de venda corretamente",
        text: "O cálculo completo, incluindo taxas e custo fixo, está aqui:",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-003",
    slug: "como-calcular-preco-de-venda-com-taxa-de-cartao",
    title: "Como calcular preço de venda com taxa de cartão",
    excerpt:
      "Uma taxa de 4,99% parece pequena, mas somada a impostos e comissões pode consumir metade da sua margem. Veja como colocá-la no preço da forma certa.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-18",
    readingTime: 7,
    metaTitle: "Como calcular preço de venda com taxa de cartão",
    metaDescription:
      "Taxa de cartão incide sobre a venda, não sobre o custo. Veja a fórmula correta, exemplos em reais e o impacto do parcelamento na sua margem.",
    relatedArticles: [
      "como-calcular-preco-de-venda",
      "margem-de-lucro-x-markup",
      "meu-preco-realmente-da-lucro",
    ],
    keywords: ["cartão", "taxa", "maquininha", "parcelamento", "antecipação", "pix"],
    faq: [
      {
        question: "Devo ter preços diferentes para cartão e Pix?",
        answer:
          "É uma prática legal e comum oferecer desconto para pagamento à vista. O caminho mais seguro é calcular o preço considerando a taxa média das formas de pagamento que você mais recebe e conceder desconto quando o custo da transação for menor.",
      },
      {
        question: "A taxa de parcelamento também entra?",
        answer:
          "Sim, sempre que você absorve o custo do parcelamento. Se a venda em seis vezes custa 9% e você cobra o mesmo preço da venda à vista, esses 9% saem da sua margem.",
      },
      {
        question: "E a antecipação de recebíveis?",
        answer:
          "Antecipar é vender o seu recebível com desconto, então é custo financeiro. Se você antecipa com frequência, inclua o percentual médio no cálculo.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "A maquininha desconta um percentual do valor que o cliente pagou — não do que o produto custou. Essa frase resolve quase todo o problema, mas quase ninguém calcula assim.",
      },
      { type: "h2", text: "Por que somar a taxa ao custo não funciona" },
      {
        type: "paragraph",
        text: "Imagine um custo de R$ 100, taxa de cartão de 5% e desejo de 20% de margem. Somando a taxa ao custo, você chegaria a R$ 105 e depois a um preço de R$ 131,25. Mas os 5% da maquininha incidem sobre R$ 131,25, ou seja, R$ 6,56 — e não os R$ 5,00 que você tinha previsto.",
      },
      {
        type: "table",
        caption: "Comparação dos dois métodos",
        head: ["Método", "Preço", "Lucro real"],
        rows: [
          ["Taxa somada ao custo", "R$ 131,25", "R$ 24,69 (18,8%)"],
          ["Taxa descontada do preço", "R$ 133,33", "R$ 26,67 (20,0%)"],
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "A fórmula correta" },
      {
        type: "paragraph",
        text: "Some todos os percentuais que incidem sobre a venda — cartão, comissão, imposto sobre faturamento — e trate-os junto com a margem:",
      },
      { type: "quote", text: "Preço = Custo ÷ (1 − taxas% − margem%)" },
      {
        type: "example",
        title: "Exemplo com marketplace",
        lines: [
          "Custo total: R$ 60,00",
          "Comissão do marketplace: 16%",
          "Taxa de pagamento: 4%",
          "Imposto sobre faturamento: 6%",
          "Margem desejada: 15%",
          "Preço = 60 ÷ (1 − 0,41) = R$ 101,69",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Some antes de decidir",
        text: "Quando taxas e margem somam mais de 100%, não existe preço possível. É o sinal de que a margem pretendida não cabe naquele canal de venda.",
      },
      { type: "h2", text: "Levante suas taxas reais" },
      {
        type: "list",
        items: [
          "Débito, crédito à vista e crédito parcelado têm percentuais diferentes.",
          "Peça o extrato da adquirente e calcule a taxa média efetiva dos últimos três meses.",
          "Inclua taxas fixas por transação quando o ticket for baixo — R$ 0,40 em uma venda de R$ 8,00 é 5%.",
        ],
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-004",
    slug: "como-calcular-preco-de-um-servico",
    title: "Como calcular o preço de um serviço",
    excerpt:
      "Em serviço, o principal custo é o seu tempo. Veja como transformar horas, deslocamento e custos fixos em um preço que se sustenta.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-22",
    readingTime: 8,
    metaTitle: "Como calcular o preço de um serviço (com exemplos)",
    metaDescription:
      "Aprenda a precificar serviços considerando horas trabalhadas, horas produtivas, deslocamento, custos fixos, impostos e margem de lucro.",
    relatedArticles: [
      "quanto-cobrar-por-hora-de-trabalho",
      "como-calcular-preco-de-venda",
      "meu-preco-realmente-da-lucro",
    ],
    keywords: ["serviço", "hora", "prestador", "orçamento", "freelancer"],
    faq: [
      {
        question: "Como calcular o preço de um serviço?",
        answer:
          "Estime as horas necessárias, multiplique pelo seu valor-hora, some materiais e deslocamento e aplique taxas e margem sobre esse total.",
      },
      {
        question: "Devo cobrar por hora ou por projeto?",
        answer:
          "Cobrar por projeto costuma ser melhor para o cliente e para você, mas o cálculo interno continua sendo por hora. O valor fechado é o resultado da estimativa, não um chute.",
      },
      {
        question: "E quando o cliente pede desconto?",
        answer:
          "Desconto em serviço sai direto da sua remuneração, porque não há estoque para diluir. Prefira reduzir escopo a reduzir preço.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Quem vende produto tem um custo visível na nota do fornecedor. Quem vende serviço precisa transformar o próprio tempo em número — e é aí que a conta costuma ser ignorada.",
      },
      { type: "h2", text: "Passo 1: descubra suas horas realmente vendáveis" },
      {
        type: "paragraph",
        text: "Um mês tem cerca de 176 horas úteis, mas ninguém vende todas elas. Orçamento, deslocamento, retrabalho, administração e prospecção consomem uma parte grande.",
      },
      {
        type: "example",
        title: "Horas produtivas",
        lines: [
          "Horas úteis no mês: 176",
          "Administração e prospecção: 40",
          "Deslocamentos: 16",
          "Horas vendáveis: 120",
        ],
      },
      { type: "h2", text: "Passo 2: calcule o custo de cada hora" },
      {
        type: "paragraph",
        text: "Some a remuneração que você quer receber e os custos fixos do negócio, depois divida pelas horas vendáveis.",
      },
      {
        type: "example",
        title: "Custo por hora",
        lines: [
          "Remuneração desejada: R$ 4.500,00",
          "Custos fixos (internet, ferramentas, contador): R$ 900,00",
          "Total: R$ 5.400,00 ÷ 120 h",
          "Custo por hora: R$ 45,00",
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Passo 3: monte o orçamento do serviço" },
      {
        type: "paragraph",
        text: "Multiplique as horas estimadas pelo custo/hora e some o que for específico daquele trabalho.",
      },
      {
        type: "table",
        caption: "Orçamento de um serviço de 6 horas",
        head: ["Item", "Valor"],
        rows: [
          ["6 horas × R$ 45,00", "R$ 270,00"],
          ["Material aplicado", "R$ 40,00"],
          ["Deslocamento", "R$ 25,00"],
          ["Custo total", "R$ 335,00"],
        ],
      },
      { type: "h2", text: "Passo 4: aplique taxas e margem" },
      {
        type: "paragraph",
        text: "Com imposto de 6%, taxa de recebimento de 4% e margem de 20%, o preço sai de R$ 335 ÷ (1 − 0,30) = R$ 478,57. Arredondar para R$ 480,00 é razoável.",
      },
      {
        type: "callout",
        title: "Estimou pouco?",
        text: "Registre as horas reais de cada trabalho. Depois de alguns serviços você descobre que sua estimativa erra sempre para o mesmo lado — e passa a corrigi-la.",
      },
      {
        type: "internalLink",
        to: "/blog/quanto-cobrar-por-hora-de-trabalho",
        label: "Quanto cobrar por hora de trabalho?",
        text: "Para aprofundar no valor-hora:",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-005",
    slug: "erros-de-quem-define-preco-no-achismo",
    title: "Os principais erros de quem define preço no achismo",
    excerpt:
      "Copiar o concorrente, esquecer o próprio salário, ignorar taxas: os erros de precificação são poucos e repetidos. Veja como identificar cada um.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-26",
    readingTime: 7,
    metaTitle: "Os principais erros de quem define preço no achismo",
    metaDescription:
      "Sete erros de precificação que reduzem o lucro de pequenos negócios — e o que fazer para corrigir cada um deles.",
    relatedArticles: [
      "como-calcular-preco-de-venda",
      "meu-preco-realmente-da-lucro",
      "margem-de-lucro-x-markup",
    ],
    keywords: ["erros", "achismo", "concorrente", "prejuízo", "desconto"],
    content: [
      {
        type: "paragraph",
        text: "Preço definido no achismo raramente é aleatório: ele segue padrões previsíveis. Reconhecer o padrão é metade do caminho para corrigir.",
      },
      { type: "h2", text: "1. Copiar o preço do concorrente" },
      {
        type: "paragraph",
        text: "O concorrente tem outro custo de aquisição, outro aluguel, outra escala e talvez outro regime tributário. O preço dele pode ser inviável para você — ou barato demais para o valor que você entrega.",
      },
      { type: "h2", text: "2. Esquecer o próprio salário" },
      {
        type: "paragraph",
        text: "Quando o pró-labore não está na conta, o preço cobre apenas material e taxas. O negócio parece lucrativo e o dono não recebe.",
      },
      { type: "h2", text: "3. Confundir markup com margem" },
      {
        type: "internalLink",
        to: "/blog/margem-de-lucro-x-markup",
        label: "Margem de lucro x markup",
        text: "É o erro mais frequente e o mais fácil de corrigir:",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "4. Ignorar custos fixos" },
      {
        type: "paragraph",
        text: "Aluguel e energia não desaparecem porque não entraram na planilha. Sem rateio, cada venda deixa uma dívida para o fim do mês.",
      },
      { type: "h2", text: "5. Dar desconto sem saber o piso" },
      {
        type: "paragraph",
        text: "Dez por cento de desconto sobre um preço com 15% de margem consome dois terços do lucro. Quem conhece o preço de equilíbrio sabe até onde pode ir.",
      },
      { type: "h2", text: "6. Nunca revisar" },
      {
        type: "paragraph",
        text: "Fornecedor aumenta, energia sobe, taxa muda. Preço formado há um ano provavelmente já não cobre o custo de hoje. Revise pelo menos a cada trimestre.",
      },
      { type: "h2", text: "7. Tratar preço baixo como estratégia" },
      {
        type: "paragraph",
        text: "Preço baixo sem custo baixo não é estratégia, é prazo. Se o diferencial é atendimento, prazo ou acabamento, o preço precisa refletir isso.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-006",
    slug: "como-calcular-custo-de-um-produto",
    title: "Como calcular o custo de um produto antes de definir o preço",
    excerpt:
      "Antes do preço vem o custo. Veja como levantar materiais, perdas, mão de obra e custo fixo por unidade sem complicar a planilha.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-01-29",
    readingTime: 7,
    metaTitle: "Como calcular o custo de um produto passo a passo",
    metaDescription:
      "Aprenda a calcular o custo de um produto: materiais, perdas, mão de obra, embalagem e rateio de custos fixos, com exemplos em reais.",
    relatedArticles: [
      "como-calcular-preco-de-venda",
      "como-calcular-ponto-de-equilibrio",
      "como-organizar-financas-pequeno-negocio",
    ],
    keywords: ["custo", "produto", "ficha técnica", "custo fixo", "perdas"],
    content: [
      {
        type: "paragraph",
        text: "Custo é o único número da precificação que não depende de opinião. Ele existe, está nas notas fiscais e no seu tempo — só precisa ser organizado.",
      },
      { type: "h2", text: "Monte uma ficha por produto" },
      {
        type: "paragraph",
        text: "Uma ficha simples resolve: item, quantidade utilizada, preço de compra da embalagem e custo proporcional.",
      },
      {
        type: "table",
        caption: "Ficha de custo — pão artesanal (10 unidades)",
        head: ["Item", "Compra", "Uso", "Custo"],
        rows: [
          ["Farinha 5 kg", "R$ 24,00", "1 kg", "R$ 4,80"],
          ["Manteiga 500 g", "R$ 18,00", "150 g", "R$ 5,40"],
          ["Levedura 100 g", "R$ 9,00", "20 g", "R$ 1,80"],
          ["Embalagem", "R$ 0,45/un", "10 un", "R$ 4,50"],
          ["Gás e energia (estimado)", "—", "—", "R$ 3,00"],
        ],
      },
      {
        type: "paragraph",
        text: "O total de R$ 19,50 dividido por 10 unidades dá R$ 1,95 de material por pão.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Inclua perdas e quebras" },
      {
        type: "paragraph",
        text: "Se 5% da produção é descartada, o custo real por unidade vendida é maior. Divida o custo pela quantidade aproveitada, não pela produzida.",
      },
      { type: "h2", text: "Coloque a mão de obra" },
      {
        type: "paragraph",
        text: "Some as horas gastas e multiplique pelo seu valor-hora. Duas horas para produzir as dez unidades, a R$ 30/h, adicionam R$ 6,00 por unidade.",
      },
      { type: "h2", text: "Rateie o custo fixo" },
      {
        type: "paragraph",
        text: "Divida os custos fixos mensais pela quantidade média vendida no mês. Esse é o ponto de partida — simples e suficiente para a maioria dos pequenos negócios.",
      },
      {
        type: "callout",
        title: "Custo não é preço",
        text: "O custo apenas mostra o piso. Taxas, impostos e margem entram depois, sobre o preço de venda.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-007",
    slug: "meu-preco-realmente-da-lucro",
    title: "Como saber se o preço que estou cobrando realmente dá lucro",
    excerpt:
      "Vender muito e não ver o dinheiro é sintoma de preço mal calculado. Veja como auditar seus preços atuais em poucos passos.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-02-02",
    readingTime: 8,
    metaTitle: "Como saber se o seu preço realmente dá lucro",
    metaDescription:
      "Passo a passo para auditar seus preços atuais: custo real, taxas efetivas, margem por produto e ponto de equilíbrio.",
    relatedArticles: [
      "como-calcular-preco-de-venda",
      "margem-de-lucro-x-markup",
      "como-calcular-ponto-de-equilibrio",
    ],
    featured: false,
    keywords: ["lucro", "margem", "auditoria", "prejuízo", "resultado"],
    faq: [
      {
        question: "Faturamento alto significa lucro?",
        answer:
          "Não. Faturamento é o dinheiro que entra; lucro é o que sobra depois de custos, taxas e despesas. É possível bater recorde de vendas e fechar o mês no negativo.",
      },
      {
        question: "Com que frequência devo revisar os preços?",
        answer:
          "A cada três meses, e sempre que houver aumento relevante de fornecedor, mudança de taxa ou alteração de custo fixo.",
      },
      {
        question: "Qual margem indica que o preço está saudável?",
        answer:
          "A margem precisa cobrir os custos fixos rateados e ainda sobrar. Se o resultado depois de tudo é zero ou negativo, o preço está abaixo do piso, independentemente do percentual.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "A pergunta mais honesta que um pequeno negócio pode fazer é esta: quanto sobra de cada venda que eu faço hoje? Responder exige apenas três informações que você já tem.",
      },
      { type: "h2", text: "Passo 1: recalcule o custo com os valores de hoje" },
      {
        type: "paragraph",
        text: "Pegue as últimas notas do fornecedor. Preço de compra de seis meses atrás não serve para auditar preço atual.",
      },
      { type: "h2", text: "Passo 2: descubra sua taxa efetiva" },
      {
        type: "paragraph",
        text: "Divida o total descontado pela adquirente no mês pelo total vendido no cartão. O resultado é a taxa média real, quase sempre maior que a anunciada.",
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Passo 3: calcule a margem produto por produto" },
      {
        type: "table",
        caption: "Exemplo de auditoria",
        head: ["Produto", "Preço", "Custo total", "Taxas", "Sobra"],
        rows: [
          ["A", "R$ 40,00", "R$ 26,00", "R$ 4,80", "R$ 9,20 (23%)"],
          ["B", "R$ 25,00", "R$ 19,50", "R$ 3,00", "R$ 2,50 (10%)"],
          ["C", "R$ 90,00", "R$ 78,00", "R$ 10,80", "−R$ 1,80 (prejuízo)"],
        ],
      },
      {
        type: "paragraph",
        text: "É comum descobrir que o produto mais vendido é justamente o de pior margem. Isso explica por que o movimento cresce e o caixa não.",
      },
      { type: "h2", text: "Passo 4: compare com o ponto de equilíbrio" },
      {
        type: "internalLink",
        to: "/blog/como-calcular-ponto-de-equilibrio",
        label: "Como calcular o ponto de equilíbrio de um negócio",
        text: "A margem total precisa pagar os custos fixos do mês:",
      },
      { type: "h2", text: "O que fazer com o resultado" },
      {
        type: "list",
        items: [
          "Margem negativa: corrigir o preço ou tirar o item do mix.",
          "Margem baixa em item de alto giro: negociar compra ou revisar processo.",
          "Margem boa em item de baixo giro: dar destaque comercial ao item.",
        ],
      },
      { type: "calculatorCta" },
      {
        type: "internalLink",
        to: "/blog/o-que-fazer-com-o-lucro-da-empresa",
        label: "O que fazer com o lucro da sua empresa depois de pagar as contas?",
        text: "Quando o lucro passa a aparecer, começa a próxima etapa:",
      },
    ],
    status: "published",
  },
  {
    id: "prec-008",
    slug: "como-calcular-preco-de-produtos-artesanais",
    title: "Como calcular o preço de produtos artesanais",
    excerpt:
      "No artesanato, o tempo de produção é o maior custo — e o mais esquecido. Veja como precificar peças feitas à mão sem trabalhar de graça.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-02-05",
    readingTime: 7,
    metaTitle: "Como calcular o preço de produtos artesanais",
    metaDescription:
      "Precificação de artesanato: materiais, tempo de produção, custo fixo, taxas de venda online e margem. Com exemplo completo em reais.",
    relatedArticles: [
      "como-calcular-custo-de-um-produto",
      "quanto-cobrar-por-hora-de-trabalho",
      "como-calcular-preco-de-venda",
    ],
    keywords: ["artesanal", "artesanato", "feito à mão", "hora", "encomenda"],
    content: [
      {
        type: "paragraph",
        text: "A frase mais comum no artesanato é “se eu cobrar o meu tempo, ninguém compra”. Na prática, o problema quase nunca é o tempo cobrado: é o tempo gasto em uma peça que não foi pensada para ser vendida com margem.",
      },
      { type: "h2", text: "Materiais: compre e registre" },
      {
        type: "paragraph",
        text: "Calcule o custo proporcional de cada material usado na peça, incluindo o que sobra e não é aproveitado.",
      },
      { type: "h2", text: "Tempo: o item mais importante" },
      {
        type: "example",
        title: "Exemplo: bolsa em crochê",
        lines: [
          "Fio e forro: R$ 38,00",
          "Alça e acabamento: R$ 12,00",
          "Tempo: 9 horas × R$ 25,00 = R$ 225,00",
          "Custo fixo rateado: R$ 15,00",
          "Custo total: R$ 290,00",
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Taxas de venda online" },
      {
        type: "paragraph",
        text: "Marketplaces de artesanato cobram comissão, e o pagamento tem taxa própria. Com 16% de comissão, 4% de pagamento e 20% de margem, o preço da bolsa fica em R$ 290 ÷ 0,60 = R$ 483,33.",
      },
      {
        type: "callout",
        title: "O preço ficou alto para o mercado?",
        text: "Reduza o tempo de produção com moldes e lotes, negocie material em maior quantidade ou crie uma linha mais simples — em vez de descontar o seu próprio trabalho.",
      },
      { type: "h2", text: "Produza em lote quando possível" },
      {
        type: "paragraph",
        text: "Cortar material para cinco peças de uma vez reduz o tempo por unidade e é a forma mais direta de melhorar a margem sem aumentar o preço.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-009",
    slug: "quanto-cobrar-por-hora-de-trabalho",
    title: "Quanto cobrar por hora de trabalho?",
    excerpt:
      "O valor-hora não é o seu salário dividido por 176. Veja como chegar a um número que cobre custos, horas não vendáveis e lucro.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-02-09",
    readingTime: 7,
    metaTitle: "Quanto cobrar por hora de trabalho? Como calcular",
    metaDescription:
      "Como calcular seu valor-hora considerando remuneração desejada, custos fixos, horas realmente vendáveis, impostos e margem.",
    relatedArticles: [
      "como-calcular-preco-de-um-servico",
      "como-calcular-ponto-de-equilibrio",
      "como-separar-dinheiro-da-empresa-do-pessoal",
    ],
    keywords: ["valor hora", "hora", "freelancer", "prestador", "serviço"],
    faq: [
      {
        question: "Devo mostrar meu valor-hora ao cliente?",
        answer:
          "Não é obrigatório. Muitos prestadores usam o valor-hora internamente e apresentam preço fechado por projeto, o que costuma gerar menos discussão sobre tempo.",
      },
      {
        question: "Meu valor-hora deve ser igual para todo tipo de trabalho?",
        answer:
          "Não necessariamente. Trabalhos com prazo apertado, deslocamento longo ou maior responsabilidade técnica justificam um valor maior.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Dividir a renda desejada pelas horas do mês é o cálculo mais comum e o mais equivocado. Ele assume que todas as horas são vendidas e que o negócio não tem custos.",
      },
      { type: "h2", text: "A conta em quatro números" },
      {
        type: "list",
        ordered: true,
        items: [
          "Remuneração que você quer receber por mês.",
          "Custos fixos do negócio no mês.",
          "Horas realmente vendáveis no mês.",
          "Percentuais que incidem sobre a venda (impostos, taxas) e margem desejada.",
        ],
      },
      {
        type: "example",
        title: "Exemplo completo",
        lines: [
          "Remuneração: R$ 5.000,00",
          "Custos fixos: R$ 1.200,00",
          "Horas vendáveis: 110",
          "Custo por hora: R$ 56,36",
          "Impostos e taxas: 10% | Margem: 15%",
          "Valor-hora = 56,36 ÷ 0,75 = R$ 75,15",
        ],
      },
      { type: "ad", variant: "in-content" },
      { type: "h2", text: "Por que as horas vendáveis são tão poucas" },
      {
        type: "paragraph",
        text: "Orçamentos, reuniões, deslocamento, estudo, emissão de notas e cobrança consomem tempo e não são faturados. Contar 176 horas vendáveis é a origem de metade dos valores-hora baixos do mercado.",
      },
      { type: "h2", text: "Reajuste com base em dados" },
      {
        type: "paragraph",
        text: "Anote as horas de cada trabalho por três meses. Você terá o número real de horas vendáveis e poderá corrigir o valor-hora com segurança, sem depender de comparação com concorrentes.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
  {
    id: "prec-010",
    slug: "como-calcular-ponto-de-equilibrio",
    title: "Como calcular o ponto de equilíbrio de um negócio",
    excerpt:
      "O ponto de equilíbrio mostra quanto você precisa vender para não ter prejuízo. É o número que transforma preço em meta de vendas.",
    category: "precificacao",
    authorId: AUTHOR,
    publishedAt: "2026-02-12",
    readingTime: 7,
    metaTitle: "Como calcular o ponto de equilíbrio do seu negócio",
    metaDescription:
      "Fórmula do ponto de equilíbrio, margem de contribuição e exemplos em reais para descobrir quanto você precisa vender para não ter prejuízo.",
    relatedArticles: [
      "meu-preco-realmente-da-lucro",
      "como-calcular-preco-de-venda",
      "como-aumentar-o-lucro-sem-aumentar-vendas",
    ],
    keywords: ["ponto de equilíbrio", "break even", "margem de contribuição", "meta"],
    faq: [
      {
        question: "Ponto de equilíbrio é a mesma coisa que meta de faturamento?",
        answer:
          "É o piso da meta. Ele indica o faturamento em que o resultado é zero; qualquer objetivo de lucro precisa ficar acima dele.",
      },
      {
        question: "Preciso calcular por produto?",
        answer:
          "O cálculo geral usa a margem de contribuição média do negócio. Calcular por produto ajuda a decidir onde concentrar esforço de venda.",
      },
    ],
    content: [
      {
        type: "paragraph",
        text: "Saber o preço é metade da informação. A outra metade é quantas vendas aquele preço precisa gerar para pagar a estrutura do mês.",
      },
      { type: "h2", text: "Margem de contribuição" },
      {
        type: "paragraph",
        text: "É o que sobra de cada venda depois dos custos variáveis — mercadoria, material, taxa de cartão, comissão e imposto sobre faturamento.",
      },
      { type: "quote", text: "Margem de contribuição = Preço − custos variáveis" },
      { type: "h2", text: "A fórmula do ponto de equilíbrio" },
      {
        type: "quote",
        text: "Ponto de equilíbrio (unidades) = Custos fixos ÷ Margem de contribuição unitária",
      },
      { type: "ad", variant: "in-content" },
      {
        type: "example",
        title: "Exemplo",
        lines: [
          "Custos fixos mensais: R$ 4.500,00",
          "Preço médio: R$ 60,00",
          "Custos variáveis por venda: R$ 39,00",
          "Margem de contribuição: R$ 21,00",
          "Ponto de equilíbrio: 4.500 ÷ 21 = 215 unidades",
          "Faturamento de equilíbrio: 215 × R$ 60,00 = R$ 12.900,00",
        ],
      },
      { type: "h2", text: "Como usar o número no dia a dia" },
      {
        type: "list",
        items: [
          "Divida por dias úteis: 215 ÷ 26 ≈ 9 vendas por dia.",
          "Compare com a média atual: se você vende 7 por dia, o mês fecha negativo.",
          "Antes de assumir um custo fixo novo, veja quantas vendas extras ele exige.",
        ],
      },
      {
        type: "callout",
        title: "Três alavancas",
        text: "Para reduzir o ponto de equilíbrio: aumentar a margem de contribuição, reduzir custos fixos ou melhorar o mix de produtos vendidos.",
      },
      { type: "calculatorCta" },
    ],
    status: "published",
  },
];
