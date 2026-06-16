import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@figma/my-make-file";

export function MovieCard() {
  return (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>The Dark Knight</CardTitle>
        <CardDescription>2008 · Action · Crime · Drama</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.5 }}>
          When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
        </p>
      </CardContent>
      <CardFooter>
        <Button style={{ width: "100%" }}>Play Again</Button>
      </CardFooter>
    </Card>
  );
}

export function SimpleCard() {
  return (
    <Card style={{ maxWidth: 320, padding: 8 }}>
      <CardContent>
        <p style={{ fontSize: 14 }}>A flexible card component for displaying grouped content.</p>
      </CardContent>
    </Card>
  );
}
