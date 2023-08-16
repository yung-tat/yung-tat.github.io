import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";

interface IInfoCard {
  height?: string;
  children: ReactNode;
}

const InfoCard: FC<IInfoCard> = ({ height, children }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        marginBottom: 2,
        height: height,
      }}
    >
      {children}
    </Grid>
  );
};

export default InfoCard;
