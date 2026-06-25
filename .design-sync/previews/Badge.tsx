import * as React from "react";
import { Badge, Surface } from "@maorforward/ds";

export const Gold = () => (
  <Surface tone="cream">
    <Badge>$2.5M Capital Campaign</Badge>
  </Surface>
);

export const OnDark = () => (
  <Surface tone="navy">
    <Badge tone="onDark">$1.75M</Badge>
  </Surface>
);
