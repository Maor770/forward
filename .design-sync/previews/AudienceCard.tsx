import * as React from "react";
import { AudienceCard, Surface } from "@maorforward/ds";

// Simple gold child-figure silhouette so the card reads without external assets.
const figure = (accent: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>` +
      `<circle cx='90' cy='52' r='30' fill='${accent}'/>` +
      `<path d='M40 168 C40 116 60 92 90 92 C120 92 140 116 140 168 Z' fill='${accent}'/>` +
      `</svg>`
  )}`;

export const Frum = () => (
  <Surface tone="navy">
    <AudienceCard title="The Frum Child" imageSrc={figure("#9e6e36")} imageAlt="The frum child">
      Without the right tools, Yiddishkeit can feel like a checklist. Maor will bring the warmth of Chassidus — helping every child connect to their neshama with <strong>joy</strong>.
    </AudienceCard>
  </Surface>
);

export const Secular = () => (
  <Surface tone="navy">
    <AudienceCard title="The Unaffiliated Jewish Child" imageSrc={figure("#c69556")} imageAlt="The unaffiliated Jewish child">
      For many Jewish kids, Judaism feels like just a culture. Maor will show them the <em>beauty of Torah</em> — and the unique purpose only they can live.
    </AudienceCard>
  </Surface>
);

export const World = () => (
  <Surface tone="navy">
    <AudienceCard title="The Non-Jewish Child" imageSrc={figure("#E8C97D")} imageAlt="The non-Jewish child">
      Every child has a mission. Maor will help them discover their purpose — and live with kindness through the <strong>Sheva Mitzvos Bnei Noach</strong>.
    </AudienceCard>
  </Surface>
);
