import * as React from "react";
import { Footer, Button, IconButton } from "@maorforward/ds";

const logo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'>` +
    `<text x='100' y='42' font-size='40' text-anchor='middle' fill='#E8C97D' font-family='Georgia, serif' font-style='italic'>Maor</text>` +
    `</svg>`
)}`;

const WhatsApp = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9C23.9 5.34 18.6 0 12.05 0m0 21.79h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88"/>
  </svg>
);
const MailIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);

export const Global = () => (
  <Footer
    name="Chanoch Chaskind"
    meta="+1-929-333-0248 · Chanoch@maor.org"
    logoSrc={logo}
    logoAlt="Maor"
    actions={
      <>
        <Button variant="primary" icon={WhatsApp} href="#">Let's Talk</Button>
        <IconButton aria-label="Email Chanoch" title="Email" variant="circle">{MailIcon}</IconButton>
      </>
    }
  />
);
