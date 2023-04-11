import { Link } from "@solidjs/router";
import { Component } from "solid-js";

export const HomePage: Component = () => {
  return (
    <div class="flex flex-col">
      <Link href="/new-form">Create New Form</Link>
      <Link href="/complete-form">Load/Complete Form</Link>
    </div>
  );
};
