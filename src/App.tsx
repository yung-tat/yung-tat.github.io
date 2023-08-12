import { ThemeProvider, createTheme } from "@mui/material";
import theme from "./utils/theme";
import Layout from "./components/Layout";
import { BrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
