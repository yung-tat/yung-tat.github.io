import { createTheme } from "@mui/material";

const lightTheme = {
  palette: {
    primary: {
      main: "#E5F0F6",
    },
    secondary: {
      main: "#E13E4B",
    },
    text: {
      primary: "#51535D",
    },
  },
  typography: { fontFamily: "Rubik" },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#081528",
    },
    secondary: {
      main: "#E13E4B",
    },
    background: {
      default: "#081528",
    },
    text: {
      primary: "#c9c9c9",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#c9c9c9",
        },
      },
    },
  },
  typography: { fontFamily: "Rubik" },
});

export default theme;
