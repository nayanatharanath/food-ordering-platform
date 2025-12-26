import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00C853",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2979FF",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F9FAFB",
    },
    error: { main: "#FF1744" },
    warning: { main: "#FF9100" },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
