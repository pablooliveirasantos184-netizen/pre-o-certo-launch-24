import { createFileRoute, Link } from "@tanstack/react-router";
import { AdPlaceholder, SafeAdContainer } from "@/components/ad-placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PreçoCerto — Calcule o preço certo para vender com lucro" },
      { name: "description", content: "Pare de cobrar no achismo. Descubra o preço certo para vender com lucro. Calculadora gratuita de precificação de produtos e serviços." },
      { property: "og:title", content: "PreçoCerto — Descubra o preço certo para vender com lucro" },
      { property: "og:description", content: "Pare de cobrar no achismo. Descubra o preço certo para vender com lucro." },
    ],
  }),
  component: HomePage,
});

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Descubra quanto cobrar pelo seu produto ou serviço
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Calcule seu preço de venda considerando custos, taxas, impostos e margem de lucro. Sem fórmulas inventadas, sem achismo.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/calculadora-de-precificacao"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Calcular meu preço gratuitamente
              <svg className="ml-2 h-4 w-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <p className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Grátis
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Rápido
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4 text-green-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Sem cadastro
            </span>
          </p>
        </div>

        {/* Visual decoration */}
        <div className="mt-16 flex justify-center" aria-hidden="true">
          <div className="relative w-full max-w-2xl">
            <div className="rounded-2xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400"/>
                <div className="h-3 w-3 rounded-full bg-yellow-400"/>
                <div className="h-3 w-3 rounded-full bg-green-400"/>
                <span className="ml-2 text-xs text-muted-foreground">calculadora</span>
              </div>
              <div className="grid grid-cols-3 gap-4 p-6">
                {[
                  { label: "Custo", value: "R$ 100,00", color: "text-foreground" },
                  { label: "Taxas", value: "8,5%", color: "text-amber-600" },
                  { label: "Margem", value: "25%", color: "text-green-600" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className={`mt-1 text-lg font-bold ${item.color}`}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Preço recomendado</span>
                  <span className="text-2xl font-extrabold text-primary">R$ 166,67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ─────────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Você sabe quanto realmente ganha em cada venda?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Muitas pessoas definem o preço simplesmente adicionando uma porcentagem ao custo do produto ou serviço. O problema é que cartão, impostos, embalagem, comissão, mão de obra, custos fixos e descontos podem reduzir bastante o lucro.
          </p>
          <p className="mt-4 text-lg font-medium text-foreground">
            O PreçoCerto ajuda a colocar esses fatores na conta.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Section ────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Informe seus custos",
      description: "Produtos, materiais, embalagem, mão de obra e outros gastos.",
    },
    {
      number: "02",
      title: "Informe suas taxas",
      description: "Cartão, parcelamento, marketplace, impostos e outras taxas.",
    },
    {
      number: "03",
      title: "Defina sua margem",
      description: "Informe quanto você deseja ganhar.",
    },
    {
      number: "04",
      title: "Descubra seu preço",
      description: "Receba preço de custo, preço de equilíbrio e preço recomendado.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quatro passos simples para descobrir o preço certo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/calculadora-de-precificacao"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Calcular agora
            <svg className="ml-2 h-4 w-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Calculator CTA Section ──────────────────────────────────────────────────
function CalculatorCTA() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Quanto você deveria cobrar?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Informe seus custos e deixe o PreçoCerto fazer as contas para você.
          </p>
          <Link
            to="/calculadora-de-precificacao"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            Calcular agora
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits Section ────────────────────────────────────────────────────────
function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg className="h-6 w-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      title: "Evite prejuízos",
      description: "Considere custos e taxas antes de definir seu preço.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      ),
      title: "Entenda sua margem",
      description: "Descubra quanto realmente sobra em cada venda.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: "Venda com mais segurança",
      description: "Tenha um preço calculado com base nos seus próprios números.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: "Gratuito",
      description: "A ferramenta principal é gratuita e sem necessidade de cadastro.",
    },
  ];

  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que usar o PreçoCerto?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Espaço de anúncio — após hero, antes do problema */}
      <SafeAdContainer>
        <AdPlaceholder variant="responsive" className="max-w-4xl mx-auto" />
      </SafeAdContainer>

      <ProblemSection />

      {/* Espaço de anúncio — entre seção de problema e como funciona */}
      <SafeAdContainer>
        <AdPlaceholder variant="horizontal" className="max-w-4xl mx-auto" />
      </SafeAdContainer>

      <HowItWorksSection />
      <CalculatorCTA />

      <BenefitsSection />

      {/* Espaço de anúncio — antes do footer */}
      <SafeAdContainer>
        <AdPlaceholder variant="in-content" className="max-w-4xl mx-auto" />
      </SafeAdContainer>
    </>
  );
}
