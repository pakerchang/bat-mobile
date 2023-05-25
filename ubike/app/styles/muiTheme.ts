import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#B5CC22" },
    secondary: { main: "#677510" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: "none"
        }
      }
    }
  }
});

export default theme;
