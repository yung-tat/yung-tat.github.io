import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import Sidebar from "../Sidebar";
import InfoCard from "../InfoCard";
import TitledContent from "../TitledContent";
import Experiences from "../../pages/Experiences";
import { Route, Router, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={(theme) => ({
          flex: 1,
          padding: 4,
          backgroundColor: theme.palette.primary.main,
        })}
      >
        <Routes>
          <Route path="/" element={<>Test</>} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="*" element={<>ERRORS</>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
