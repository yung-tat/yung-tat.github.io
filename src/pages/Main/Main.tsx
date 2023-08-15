import { Box, Divider, Typography } from "@mui/material";
import TitledContent from "../../components/TitledContent";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";
import TimelineEntry from "../../components/TimelineEntry";
import { timelineInfo } from "../../constants/timeline";
import MyTimeline from "./components/MyTimeline";
import { hobbies, movies, shows } from "../../constants/interests";

const Main = () => {
  return (
    <>
      <Typography sx={{ marginBottom: 2 }} id="about-me">
        Like most people my age, I grew up playing Minecraft. I loved the game
        and I soon started looking into modding which introduced me to the world
        of programming at 9.
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        I currently study at the University of Waterloo majoring in Honours
        Mathematics and specializing in Computational Mathematics. I mainly do
        web development and would love to break into the game industry as well.
      </Typography>
    </>
  );
};

export default Main;
