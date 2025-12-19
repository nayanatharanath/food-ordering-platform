import React, { Suspense } from "react";

const Header = React.lazy(() => import("shared/Header"));

export default function App() {
  return React.createElement(
    Suspense,
    { fallback: React.createElement("div", null, "Loading Header...") },
    React.createElement(Header)
  );
}
