import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o PreçoCerto — Precificação sem achismo" },
      { name: "description", content: "Conheça o PreçoCerto, a calculadora gratuita que ajuda empreendedores a definir preços de venda com base em custos, taxas e margem." },
      { property: "og:title", content: "Sobre o PreçoCerto" },
      { property: "og:description", content: "A calculadora gratuita que ajuda empreendedores a precificar com clareza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Sobre o PreçoCerto
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          O PreçoCerto nasceu de um problema simples: muita gente vende bem e ainda
          assim não vê o dinheiro sobrar no fim do mês. Quase sempre o motivo é o
          preço, definido no achismo.
        </p>
        <p>
          Nossa calculadora coloca na conta o que costuma ficar de fora: taxas de
          cartão, comissões, impostos, embalagem, mão de obra e custos fixos. Com
          isso você descobre o preço de custo, o preço de equilíbrio e o preço
          recomendado para a margem que deseja.
        </p>
        <p>
          É gratuito, não exige cadastro e nenhum dado que você digita é enviado
          para fora do seu navegador.
        </p>
      </div>
    </div>
  );
}
