import * as React from "react";

export interface SectionHeadingProps {
  /** The heading text. */
  children?: React.ReactNode;
  /** Optional supporting lede paragraph below the heading. */
  lede?: React.ReactNode;
  /** Tone of the surface the heading sits on. `dark` → bright-gold heading on
   *  navy; `cream` → warm-gold heading on parchment. */
  tone?: "dark" | "cream";
  /** Use the slightly smaller "shrink" heading size. */
  shrink?: boolean;
  className?: string;
}

/**
 * SectionHeading — a centered section title in condensed Fredoka with an
 * optional lede paragraph. Gold-bright on navy, warm-gold on cream. `<strong>`
 * inside the lede is emphasised in gold.
 */
export function SectionHeading({
  children,
  lede,
  tone = "dark",
  shrink = false,
  className = "",
}: SectionHeadingProps) {
  const onCream = tone === "cream";
  return (
    <div className={`mf-section-heading-block ${className}`.trim()}>
      <h2
        className={[
          "v3-section-heading",
          shrink ? "v3-heading-shrink" : "",
          onCream ? "v3-section-heading--on-cream" : "",
        ].filter(Boolean).join(" ")}
      >
        {children}
      </h2>
      {lede && (
        <p className={`v3-section-lede ${onCream ? "v3-section-lede--on-cream" : ""}`.trim()}>{lede}</p>
      )}
    </div>
  );
}
