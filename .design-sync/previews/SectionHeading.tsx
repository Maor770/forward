import * as React from "react";
import { SectionHeading, Surface } from "@maorforward/ds";

export const OnNavy = () => (
  <Surface tone="navy">
    <SectionHeading lede={<>The Rebbe gave us a clear directive: <strong>prepare the world for Moshiach.</strong></>}>
      A Generation Desperate for the Message
    </SectionHeading>
  </Surface>
);

export const OnCream = () => (
  <Surface tone="paper">
    <SectionHeading tone="cream" lede={<>Your foundational donation doesn't just disappear — it <strong>builds on itself</strong>.</>}>
      What is at stake?
    </SectionHeading>
  </Surface>
);

export const Shrink = () => (
  <Surface tone="navy">
    <SectionHeading shrink>Maor Headquarters &amp; Visitor Center</SectionHeading>
  </Surface>
);
