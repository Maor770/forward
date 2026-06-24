import * as React from "react";
import { PointCard, Surface } from "@maorforward/ds";

const ShieldIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5 4 9 8 10c4-1 8-5 8-10V6l-8-4z" /><polyline points="9,12 11.5,14.5 15.5,10" />
  </svg>
);
const CycleIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 15.5-6.3" /><polyline points="19,2 19,6 15,6" />
    <path d="M21 12a9 9 0 0 1-15.5 6.3" /><polyline points="5,22 5,18 9,18" />
  </svg>
);

export const WhyWeCan = () => (
  <Surface tone="paper" style={{ paddingTop: "2.5rem" }}>
    <PointCard title="Why we can do this" icon={ShieldIcon}>
      {[
        <>We are not starting from scratch. We have the data and the audience to prove this works B"H.</>,
        <>By expanding into the broader frum and non-frum markets, we project our reach will double in the next year alone.</>,
      ]}
    </PointCard>
  </Surface>
);

export const HowWeSustain = () => (
  <Surface tone="paper" style={{ paddingTop: "2.5rem" }}>
    <PointCard title="How we'll sustain it" icon={CycleIcon}>
      {[
        <><strong>Launch:</strong> Powered by seed donations.</>,
        <><strong>Self-Sustain:</strong> Driven by subscriptions and product sales.</>,
      ]}
    </PointCard>
  </Surface>
);
