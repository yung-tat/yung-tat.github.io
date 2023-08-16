import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Layout from "./components/Layout";
import { HashRouter } from "react-router-dom";

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
