import { Box, Grid, Typography } from "@mui/material";
import InfoCard from "../../components/InfoCard";
import TitledContent from "../../components/TitledContent";

const Interests = () => {
  return (
    <TitledContent
      title="Interests"
      subtext="Things I like to spend my time on"
    >
      <InfoCard>
        <Typography>CATEGORY</Typography>
        <img src="" style={{ height: "250px" }} />
      </InfoCard>
    </TitledContent>
  );
};

export default Interests;
