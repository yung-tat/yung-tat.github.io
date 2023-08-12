import { ThemeProvider, createTheme } from "@mui/material";
import theme from "./utils/theme";
import Layout from "./components/Layout";
import { BrowserRouter, HashRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
