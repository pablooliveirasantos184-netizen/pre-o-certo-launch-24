import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — PreçoCerto" },
      { name: "description", content: "Quais cookies o PreçoCerto utiliza, para que servem e como você pode desativá-los no navegador." },
      { property: "og:title", content: "Política de Cookies — PreçoCerto" },
      { property: "og:description", content: "Entenda quais cookies usamos e como desativá-los." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Política de Cookies
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          Utilizamos cookies essenciais para o funcionamento do site e cookies de
          medição para saber quais páginas são mais úteis.
        </p>
        <p>
          Nenhum cookie guarda os valores que você digita na calculadora.
        </p>
        <p>
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. O
          site continua funcionando normalmente.
        </p>
      </div>
    </div>
  );
}
