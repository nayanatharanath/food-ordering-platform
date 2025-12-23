import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { lazy } from "react";
import { Suspense } from "react";

const MenuPage = lazy(() => import("menu/MenuPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading Menu...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
