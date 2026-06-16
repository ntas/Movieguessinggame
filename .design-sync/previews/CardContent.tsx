import React from "react";
import { CardContent } from "@figma/my-make-file";

export function WithText() {
  return (
    <CardContent style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>
        When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.
      </p>
    </CardContent>
  );
}

export function WithList() {
  return (
    <CardContent style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <ul style={{ fontSize: 14, paddingLeft: 16, lineHeight: 2 }}>
        <li>Score: 1200</li>
        <li>Streak: 5</li>
        <li>Accuracy: 80%</li>
      </ul>
    </CardContent>
  );
}
