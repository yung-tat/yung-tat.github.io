import { Box, Divider, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        width: "250px",
        height: "100vh",
        borderRight: "1px solid rgba(0,0,0,0.15)",
        backgroundColor: theme.palette.primary.main,
        paddingX: 4,
      })}
    >
      <Box>
        <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
        <Divider />
        <Typography>Web Developer</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          Student in Computational Mathematics
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
