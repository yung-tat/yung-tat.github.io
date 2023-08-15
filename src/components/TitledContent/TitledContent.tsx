import { Box, Divider, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ITitledContent {
  title: string;
  subtext: string;
  children: ReactNode;
}

const TitledContent: FC<ITitledContent> = ({ title, subtext, children }) => {
  return (
    <>
      <Box>
        <Typography sx={{ fontSize: "36px", marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography>{subtext}</Typography>
      </Box>
      {children}
    </>
  );
};

export default TitledContent;
