import * as React from "react";

export interface IconButtonProps {
  /** The icon, typically an inline SVG. */
  children?: React.ReactNode;
  /** Accessible label — required since the control is icon-only. */
  "aria-label": string;
  /** `bare` is the borderless header action; `circle` is the bordered footer action. */
  variant?: "bare" | "circle";
  /** Render as an anchor pointing here instead of a <button>. */
  href?: string;
  title?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
}

/**
 * IconButton — an icon-only action (share, WhatsApp, email). `bare` for the
 * header strip, `circle` for the footer. Gold by default, brightening on hover.
 */
export function IconButton({
  children,
  variant = "bare",
  href,
  title,
  onClick,
  className = "",
  ...rest
}: IconButtonProps) {
  const cls = `mf-icon-btn mf-icon-btn--${variant} ${className}`.trim();
  return href ? (
    <a className={cls} href={href} title={title} onClick={onClick} aria-label={rest["aria-label"]}>{children}</a>
  ) : (
    <button className={cls} type="button" title={title} onClick={onClick} aria-label={rest["aria-label"]}>{children}</button>
  );
}
