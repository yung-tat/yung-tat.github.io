import { Typography } from "@mui/material";
import InfoCard from "../../../../components/InfoCard";

const AboutMe = () => (
  <InfoCard>
    <Typography
      width="100%"
      sx={{ fontSize: "20px", borderBottom: "1px solid", marginBottom: 1 }}
    >
      Background
    </Typography>
    <Typography sx={{ marginBottom: 2 }}>
      Like most people my age, I grew up playing Minecraft. I loved the game and
      I soon started looking into modding which introduced me to the world of
      programming at 9.
    </Typography>
    <Typography sx={{ marginBottom: 2 }}>
      I currently study at the University of Waterloo majoring in Honours
      Mathematics and specializing in Computational Mathematics. I mainly do web
      development and would love to break into the game industry as well.
    </Typography>
  </InfoCard>
);

export default AboutMe;
