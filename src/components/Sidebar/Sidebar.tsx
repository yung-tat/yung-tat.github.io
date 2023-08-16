import {
  ArrowDownward,
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  Create,
  GitHub,
  Home,
  Interests,
  LinkedIn,
  RateReview,
  WorkHistory,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import ContactLinks from "./components/ContactLinks";
import NavLinks from "./components/NavLinks";
import SidebarHeader from "./components/SidebarHeader";
import { blurEffect, darkBorder } from "../../constants/common";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { navlinks } from "../../constants/sidebar";
import useScreenSize from "../../hooks/useScreenSize";

const Sidebar = () => {
  const screenSize = useScreenSize();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return screenSize == "small" ? (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "64px",
          justifyContent: "space-between",
          borderBottom: "1px solid " + darkBorder,
        }}
      >
        <Typography sx={{ ml: 4, fontSize: "20px" }}>
          {navlinks.find((page) => page.path == location.pathname)?.title}
        </Typography>
        <IconButton
          sx={{ mr: 2, borderRadius: 2 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ArrowDropDown />
        </IconButton>
      </Box>
      <Collapse
        in={isExpanded}
        sx={{ borderBottom: "1px solid " + darkBorder }}
      >
        <NavLinks disableMargin />
      </Collapse>
    </>
  ) : (
    <Box
      component="nav"
      sx={{
        width: "40vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          paddingY: 12,
          marginLeft: screenSize == "large" ? 24 : 8,
          boxSizing: "border-box",
          height: "100%",
          zIndex: 100,
          // borderRight: "1px solid " + darkBorder,
          filter: blurEffect,
        }}
      >
        <SidebarHeader />
        <NavLinks />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <ContactLinks />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
