import React, { Suspense } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  React.createElement(
    Suspense,
    { fallback: React.createElement("div", null, "Loading...") },
    React.createElement(App)
  )
);
