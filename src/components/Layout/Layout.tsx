import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import Sidebar from "../Sidebar";
import InfoCard from "../InfoCard";
import TitledContent from "../TitledContent";
import Experiences from "../../pages/Experiences";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../../pages/Main";
import Interests from "../../pages/Interests";
import Projects from "../../pages/Projects";
import { blurEffect } from "../../constants/common";

const Layout = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        display: "flex",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Sidebar />
      <Box
        sx={(theme) => ({
          flex: 1,
          padding: 4,
          backgroundColor: theme.palette.primary.main,
          filter: blurEffect,
        })}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<>ERRORS</>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
