import * as React from "react";
import { IconButton, Surface } from "@maorforward/ds";

const ShareIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const MailIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);

export const Bare = () => (
  <Surface tone="paper">
    <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
      <IconButton aria-label="Share" title="Share" variant="bare">{ShareIcon}</IconButton>
      <IconButton aria-label="Email" title="Email" variant="bare">{MailIcon}</IconButton>
    </div>
  </Surface>
);

export const Circle = () => (
  <Surface tone="navy">
    <IconButton aria-label="Email" title="Email" variant="circle">{MailIcon}</IconButton>
  </Surface>
);
