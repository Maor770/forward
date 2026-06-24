import * as React from "react";

export interface ExploreCtaProps {
  /** Uppercase eyebrow label, e.g. "Project #1". */
  label?: React.ReactNode;
  /** The CTA title, e.g. "Headquarters & Visitor Center". */
  title: React.ReactNode;
  /** Link target. Renders an anchor when set, otherwise a button. */
  href?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
}

/**
 * ExploreCta — a navy navigation tile with a gold eyebrow label, a gold-bright
 * title, and a trailing arrow that slides on hover. Used in the "Explore the
 * plan" row to jump into each project.
 */
export function ExploreCta({ label, title, href, onClick, className = "" }: ExploreCtaProps) {
  const cls = `v3-explore-cta ${className}`.trim();
  const content = (
    <>
      <span className="v3-explore-cta-text">
        {label && <span className="v3-explore-cta-label">{label}</span>}
        <span className="v3-explore-cta-title">{title}</span>
      </span>
      <span className="v3-explore-cta-arrow" aria-hidden="true">→</span>
    </>
  );
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{content}</a>
  ) : (
    <button className={cls} type="button" onClick={onClick}>{content}</button>
  );
}
