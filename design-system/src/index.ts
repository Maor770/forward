/**
 * MaorForward Design System
 * Components and tokens extracted from the maorforward.org capital-campaign site.
 *
 * Import the stylesheet once at your app root:
 *   import "@maorforward/ds/styles.css";
 */
export { Surface } from "./components/Surface";
export type { SurfaceProps } from "./components/Surface";

export { Wordmark } from "./components/Wordmark";
export type { WordmarkProps } from "./components/Wordmark";

export { Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { IconButton } from "./components/IconButton";
export type { IconButtonProps } from "./components/IconButton";

export { Hero } from "./components/Hero";
export type { HeroProps } from "./components/Hero";

export { StatCard } from "./components/StatCard";
export type { StatCardProps } from "./components/StatCard";

export { SectionHeading } from "./components/SectionHeading";
export type { SectionHeadingProps } from "./components/SectionHeading";

export { AudienceCard } from "./components/AudienceCard";
export type { AudienceCardProps } from "./components/AudienceCard";

export { PillarCard } from "./components/PillarCard";
export type { PillarCardProps } from "./components/PillarCard";

export { PointCard } from "./components/PointCard";
export type { PointCardProps } from "./components/PointCard";

export { StakesCard } from "./components/StakesCard";
export type { StakesCardProps } from "./components/StakesCard";

export { ExploreCta } from "./components/ExploreCta";
export type { ExploreCtaProps } from "./components/ExploreCta";

export { Footer } from "./components/Footer";
export type { FooterProps } from "./components/Footer";

/** Design tokens (hex values) mirrored from the stylesheet `:root`. */
export const tokens = {
  color: {
    cream: "#F4ECD8",
    creamSoft: "#FAF3E2",
    creamDeep: "#E8DBB8",
    paper: "#E7DFD5",
    goldWarm: "#9e6e36",
    goldGlow: "#c69556",
    gold: "#C9A961",
    goldBright: "#E8C97D",
    brownSoft: "#65553c",
    blueDeep: "#0A1A38",
    blueDeeper: "#06122A",
    blueElevated: "#13284E",
    navy: "#0B1E3F",
    burgundy: "#9B1B2E",
    textWarm: "#F5EBD3",
  },
  font: {
    heading: "'Fredoka', 'Inter', system-ui, sans-serif",
    serif: "'Vidaloka', 'Cormorant Garamond', Georgia, serif",
    sans: "'Noto Sans', 'Inter', system-ui, sans-serif",
  },
} as const;
