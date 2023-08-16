import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../Sidebar";
import Main from "../../pages/Main";
import { blurEffect } from "../../constants/common";
import { Route, Router, Routes } from "react-router-dom";
import Experiences from "../../pages/Experiences";
import Projects from "../../pages/Projects";
import useScreenSize from "../../hooks/useScreenSize";

const Layout = () => {
  const screenSize = useScreenSize();
  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        display: "flex",
        flexDirection: screenSize == "small" ? "column" : "row",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Sidebar />
      <Box
        sx={(theme) => ({
          flex: 1,
          ...(screenSize == "small"
            ? { padding: 4 }
            : {
                paddingY: 12,
                paddingRight: screenSize == "large" ? 24 : 8,
                paddingLeft: 8,
              }),
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
