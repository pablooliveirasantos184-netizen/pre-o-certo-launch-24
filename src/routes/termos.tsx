import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — PreçoCerto" },
      { name: "description", content: "Condições de uso da calculadora de precificação PreçoCerto e limites de responsabilidade sobre os resultados." },
      { property: "og:title", content: "Termos de Uso — PreçoCerto" },
      { property: "og:description", content: "Condições de uso da calculadora de precificação PreçoCerto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Termos de Uso
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          O PreçoCerto é uma ferramenta gratuita de apoio à decisão. Os resultados
          dependem exclusivamente dos valores informados por você.
        </p>
        <p>
          Os cálculos não substituem orientação contábil, tributária ou financeira
          profissional. Confira sempre suas alíquotas e taxas reais.
        </p>
        <p>
          Podemos ajustar funcionalidades e estes termos a qualquer momento, sempre
          publicando a versão vigente nesta página.
        </p>
      </div>
    </div>
  );
}
