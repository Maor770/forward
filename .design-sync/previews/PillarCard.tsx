import * as React from "react";
import { PillarCard } from "@maorforward/ds";

const cover = (accent: string, glyph: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'>` +
      `<rect width='400' height='225' fill='#0A1A38'/>` +
      `<text x='200' y='140' font-size='110' text-anchor='middle' fill='${accent}' font-family='sans-serif'>${glyph}</text>` +
      `</svg>`
  )}`;

export const Building = () => (
  <div style={{ maxWidth: 380 }}>
    <PillarCard
      imageSrc={cover("#E8C97D", "&#127963;")}
      imageAlt="Maor Headquarters"
      subtitle="Project #1"
      title="Maor Headquarters & Visitor Center"
      summary="A multi-floor building housing production offices, a distribution center, and an interactive Visitor Center."
      bullets={[
        <><strong>Office Space.</strong> Room to plan, create, and distribute our three new program tracks.</>,
        <><strong>Visitor Center.</strong> Kids step into a 3D, live-action scenario and navigate it with the Rebbe's sichos.</>,
        <><strong>Rentals.</strong> Generating rental income to sustain the building.</>,
      ]}
      ctaLabel="Building Plan"
      amount="$1.75M"
    />
  </div>
);

export const AI = () => (
  <div style={{ maxWidth: 380 }}>
    <PillarCard
      imageSrc={cover("#c69556", "✦")}
      imageAlt="Custom AI System"
      subtitle="Project #2"
      title="Custom, Proprietary AI System"
      summary="A custom system gives us strict control over narrative, characters, and messaging — every frame aligned with the Rebbe's teachings."
      bullets={[
        <><strong>Script Creation.</strong> AI trained on the Rebbe's values and visual guidelines.</>,
        <><strong>Animations.</strong> Disney-quality 3D for $2,000–$3,000 per video.</>,
      ]}
      ctaLabel="AI Plan"
      amount="$750K"
    />
  </div>
);
