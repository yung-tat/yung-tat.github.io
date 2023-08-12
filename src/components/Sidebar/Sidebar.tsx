import {
  Create,
  GitHub,
  Home,
  Interests,
  LinkedIn,
  RateReview,
  WorkHistory,
} from "@mui/icons-material";
import { Box, Divider, MenuItem, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { INavLink } from "../../types/common";

// const navlinks = ["Main", "Experiences", "Projects", "Interests", "Reviews"];
const navlinks: INavLink[] = [
  { title: "Main", path: "/", icon: <Home /> },
  { title: "Experiences", path: "/experiences", icon: <WorkHistory /> },
  { title: "Projects", path: "/projects", icon: <Create /> },
  { title: "Interests", path: "/interests", icon: <Interests /> },
  { title: "Reviews", path: "/reviews", icon: <RateReview /> },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        width: "284px",
        height: "100vh",
      })}
    >
      <Box
        sx={{
          paddingX: 4,
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          paddingY: 4,
          boxSizing: "border-box",
          height: "100%",
          borderRight: "1px solid rgba(0,0,0,0.15)",
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
          <Divider />
          <Typography>Web Developer</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            Student in Computational Mathematics
          </Typography>
          <Divider />
        </Box>

        {navlinks.map((navlink) => (
          <MenuItem
            sx={(theme) => ({
              marginBottom: 2,
              color:
                location.pathname == navlink.path
                  ? theme.palette.secondary.main
                  : undefined,
            })}
            onClick={() => navigate(navlink.path)}
            disableGutters
          >
            {navlink.icon}
            <Typography sx={{ fontSize: "20px", marginLeft: 2 }}>
              {navlink.title}
            </Typography>
          </MenuItem>
        ))}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Box>
            <LinkedIn
              fontSize="large"
              sx={(theme) => ({
                color: theme.palette.primary.dark,
                marginRight: 2,
              })}
            />
            <GitHub
              fontSize="large"
              sx={(theme) => ({ color: theme.palette.primary.dark })}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
