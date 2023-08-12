import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";

interface IInfoCard {
  children: ReactNode;
}

const InfoCard: FC<IInfoCard> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        backgroundColor: "#FFF",
        borderRadius: 2,
        border: "1px solid rgba(0,0,0,0.15)",
        marginBottom: 2,
        display: "flex",
      }}
    >
      {children}
    </Grid>
  );
};

export default InfoCard;
