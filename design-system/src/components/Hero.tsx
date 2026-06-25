import * as React from "react";

export interface HeroProps {
  /** Small gold campaign chip above the headline. */
  badge?: React.ReactNode;
  /** First headline line, rendered large in warm gold (e.g. "Maor."). */
  lead: React.ReactNode;
  /** Second headline line, rendered smaller in brown (the supporting clause). */
  title: React.ReactNode;
  /** Sub-paragraphs below the headline. `<strong>` inside is auto-gold. */
  subParagraphs?: React.ReactNode[];
  /** Hero image source (the building render on the live site). */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * Hero — the homepage hero: a campaign badge, a two-tone condensed headline
 * (gold lead line + brown supporting line), supporting paragraphs, and a
 * product image in a two-column layout that stacks on narrow screens.
 */
export function Hero({
  badge,
  lead,
  title,
  subParagraphs = [],
  imageSrc,
  imageAlt = "",
  className = "",
}: HeroProps) {
  return (
    <section className={`v3-hero-inner ${className}`.trim()}>
      <div className="v3-hero-text">
        {badge && <div className="v3-hero-badge">{badge}</div>}
        <h1 className="v3-hero-h1">
          <span className="hl-maor">{lead}</span>
          <span className="hl-rest">{title}</span>
        </h1>
        {subParagraphs.map((p, i) => (
          <p className="v3-hero-sub" key={i}>{p}</p>
        ))}
      </div>
      {imageSrc && (
        <div className="v3-hero-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      )}
    </section>
  );
}
