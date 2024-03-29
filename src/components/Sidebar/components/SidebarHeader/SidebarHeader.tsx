import { Box, Divider, Typography } from "@mui/material";

const SidebarHeader = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 4 }}>
      <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
      <Divider sx={{ marginY: 1 }} />
      <Typography>Web Developer</Typography>
      <Typography sx={{ fontSize: "12px" }}>
        Student in at University of Waterloo
      </Typography>
      <Typography sx={{ fontSize: "12px" }}>
        Computational Mathematics, BMath
      </Typography>
      <Divider sx={{ marginY: 1 }} />
    </Box>
  );
};

export default SidebarHeader;
