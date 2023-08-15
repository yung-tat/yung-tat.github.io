import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { IExperience } from "../../../../types/experience";
import { FC } from "react";
import InfoCard from "../../../../components/InfoCard";

interface IExperienceInfo {
  experience: IExperience;
}

const ExperienceInfo: FC<IExperienceInfo> = ({ experience }) => {
  return (
    <InfoCard>
      <Typography
        width="100%"
        sx={{ fontSize: "20px", borderBottom: "1px solid", marginBottom: 1 }}
      >
        {experience.position + " - " + experience.company}
      </Typography>
      {experience.description.map((point) => (
        <Typography sx={{ fontSize: 16 }}>-{" " + point}</Typography>
      ))}
      <Box width="100%" my={1}>
        {experience.stack.map((item) => (
          <Chip
            color="success"
            variant="outlined"
            label={item}
            size="small"
            sx={{ mr: 1 }}
          />
        ))}
      </Box>
      <Divider />
      <Typography sx={{ fontSize: 12 }}>
        {" " + experience.datesEmployed}
      </Typography>
    </InfoCard>
  );
};

export default ExperienceInfo;
