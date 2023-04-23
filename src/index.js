import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Search from "./Search";
import Weather from "./Weather"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather />
  </StrictMode>
);