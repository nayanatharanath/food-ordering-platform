import { Suspense, lazy } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles"
import AppRoutes from "./routes/AppRoutes";
import theme from "shared/theme"

const Header = lazy(() => import("shared/Header"));

// const theme = lazy(() => import("shared/theme"))

function NavigationListener() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      navigate("/cart");
    };

    window.addEventListener("ADD_TO_CART", handler);
    return () => window.removeEventListener("ADD_TO_CART", handler);
  }, [navigate]);

  return null;
}

export default function App() {
  console.log("Theme primary color: ", theme.palette.primary.main)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationListener />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
