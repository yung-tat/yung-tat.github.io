import { ThemeProvider, createTheme } from "@mui/material";
import theme from "./utils/theme";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
