import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

export const NavBar: Component = () => {
  const navigate = useNavigate();
  return (
    <nav class="w-full p-4 border border-solid border-b-1 border-gray-300">
      <button onClick={() => navigate("/")}>Back</button>
    </nav>
  );
};
