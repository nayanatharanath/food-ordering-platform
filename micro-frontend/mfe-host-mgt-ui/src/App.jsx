import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const Header = lazy(() => import("shared/Header"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <AppRoutes />
    </BrowserRouter>
  );
}
