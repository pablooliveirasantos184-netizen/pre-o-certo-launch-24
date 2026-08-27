import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog do PreçoCerto — Guias de precificação" },
      { name: "description", content: "Artigos práticos sobre precificação de produtos e serviços, margem de lucro, taxas de cartão e custos fixos." },
      { property: "og:title", content: "Blog do PreçoCerto" },
      { property: "og:description", content: "Guias práticos sobre precificação, margem de lucro e custos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Margem de lucro e markup: qual é a diferença?",
    excerpt:
      "Markup é o quanto você soma ao custo. Margem é o quanto sobra do preço de venda. Confundir os dois é o erro mais comum na precificação.",
  },
  {
    title: "Quanto as taxas de cartão realmente tiram do seu lucro",
    excerpt:
      "Uma taxa de 4,99% parece pequena, mas somada a impostos e comissões pode consumir metade da sua margem.",
  },
  {
    title: "Como calcular custo fixo por unidade sem complicar",
    excerpt:
      "Divida seus custos fixos mensais pela quantidade que você produz ou vende no mês. Esse é o ponto de partida.",
  },
];

function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-muted-foreground">
        Conteúdo direto ao ponto para você precificar melhor.
      </p>
      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
