import React from "react";
import { Badge } from "@figma/my-make-file";

export function Default() {
  return <Badge>New</Badge>;
}

export function Secondary() {
  return <Badge variant="secondary">Draft</Badge>;
}

export function Destructive() {
  return <Badge variant="destructive">Error</Badge>;
}

export function Outline() {
  return <Badge variant="outline">Pending</Badge>;
}

export function GameBadges() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge>2025</Badge>
      <Badge variant="secondary">3 strikes</Badge>
      <Badge variant="destructive">Strike!</Badge>
    </div>
  );
}
