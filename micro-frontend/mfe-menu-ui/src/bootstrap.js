import React from "react";
import { createRoot } from "react-dom/client";
import MenuPage from "./MenuPage.jsx";

const container = document.getElementById("menu-root");

if (container) {
  const root = createRoot(container);
  root.render(<MenuPage />);
}
