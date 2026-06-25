import * as React from "react";
import { ExploreCta, Surface } from "@maorforward/ds";

export const Single = () => (
  <Surface tone="navy">
    <ExploreCta label="Project #1" title="Headquarters & Visitor Center" href="#" />
  </Surface>
);

export const Pair = () => (
  <Surface tone="navy">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.6rem" }}>
      <ExploreCta label="Project #1" title="Headquarters & Visitor Center" href="#" />
      <ExploreCta label="Project #2" title="Custom AI System" href="#" />
    </div>
  </Surface>
);
