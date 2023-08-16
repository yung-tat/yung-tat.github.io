import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { darkBorder } from "../../constants/common";
import { navlinks } from "../../constants/sidebar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import NavLinks from "../Sidebar/components/NavLinks";

const Navbar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
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
  );
};

export default Navbar;
