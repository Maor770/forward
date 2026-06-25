import * as React from "react";

export interface StakesCardProps {
  /** `before` (warm gold) or `after` (bright gold) — sets the accent and left rule. */
  variant: "before" | "after";
  /** Tag label above the text. Defaults to "Before"/"After" from the variant. */
  tag?: React.ReactNode;
  /** The body statement. */
  children?: React.ReactNode;
  /** Icon inside the round bordered chip (inline SVG). */
  icon?: React.ReactNode;
  className?: string;
}

/**
 * StakesCard — one side of a before/after comparison: a round outlined icon, an
 * uppercase tag, and a statement. `before` uses warm gold, `after` uses bright
 * gold. Built for a navy section.
 */
export function StakesCard({ variant, tag, children, icon, className = "" }: StakesCardProps) {
  const defaultTag = variant === "before" ? "Before" : "After";
  return (
    <div className={`v3-stakes-card v3-stakes-${variant} ${className}`.trim()}>
      {icon && <span className="v3-stakes-icon" aria-hidden="true">{icon}</span>}
      <span className="v3-stakes-tag">{tag ?? defaultTag}</span>
      <p className="v3-stakes-card-text">{children}</p>
    </div>
  );
}
