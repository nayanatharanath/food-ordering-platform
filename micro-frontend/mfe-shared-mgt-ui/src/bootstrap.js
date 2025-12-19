import React from "react";
import Header from "./components/molecules/Header/Header";
import { createRoot } from "react-dom/client";

const container = document.getElementById("shared-root");
const root = createRoot(container);

root.render(React.createElement(Header));
