import { Timeline, timelineOppositeContentClasses } from "@mui/lab";
import { timelineInfo } from "../../../../constants/timeline";
import TimelineEntry from "../../../../components/TimelineEntry";

const MyTimeline = () => {
  return (
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
  );
};

export default MyTimeline;
