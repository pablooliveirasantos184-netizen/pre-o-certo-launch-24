import type { Author, Category, CategorySlug } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "precificacao",
    name: "Precificação",
    description:
      "Como calcular preço de venda, custos, margem de lucro, markup e taxas sem depender de achismo.",
    order: 1,
  },
  {
    slug: "gestao-financeira",
    name: "Gestão Financeira",
    description:
      "Organização do dinheiro do negócio: separação de contas, reserva, controle de custos e aumento de lucro.",
    order: 2,
  },
  {
    slug: "financas-investimentos",
    name: "Finanças e Investimentos",
    description:
      "O passo seguinte depois de gerar lucro: organizar o dinheiro, construir patrimônio e entender investimentos.",
    order: 3,
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return CATEGORIES.some((c) => c.slug === slug);
}

export const AUTHORS: Author[] = [
  {
    id: "equipe-precocerto",
    name: "Equipe PreçoCerto",
    bio: "Conteúdo produzido pela equipe do PreçoCerto, ferramenta gratuita de cálculo de preço de venda.",
  },
];

export function getAuthor(id: string): Author {
  return AUTHORS.find((a) => a.id === id) ?? AUTHORS[0];
}
