import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/calculadora-de-precificacao")({
  head: () => ({
    meta: [
      { title: "Calculadora de Precificação Gratuita — PreçoCerto" },
      { name: "description", content: "Calcule o preço de venda do seu produto ou serviço considerando custos, taxas, impostos e margem de lucro. Grátis e sem cadastro." },
      { property: "og:title", content: "Calculadora de Precificação Gratuita — PreçoCerto" },
      { property: "og:description", content: "Descubra o preço de venda ideal com custos, taxas e margem de lucro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalculadoraPage,
});

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const pct = (n: number) =>
  `${n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

const toNumber = (v: string) => {
  const clean = v.replace(/\./g, "").replace(",", ".").replace(/[^\d.]/g, "");
  const n = Number.parseFloat(clean);
  return Number.isFinite(n) ? n : 0;
};

type Field = { id: string; label: string; help?: string; suffix?: "R$" | "%" };

const costFields: Field[] = [
  { id: "custo", label: "Custo do produto ou material", help: "Quanto você paga para obter ou produzir uma unidade.", suffix: "R$" },
  { id: "maoDeObra", label: "Mão de obra", help: "Horas trabalhadas multiplicadas pelo valor da sua hora.", suffix: "R$" },
  { id: "outros", label: "Outros custos", help: "Embalagem, frete, entrega e demais gastos por unidade.", suffix: "R$" },
];

const rateFields: Field[] = [
  { id: "taxas", label: "Taxas de venda", help: "Cartão, marketplace ou plataforma, em percentual.", suffix: "%" },
  { id: "impostos", label: "Impostos", help: "Percentual de imposto sobre o preço de venda.", suffix: "%" },
  { id: "comissoes", label: "Comissões", help: "Percentual pago a vendedores ou parceiros.", suffix: "%" },
  { id: "taxaFixa", label: "Taxa fixa por transação", help: "Valor fixo cobrado em cada venda, quando houver.", suffix: "R$" },
];

const marginFields: Field[] = [
  { id: "margem", label: "Margem de lucro", help: "É o percentual do preço de venda que você deseja que represente seu lucro.", suffix: "%" },
  { id: "precoAtual", label: "Preço atual (opcional)", help: "Se você já vende, informe o preço praticado hoje para comparar.", suffix: "R$" },
];

type TipoPrecificacao = "produto" | "servico";

function CalculadoraPage() {
  const [tipo, setTipo] = useState<TipoPrecificacao | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const num = (id: string) => toNumber(values[id] ?? "");

  const result = useMemo(() => {
    const custoTotal = num("custo") + num("maoDeObra") + num("outros");
    const percTaxas = (num("taxas") + num("impostos") + num("comissoes")) / 100;
    const margem = num("margem") / 100;
    const taxaFixa = num("taxaFixa");
    const invalido = percTaxas + margem >= 1 || percTaxas >= 1;

    const equilibrio = invalido ? 0 : (custoTotal + taxaFixa) / (1 - percTaxas);
    const recomendado = invalido ? 0 : (custoTotal + taxaFixa) / (1 - percTaxas - margem);
    const lucro = recomendado - custoTotal - taxaFixa - recomendado * percTaxas;

    return { custoTotal, percTaxas, margem, taxaFixa, invalido, equilibrio, recomendado, lucro };
  }, [values]);

  const precoAtual = num("precoAtual");

  const renderFields = (fields: Field[]) => (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} className="block text-sm font-medium text-foreground">
            {f.label}
          </label>
          <div className="mt-1 flex items-center rounded-lg border border-border bg-background focus-within:ring-2 focus-within:ring-primary">
            {f.suffix === "R$" && (
              <span className="pl-3 text-sm text-muted-foreground">R$</span>
            )}
            <input
              id={f.id}
              inputMode="decimal"
              value={values[f.id] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.id]: e.target.value.replace(/-/g, "") }))
              }
              placeholder="0,00"
              className="min-w-0 flex-1 rounded-lg bg-transparent px-3 py-3 text-base text-foreground outline-none"
            />
            {f.suffix === "%" && (
              <span className="pr-3 text-sm text-muted-foreground">%</span>
            )}
          </div>
          {f.help && <p className="mt-1 text-xs text-muted-foreground">{f.help}</p>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        Calculadora de precificação
      </h1>
      <p className="mt-3 text-muted-foreground">
        Informe seus custos, taxas e a margem desejada para descobrir o preço certo.
      </p>

      {tipo === null ? (
        <section className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground">
            O que você quer precificar?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Escolha uma opção para começar.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(
              [
                {
                  value: "produto",
                  title: "Produto",
                  description: "Algo físico ou digital que você vende, como roupas, artesanato ou ebooks.",
                },
                {
                  value: "servico",
                  title: "Serviço",
                  description: "Um trabalho que você realiza, como consultoria, design ou manutenção.",
                },
              ] as { value: TipoPrecificacao; title: string; description: string }[]
            ).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setTipo(option.value)}
                className="rounded-xl border border-border bg-background p-5 text-left transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span className="block text-base font-semibold text-foreground">
                  {option.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : (
      <div className="mt-8 space-y-8">
        <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
          <p className="text-sm text-foreground">
            Precificando: <strong>{tipo === "produto" ? "Produto" : "Serviço"}</strong>
          </p>
          <button
            type="button"
            onClick={() => {
              setTipo(null);
              setShowResult(false);
            }}
            className="text-sm font-medium text-primary hover:underline"
          >
            Trocar
          </button>
        </div>
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground">1. Seus custos</h2>
          <div className="mt-4">{renderFields(costFields)}</div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground">2. Taxas e impostos</h2>
          <div className="mt-4">{renderFields(rateFields)}</div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-foreground">3. Sua margem</h2>
          <div className="mt-4">{renderFields(marginFields)}</div>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowResult(true)}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Calcular preço
          </button>
          <button
            type="button"
            onClick={() => {
              setValues({});
              setShowResult(false);
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            Fazer novo cálculo
          </button>
        </div>

        {showResult && (
          <section
            aria-live="polite"
            className="rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            {result.invalido || result.custoTotal <= 0 ? (
              <p className="text-sm font-medium text-destructive">
                {result.custoTotal <= 0
                  ? "Informe o custo do produto para continuar."
                  : "Os percentuais informados não permitem calcular um preço válido. Reduza a margem ou revise as taxas."}
              </p>
            ) : (
              <>
                <p className="text-sm font-medium text-muted-foreground">
                  Seu preço recomendado
                </p>
                <p className="mt-1 text-4xl font-extrabold text-primary sm:text-5xl">
                  {brl(result.recomendado)}
                </p>

                <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { label: "Preço de custo", value: brl(result.custoTotal) },
                    { label: "Preço de equilíbrio", value: brl(result.equilibrio) },
                    { label: "Lucro estimado", value: brl(result.lucro) },
                    { label: "Margem", value: pct(result.margem * 100) },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-muted/40 p-4">
                      <dt className="text-xs text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 text-lg font-bold text-foreground">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                {precoAtual > 0 && (
                  <div className="mt-6 rounded-lg border border-border p-4">
                    <p className="text-sm text-foreground">
                      Preço atual: <strong>{brl(precoAtual)}</strong> · Diferença:{" "}
                      <strong>{brl(result.recomendado - precoAtual)}</strong>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {precoAtual < result.recomendado
                        ? "Seu preço atual está abaixo do valor calculado para atingir a margem informada."
                        : "Seu preço atual está acima do valor calculado para a margem informada."}
                    </p>
                  </div>
                )}
              </>
            )}
          </section>
        )}
      </div>
      )}
    </div>
  );
}
