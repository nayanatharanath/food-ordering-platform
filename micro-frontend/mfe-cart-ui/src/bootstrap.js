import React from "react";
import { createRoot } from "react-dom/client";
import CartPage from "./components/pages/CartPage/CartPage";

const container = document.getElementById("menu-root");

if (container) {
  const root = createRoot(container);
  root.render(<CartPage />);
}
