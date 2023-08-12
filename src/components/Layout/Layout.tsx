import { Box } from "@mui/material";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
      }}
    >
      <Sidebar />
    </Box>
  );
};

export default Layout;
