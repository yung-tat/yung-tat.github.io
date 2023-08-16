import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const ContactLinks = () => {
  return (
    <Box sx={{ paddingX: 4 }}>
      <IconButton
        href="https://www.linkedin.com/in/issac-liu-890b281b1/"
        target="_blank"
        sx={{ marginRight: 1 }}
      >
        <LinkedIn
          fontSize="large"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        />
      </IconButton>
      <IconButton href="https://github.com/yung-tat" target="_blank">
        <GitHub
          fontSize="large"
          sx={(theme) => ({ color: theme.palette.text.primary })}
        />
      </IconButton>
    </Box>
  );
};

export default ContactLinks;
