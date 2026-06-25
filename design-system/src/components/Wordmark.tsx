import * as React from "react";

export interface WordmarkProps {
  /** The wordmark text. Defaults to "MaorForward". */
  label?: string;
  /** Link target. Renders an anchor when set, otherwise a span. */
  href?: string;
  /** Show the trailing diagonal "forward" arrow. */
  showArrow?: boolean;
  className?: string;
}

/**
 * Wordmark — the MaorForward campaign wordmark: a Vidaloka serif label in warm
 * gold with an optional upward-right arrow glyph signalling "forward". Used at
 * the top-left of every page.
 */
export function Wordmark({
  label = "MaorForward",
  href,
  showArrow = true,
  className = "",
}: WordmarkProps) {
  const inner = (
    <>
      <span className="cwm-text">{label}</span>
      {showArrow && (
        <span className="cwm-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="18" x2="18" y2="6" />
            <polyline points="9,6 18,6 18,15" />
          </svg>
        </span>
      )}
    </>
  );
  const cls = `campaign-wordmark ${className}`.trim();
  return href ? (
    <a className={cls} href={href} aria-label={label}>{inner}</a>
  ) : (
    <span className={cls} aria-label={label}>{inner}</span>
  );
}
