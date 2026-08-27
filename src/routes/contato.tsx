import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PreçoCerto" },
      { name: "description", content: "Fale com a equipe do PreçoCerto: dúvidas, sugestões de melhoria e parcerias." },
      { property: "og:title", content: "Contato — PreçoCerto" },
      { property: "og:description", content: "Dúvidas, sugestões ou parcerias? Fale com a equipe do PreçoCerto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Contato
      </h1>
      <p className="mt-6 text-muted-foreground">
        Tem uma dúvida sobre precificação, encontrou um erro ou quer sugerir uma
        nova calculadora? Escreva para{" "}
        <a href="mailto:contato@precocerto.app" className="font-medium text-primary underline">
          contato@precocerto.app
        </a>
        . Respondemos em até dois dias úteis.
      </p>
    </div>
  );
}
