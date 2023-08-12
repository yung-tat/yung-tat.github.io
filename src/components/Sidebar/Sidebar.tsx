import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Divider, MenuItem, Typography } from "@mui/material";

const navlinks = ["Main", "Experiences", "Projects", "Interests", "Reviews"];

const Sidebar = () => {
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

        {navlinks.map((link) => (
          <MenuItem sx={{ marginBottom: 2 }} disableGutters>
            <Typography sx={{ fontSize: "20px" }}>{link}</Typography>
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
