import {
  Create,
  Home,
  Interests,
  RateReview,
  WorkHistory,
} from "@mui/icons-material";
import { INavLink } from "../../../../types/common";
import { MenuItem, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "../../../../constants/sidebar";

const NavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return navlinks.map((navlink) => (
    <MenuItem
      sx={(theme) => ({
        marginBottom: 2,
        paddingX: 4,
        color:
          location.pathname == navlink.path
            ? theme.palette.secondary.main
            : undefined,
        transition: theme.transitions.create(["background-color", "color"], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
      })}
      onClick={() => navigate(navlink.path)}
      disableGutters
    >
      {navlink.icon}
      <Typography sx={{ fontSize: "20px", marginLeft: 2 }}>
        {navlink.title}
      </Typography>
    </MenuItem>
  ));
};

export default NavLinks;
