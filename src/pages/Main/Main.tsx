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

const Main = () => {
  return (
    <>
      <Typography sx={{ fontSize: "24px" }}>About Me:</Typography>
      <Typography sx={{ marginBottom: 2 }}>
        I'm a student at the University of Waterloo majoring in Honours
        Mathematics and specializing in Computational Mathematics. I do web dev
        stuff and I hope to get into game dev in the future.
      </Typography>
      <Typography sx={{ fontSize: "24px" }}>My Timeline:</Typography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.15,
          },
        }}
      >
        {timelineInfo.map((info) => (
          <TimelineEntry {...info} />
        ))}
      </Timeline>
    </>
  );
};

export default Main;
