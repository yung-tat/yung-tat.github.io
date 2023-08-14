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
        <Typography sx={{ fontSize: "52px", lineHeight: 1, marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography>{subtext}</Typography>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      {children}
    </>
  );
};

export default TitledContent;
