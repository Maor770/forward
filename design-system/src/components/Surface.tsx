import * as React from "react";

export interface SurfaceProps {
  /** Background tone. `cream`/`paper` are light parchment; `navy`/`elevated` are dark. */
  tone?: "cream" | "paper" | "navy" | "elevated";
  /** Content placed on the surface. */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Surface — a tonal backdrop panel. MaorForward sections alternate between
 * warm cream/parchment and deep navy; place dark-on-light or light-on-dark
 * components inside the matching Surface so they read with the intended contrast.
 */
export function Surface({ tone = "cream", children, className = "", style }: SurfaceProps) {
  return (
    <div className={`mf-surface mf-surface--${tone} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
