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
import useScreenSize from "../../hooks/useScreenSize";
import SidebarHeader from "../../components/Sidebar/components/SidebarHeader";

const Main = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <Box mb={4}>
        <Typography sx={{ fontSize: "36px" }}>Issac Liu</Typography>
        <Divider sx={{ marginY: 1 }} />
        <Typography>Web Developer</Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Student in at University of Waterloo
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>
          Computational Mathematics, BMath
        </Typography>
        <Divider sx={{ marginY: 1 }} />
      </Box>
      <AboutMe />
      <MyStack />
    </>
  );
};

export default Main;
