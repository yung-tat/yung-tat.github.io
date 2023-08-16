import { createTheme } from "@mui/material";

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
  typography: { fontFamily: "Rubik", fontSize: 16 },
});

export default theme;
