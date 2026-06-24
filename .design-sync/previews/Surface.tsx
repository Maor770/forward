import * as React from "react";
import { Surface } from "@maorforward/ds";

const sample = (label: string) => (
  <div>
    <h3 className="mf-heading" style={{ fontSize: "1.4rem", marginBottom: ".4rem" }}>{label}</h3>
    <p style={{ fontFamily: "var(--sans)", margin: 0 }}>Maor brings the Rebbe's sichos to children.</p>
  </div>
);

export const Cream = () => <Surface tone="cream">{sample("Cream")}</Surface>;
export const Paper = () => <Surface tone="paper">{sample("Paper")}</Surface>;
export const Navy = () => <Surface tone="navy">{sample("Navy")}</Surface>;
export const Elevated = () => <Surface tone="elevated">{sample("Elevated")}</Surface>;
