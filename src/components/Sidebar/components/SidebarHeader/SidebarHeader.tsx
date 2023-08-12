import { Box, Divider, Typography } from "@mui/material";

const SidebarHeader = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
      <Divider />
      <Typography>Web Developer</Typography>
      <Typography sx={{ fontSize: "12px" }}>
        Student in Computational Mathematics
      </Typography>
      <Divider />
    </Box>
  );
};

export default SidebarHeader;
