import * as React from "react";
import { Hero, Surface } from "@maorforward/ds";

// Gold building render stand-in so the hero's image column is populated.
const building = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 460 460'>` +
    `<g fill='#9e6e36'>` +
    `<rect x='180' y='150' width='120' height='250'/>` +
    `<rect x='130' y='220' width='50' height='180'/>` +
    `<rect x='300' y='200' width='55' height='200'/>` +
    `<polygon points='240,90 175,152 305,152'/></g>` +
    `<g fill='#F4ECD8'>` +
    `<rect x='205' y='185' width='20' height='28'/><rect x='255' y='185' width='20' height='28'/>` +
    `<rect x='205' y='235' width='20' height='28'/><rect x='255' y='235' width='20' height='28'/>` +
    `<rect x='225' y='330' width='30' height='70'/></g></svg>`
)}`;

export const Homepage = () => (
  <Surface tone="cream" style={{ padding: "3rem" }}>
    <Hero
      badge="$2.5M Capital Campaign"
      lead="Maor."
      title="Because this generation needs to bring Moshiach."
      subParagraphs={[
        <>Maor presents the <strong>Rebbe's sichos</strong> and maamorim to kids in a way they truly live with — and the impact is real.</>,
        <>Partner to help Maor scale so <strong>every child</strong> becomes part of <strong>bringing Moshiach</strong>.</>,
      ]}
      imageSrc={building}
      imageAlt="Maor headquarters"
    />
  </Surface>
);

export const TextOnly = () => (
  <Surface tone="cream" style={{ padding: "3rem" }}>
    <Hero
      badge="Project #1"
      lead="A home for the mission."
      title="Maor Headquarters & Visitor Center."
      subParagraphs={[<>A multi-floor building housing production, distribution, and an interactive <strong>Visitor Center</strong>.</>]}
    />
  </Surface>
);
