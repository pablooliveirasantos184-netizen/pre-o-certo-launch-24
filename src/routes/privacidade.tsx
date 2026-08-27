import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — PreçoCerto" },
      { name: "description", content: "Como o PreçoCerto trata seus dados: os cálculos acontecem no seu navegador e não guardamos os valores informados." },
      { property: "og:title", content: "Política de Privacidade — PreçoCerto" },
      { property: "og:description", content: "Seus cálculos ficam no seu navegador. Entenda como tratamos dados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Política de Privacidade
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          Os valores que você digita na calculadora são processados no seu próprio
          navegador. Não enviamos, armazenamos nem compartilhamos esses números.
        </p>
        <p>
          Usamos dados de navegação agregados apenas para entender quais páginas são
          mais acessadas e melhorar a ferramenta.
        </p>
        <p>
          Para exercer qualquer direito previsto na LGPD, escreva para
          contato@precocerto.app.
        </p>
      </div>
    </div>
  );
}
