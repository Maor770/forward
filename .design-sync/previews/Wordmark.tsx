import * as React from "react";
import { Wordmark, Surface } from "@maorforward/ds";

export const Default = () => (
  <Surface tone="cream">
    <Wordmark />
  </Surface>
);

export const Linked = () => (
  <Surface tone="cream">
    <Wordmark href="#" label="MaorForward" />
  </Surface>
);

export const NoArrow = () => (
  <Surface tone="cream">
    <Wordmark showArrow={false} />
  </Surface>
);
