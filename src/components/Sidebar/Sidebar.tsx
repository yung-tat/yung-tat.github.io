import { Box } from "@mui/material";
import ContactLinks from "./components/ContactLinks";
import NavLinks from "./components/NavLinks";
import SidebarHeader from "./components/SidebarHeader";
import { blurEffect } from "../../constants/common";
import useScreenSize from "../../hooks/useScreenSize";
import Navbar from "../Navbar";

const Sidebar = () => {
  const screenSize = useScreenSize();

  return screenSize === "small" ? (
    <Navbar />
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
          marginLeft: screenSize === "large" ? 24 : 8,
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
