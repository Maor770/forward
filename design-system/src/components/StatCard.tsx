import * as React from "react";

export interface StatCardProps {
  /** The figure, e.g. "1,137" or "103,000". */
  value: React.ReactNode;
  /** Uppercase caption below the figure, e.g. "English Videos". */
  label: React.ReactNode;
  /** Show a leading "+" before the value. */
  plus?: boolean;
  /** Optional icon above the figure (img or inline SVG). */
  icon?: React.ReactNode;
  className?: string;
}

/**
 * StatCard — a single impact metric: an optional icon, a large condensed gold
 * figure (optionally prefixed with "+"), and an uppercase caption. Designed to
 * sit on a navy band; use four across for the homepage stats row.
 */
export function StatCard({ value, label, plus = false, icon, className = "" }: StatCardProps) {
  return (
    <div className={`v3-stat ${className}`.trim()}>
      {icon && <span className="v3-stat-icon" aria-hidden="true">{icon}</span>}
      <span className="v3-stat-num">
        {plus && <span className="v3-stat-plus">+</span>}
        {value}
      </span>
      <span className="v3-stat-label">{label}</span>
    </div>
  );
}
