import * as React from "react";

export interface AudienceCardProps {
  /** Heading, e.g. "The Frum Child". */
  title: React.ReactNode;
  /** Body copy describing the audience. `<strong>`/`<em>` inside are auto-gold. */
  children?: React.ReactNode;
  /** Illustration source for the audience figure. */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * AudienceCard — one of the three "problem" rows: an audience illustration
 * beside a gold-underlined heading and supporting paragraph. Built for a navy
 * section; the heading carries a short gold underline rule.
 */
export function AudienceCard({
  title,
  children,
  imageSrc,
  imageAlt = "",
  className = "",
}: AudienceCardProps) {
  return (
    <div className={`v3-problem-row ${className}`.trim()}>
      {imageSrc && (
        <div
          className="v3-problem-img"
          role="img"
          aria-label={imageAlt}
          style={{ backgroundImage: `url("${imageSrc}")` }}
        />
      )}
      <div className="v3-problem-content">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
