import { Box, Chip, Divider, Typography } from "@mui/material";
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
import InfoCard from "../../components/InfoCard";
import { getChipStyle } from "../../utils/main";
import AboutMe from "./components/AboutMe";
import MyStack from "./components/MyStack";

const Main = () => {
  return (
    <>
      <AboutMe />
      <MyStack />
    </>
  );
};

export default Main;
