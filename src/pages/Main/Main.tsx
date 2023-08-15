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

export type StackStyles = "green" | "yellow" | "red" | "ultra-instinct";

interface IStack {
  name: string;
  items: IStackItem[];
}

interface IStackItem {
  name: string;
  color: StackStyles;
}

const atAGlance: IStack[] = [
  {
    name: "Front-End",
    items: [
      { name: "React", color: "green" },
      { name: "Redux", color: "green" },
      { name: "React-Query", color: "green" },
      { name: "MUI", color: "ultra-instinct" },
      { name: "TailwindCSS", color: "green" },
    ],
  },
  {
    name: "Back-End",
    items: [
      { name: "NestJS", color: "yellow" },
      { name: "Django", color: "yellow" },
      { name: "RabbitMQ", color: "red" },
      { name: "Flask", color: "yellow" },
    ],
  },
  {
    name: "Languages",
    items: [
      { name: "TypeScript", color: "green" },
      { name: "JavaScript", color: "green" },
      { name: "Java", color: "yellow" },
      { name: "Python", color: "yellow" },
      { name: "C", color: "yellow" },
      { name: "C++", color: "yellow" },
      { name: "Racket", color: "yellow" },
    ],
  },
];

const Main = () => {
  return (
    <>
      <InfoCard>
        <Typography
          width="100%"
          sx={{ fontSize: "20px", borderBottom: "1px solid", marginBottom: 1 }}
        >
          Background
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Like most people my age, I grew up playing Minecraft. I loved the game
          and I soon started looking into modding which introduced me to the
          world of programming at 9.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          I currently study at the University of Waterloo majoring in Honours
          Mathematics and specializing in Computational Mathematics. I mainly do
          web development and would love to break into the game industry as
          well.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography
          width="100%"
          sx={{ fontSize: "20px", borderBottom: "1px solid", marginBottom: 1 }}
        >
          My Stack
        </Typography>
        {atAGlance.map((stack) => (
          <Box mb={1}>
            <Typography>{stack.name}:</Typography>
            {stack.items.map((item) => (
              <Chip
                size="small"
                variant="outlined"
                sx={{ mr: 1 }}
                label={item.name}
                {...getChipStyle(item.color)}
              />
            ))}
          </Box>
        ))}
      </InfoCard>
    </>
  );
};

export default Main;
