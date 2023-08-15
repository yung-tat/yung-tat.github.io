import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import Main from "../../pages/Main";
import { blurEffect } from "../../constants/common";
import { Route, Router, Routes } from "react-router-dom";
import Experiences from "../../pages/Experiences";
import Projects from "../../pages/Projects";

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
          paddingY: 12,
          paddingRight: 24,
          paddingLeft: 8,
          backgroundColor: theme.palette.primary.main,
          filter: blurEffect,
        })}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<>404 Homie.</>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
