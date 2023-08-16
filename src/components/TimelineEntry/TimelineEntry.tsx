import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { FC } from "react";

export interface ITimelineEntry {
  date: string;
  title: string;
  content: string;
  final?: boolean;
}

const TimelineEntry: FC<ITimelineEntry> = ({ date, title, content, final }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>{date}</TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!final && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
        <Typography>{content}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEntry;
