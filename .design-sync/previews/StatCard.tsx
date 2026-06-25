import * as React from "react";
import { StatCard, Surface } from "@maorforward/ds";

const VideoIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "64px", height: "64px" }}>
    <rect x="2" y="5" width="20" height="14" rx="2" /><polygon points="10,9 15,12 10,15" fill="currentColor" stroke="none" />
  </svg>
);
const UsersIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "64px", height: "64px" }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </svg>
);

export const Single = () => (
  <Surface tone="navy">
    <StatCard icon={VideoIcon} value="1,137" label="English Videos" plus />
  </Surface>
);

export const Row = () => (
  <Surface tone="navy">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
      <StatCard icon={VideoIcon} value="1,137" label="English Videos" plus />
      <StatCard icon={VideoIcon} value="799" label="Hebrew Videos" plus />
      <StatCard icon={VideoIcon} value="3,563" label="Daily Rebbe Videos" plus />
      <StatCard icon={UsersIcon} value="103,000" label="Maor Users" plus />
    </div>
  </Surface>
);

export const NoIcon = () => (
  <Surface tone="navy">
    <StatCard value="2.5M" label="Capital Campaign" />
  </Surface>
);
