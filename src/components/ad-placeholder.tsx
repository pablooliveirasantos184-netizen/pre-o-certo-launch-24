"use client";

import { cn } from "@/lib/utils";

/**
 * Variações de espaço reservado para anúncios.
 * Durante desenvolvimento exibe borda discreta.
 * Em produção os anúncios reais serão injetados via Google AdSense.
 */
export type AdVariant = "horizontal" | "responsive" | "in-content" | "sidebar";

interface AdPlaceholderProps {
  variant?: AdVariant;
  className?: string;
  /** Texto opcional para identificação no desenvolvimento */
  devLabel?: string;
}

const VARIANT_CONFIG: Record<
  AdVariant,
  { minHeight: number; label: string }
> = {
  /** 728x90 — leaderboard padrão */
  horizontal: { minHeight: 90, label: "Anúncio horizontal (728×90)" },
  /** O menor dos anúncios inline — 300x250 */
  "in-content": { minHeight: 250, label: "Anúncio inline (300×250)" },
  /** Responsivo: preenche a largura disponível */
  responsive: { minHeight: 100, label: "Anúncio responsivo" },
  /** Sidebar lateral — desktop only */
  sidebar: { minHeight: 600, label: "Anúncio lateral (300×600)" },
};

const DEV = import.meta.env.DEV;

export function AdPlaceholder({
  variant = "responsive",
  className,
  devLabel,
}: AdPlaceholderProps) {
  const { minHeight, label } = VARIANT_CONFIG[variant];
  const displayLabel = devLabel ?? label;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full flex items-center justify-center overflow-hidden",
        DEV && "border border-dashed border-muted-foreground/30 bg-muted/20 rounded-md",
        className,
      )}
      style={{ minHeight: `${minHeight}px` }}
      role="presentation"
    >
      {DEV && (
        <span className="text-xs text-muted-foreground select-none pointer-events-none">
          {displayLabel}
        </span>
      )}
    </div>
  );
}

/** Wrapper com espaçamento seguro para elementos interativos */
interface SafeAdContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Usado ao redor de AdPlaceholder para garantir distância mínima
 * de campos de formulário e botões (24px de cada lado).
 */
export function SafeAdContainer({ children, className }: SafeAdContainerProps) {
  return (
    <div
      className={cn(
        "my-6 px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
