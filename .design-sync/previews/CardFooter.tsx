import React from "react";
import { CardFooter, Button } from "@figma/my-make-file";

export function WithActions() {
  return (
    <CardFooter style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <Button variant="outline" style={{ marginRight: 8 }}>Skip</Button>
      <Button>Play Again</Button>
    </CardFooter>
  );
}

export function WithSingleButton() {
  return (
    <CardFooter style={{ border: "1px solid #e5e7eb", borderRadius: 12 }}>
      <Button style={{ width: "100%" }}>Start Game</Button>
    </CardFooter>
  );
}
