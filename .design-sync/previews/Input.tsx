import React from "react";
import { Input } from "@figma/my-make-file";

export function Default() {
  return <Input placeholder="Type your guess..." />;
}

export function WithValue() {
  return <Input defaultValue="The Dark Knight" />;
}

export function Disabled() {
  return <Input placeholder="Guess locked" disabled />;
}

export function SearchType() {
  return <Input type="search" placeholder="Search movies..." />;
}
