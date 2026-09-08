/**
 * Modelo de dados do blog do PreçoCerto.
 *
 * Cada artigo é um objeto tipado. Para publicar um novo conteúdo basta
 * adicionar um objeto `Article` em um dos arquivos de src/data/blog/articles
 * e registrá-lo no índice (src/data/blog/index.ts).
 */

export type CategorySlug =
  | "precificacao"
  | "gestao-financeira"
  | "financas-investimentos";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  /** Ordem de exibição — precificação é a categoria principal */
  order: number;
}

export interface Author {
  id: string;
  name: string;
  /** Descrição curta e honesta, sem credenciais inventadas */
  bio: string;
  /** Preenchido futuramente */
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Blocos de conteúdo — renderizados por <ArticleContent /> */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; title?: string; text: string; tone?: "info" | "warning" }
  | { type: "quote"; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "example"; title: string; lines: string[] }
  | { type: "internalLink"; to: string; label: string; text?: string }
  | { type: "calculatorCta" }
  | { type: "affiliateBlock" }
  | { type: "ad"; variant?: "responsive" | "in-content" };

export type ArticleStatus = "published" | "draft";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  authorId: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  /** Minutos estimados de leitura */
  readingTime: number;
  /** URL absoluta da imagem de destaque; undefined quando ainda não existe */
  featuredImage?: string;
  featuredImageAlt?: string;
  metaTitle: string;
  metaDescription: string;
  /** Slugs de artigos relacionados */
  relatedArticles: string[];
  faq?: FaqItem[];
  content: ContentBlock[];
  status: ArticleStatus;
  /** Destaque na home do blog */
  featured?: boolean;
  /** Palavras extras consideradas na busca */
  keywords?: string[];
}
