import * as React from "react";
import { StakesCard, Surface } from "@maorforward/ds";

const XIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);
const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5,12 10,17 19,7" />
  </svg>
);

export const Before = () => (
  <Surface tone="navy">
    <StakesCard variant="before" icon={XIcon}>
      A generation of children left unempowered, relying on secular media, and missing their crucial role in bringing Moshiach.
    </StakesCard>
  </Surface>
);

export const After = () => (
  <Surface tone="navy">
    <StakesCard variant="after" icon={CheckIcon}>
      Every child educated, uplifted, and equipped with the mindset to change the world.
    </StakesCard>
  </Surface>
);

export const Comparison = () => (
  <Surface tone="navy">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4rem" }}>
      <StakesCard variant="before" icon={XIcon}>Children relying on secular media, missing their role in bringing Moshiach.</StakesCard>
      <StakesCard variant="after" icon={CheckIcon}>Every child educated, uplifted, and equipped to change the world.</StakesCard>
    </div>
  </Surface>
);
