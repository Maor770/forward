import * as React from "react";

export interface PointCardProps {
  /** Card title, e.g. "Why we can do this". */
  title: React.ReactNode;
  /** Body — one or more paragraphs. Pass an array for multiple <p> blocks. */
  children?: React.ReactNode;
  /** Floating gold medallion icon (inline SVG) at the top-right. */
  icon?: React.ReactNode;
  className?: string;
}

/**
 * PointCard — a navy elevated card with a floating gold medallion icon at the
 * top-right, a gold-bright title, and body copy. Used in pairs for the
 * "why / how" points.
 */
export function PointCard({ title, children, icon, className = "" }: PointCardProps) {
  const paragraphs = Array.isArray(children) ? children : [children];
  return (
    <div className={`v3-point-card ${className}`.trim()}>
      {icon && <span className="v3-point-icon" aria-hidden="true">{icon}</span>}
      <h3>{title}</h3>
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}
