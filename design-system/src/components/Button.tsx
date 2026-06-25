import * as React from "react";

export interface ButtonProps {
  /** Button label / content. */
  children?: React.ReactNode;
  /** `primary` is the gold gradient pill ("Let's Talk"); `secondary` is the navy fill. */
  variant?: "primary" | "secondary";
  /** Optional leading icon (e.g. an inline SVG). */
  icon?: React.ReactNode;
  /** Render as an anchor pointing here instead of a <button>. */
  href?: string;
  /** Native button type when rendered as a button. */
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
  className?: string;
}

/**
 * Button — the primary call-to-action pill. Rounded, condensed-Fredoka label,
 * gold gradient (primary) or navy fill (secondary). Renders an <a> when `href`
 * is provided, otherwise a <button>.
 */
export function Button({
  children,
  variant = "primary",
  icon,
  href,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const cls = `mf-btn mf-btn--${variant} ${className}`.trim();
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{content}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{content}</button>
  );
}
