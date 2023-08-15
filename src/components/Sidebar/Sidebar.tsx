import {
  Create,
  GitHub,
  Home,
  Interests,
  LinkedIn,
  RateReview,
  WorkHistory,
} from "@mui/icons-material";
import { Box, Divider, IconButton, MenuItem, Typography } from "@mui/material";
import ContactLinks from "./components/ContactLinks";
import NavLinks from "./components/NavLinks";
import SidebarHeader from "./components/SidebarHeader";
import { blurEffect, darkBorder } from "../../constants/common";

const Sidebar = () => {
  return (
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
          marginLeft: 24,
          boxSizing: "border-box",
          height: "100%",
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
