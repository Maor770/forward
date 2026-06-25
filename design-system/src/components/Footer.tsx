import * as React from "react";

export interface FooterProps {
  /** Contact name, e.g. "Chanoch Chaskind". */
  name?: React.ReactNode;
  /** Contact meta line, e.g. phone · email. */
  meta?: React.ReactNode;
  /** Footer actions — typically a primary Button plus icon actions. */
  actions?: React.ReactNode;
  /** Logo image source. */
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
}

/**
 * Footer — the global navy footer: a gilt top rule, radial gold/burgundy glow,
 * a centered contact block, a row of actions ("Let's Talk" + icon buttons), and
 * the Maor logo.
 */
export function Footer({
  name,
  meta,
  actions,
  logoSrc,
  logoAlt = "Maor",
  className = "",
}: FooterProps) {
  return (
    <footer className={`global-footer ${className}`.trim()}>
      <div className="gf-inner">
        {(name || meta) && (
          <div className="gf-contact">
            {name && <span className="gf-name">{name}</span>}
            {meta && <span className="gf-meta">{meta}</span>}
          </div>
        )}
        {actions && <div className="gf-contact-row">{actions}</div>}
        {logoSrc && <img className="gf-logo" src={logoSrc} alt={logoAlt} />}
      </div>
    </footer>
  );
}
