import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";
import { darkBorder } from "../../constants/common";

interface IInfoCard {
  children: ReactNode;
}

const InfoCard: FC<IInfoCard> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        // padding: 2,
        borderRadius: 2,
        // No border in dark mode
        // border: "1px solid " + darkBorder,
        marginBottom: 2,
        display: "flex",
      }}
    >
      {children}
    </Grid>
  );
};

export default InfoCard;
