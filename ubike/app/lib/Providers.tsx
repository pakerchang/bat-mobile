"use client";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/muiTheme";

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Providers;
