import * as React from "react";

export interface PillarCardProps {
  /** Eyebrow above the title, e.g. "Project #1". */
  subtitle?: React.ReactNode;
  /** Card title, e.g. "Maor Headquarters & Visitor Center". */
  title: React.ReactNode;
  /** One-paragraph summary under the title. */
  summary?: React.ReactNode;
  /** Detail bullets, each rendered as a tinted rounded chip. `<strong>`/`<em>` auto-gold. */
  bullets?: React.ReactNode[];
  /** CTA label, e.g. "Building Plan". */
  ctaLabel?: React.ReactNode;
  /** Allocation amount shown as a pill on the CTA, e.g. "$1.75M". */
  amount?: React.ReactNode;
  /** Cover image source. */
  imageSrc?: string;
  imageAlt?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
}

/**
 * PillarCard — a large interactive project card on cream parchment: a gilt top
 * rule and inset border frame, a 16:9 cover image, eyebrow + title + summary,
 * a list of detail chips, and a gold gradient CTA carrying the allocation
 * amount. The whole card is a button.
 */
export function PillarCard({
  subtitle,
  title,
  summary,
  bullets = [],
  ctaLabel,
  amount,
  imageSrc,
  imageAlt = "",
  onClick,
  className = "",
}: PillarCardProps) {
  return (
    <button type="button" className={`v3-pillar-card ${className}`.trim()} onClick={onClick}>
      {imageSrc && (
        <div className="v3-pillar-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
      <div className="v3-pillar-body">
        {subtitle && <div className="v3-pillar-subtitle">{subtitle}</div>}
        <h3>{title}</h3>
        {summary && <p className="v3-pillar-summary">{summary}</p>}
        {bullets.length > 0 && (
          <ul className="v3-pillar-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {(ctaLabel || amount) && (
          <div className="v3-pillar-cta">
            <span className="v3-pillar-cta-text">
              <span className="v3-pillar-cta-label">{ctaLabel}</span>
              <span className="v3-pillar-cta-arrow" aria-hidden="true">→</span>
            </span>
            {amount && <span className="v3-pillar-cta-amount">{amount}</span>}
          </div>
        )}
      </div>
    </button>
  );
}
