import { MenuItem, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "../../../../constants/sidebar";
import { FC } from "react";

interface INavLinks {
  disableMargin?: boolean;
}

const NavLinks: FC<INavLinks> = ({ disableMargin = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return navlinks.map((navlink) => (
    <MenuItem
      sx={(theme) => ({
        display: "flex",
        alignContent: "center",
        marginBottom: disableMargin ? 0 : 2,
        paddingX: 4,
        color:
          location.pathname === navlink.path
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
      <Typography sx={{ fontSize: "20px", marginLeft: 2, lineHeight: 1 }}>
        {navlink.title}
      </Typography>
    </MenuItem>
  ));
};

export default NavLinks;
