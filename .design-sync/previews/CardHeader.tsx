import React from "react";
import { CardHeader, CardTitle, CardDescription } from "@figma/my-make-file";

export function WithTitleAndDescription() {
  return (
    <CardHeader style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <CardTitle>Plot Twist!</CardTitle>
      <CardDescription>Guess the movie from a redacted synopsis</CardDescription>
    </CardHeader>
  );
}

export function TitleOnly() {
  return (
    <CardHeader style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <CardTitle>Game Over</CardTitle>
    </CardHeader>
  );
}
