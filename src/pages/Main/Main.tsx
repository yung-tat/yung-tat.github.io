import { Typography } from "@mui/material";
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
    <TitledContent title="About Me:" subtext="">
      <Typography sx={{ marginBottom: 2 }}>
        I'm a student at the University of Waterloo majoring in Honours
        Mathematics and specializing in Computational Mathematics. I do web dev
        stuff and I hope to get into game dev in the future.
      </Typography>
      <Typography sx={{ fontSize: "36px" }}>My Timeline:</Typography>
      <MyTimeline />
      <Typography sx={{ fontSize: "36px" }}>Interests:</Typography>
      <Typography>
        <b>Movies: </b>
        {movies.join(" / ")}
      </Typography>
      <Typography>
        <b>Shows: </b>
        {shows.join(" / ")}
      </Typography>
      <Typography>
        <b>Hobbies: </b>
        {hobbies.join(" / ")}
      </Typography>
    </TitledContent>
  );
};

export default Main;
