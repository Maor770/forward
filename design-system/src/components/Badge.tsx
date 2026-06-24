import * as React from "react";

export interface BadgeProps {
  /** Badge label. */
  children?: React.ReactNode;
  /** `gold` is the warm chip used on cream backgrounds; `onDark` is the
   *  translucent cream chip used on gold/navy backgrounds (e.g. the pillar amount). */
  tone?: "gold" | "onDark";
  className?: string;
}

/**
 * Badge — a small uppercase pill used for campaign tags ("$2.5M Capital
 * Campaign") and allocation amounts. Letter-spaced Noto Sans on a translucent
 * rounded chip.
 */
export function Badge({ children, tone = "gold", className = "" }: BadgeProps) {
  const toneClass = tone === "onDark" ? "mf-badge--on-dark" : "mf-badge--gold";
  return <span className={`mf-badge ${toneClass} ${className}`.trim()}>{children}</span>;
}
