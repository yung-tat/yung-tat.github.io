import {
  Box,
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
      <Grid item xs={12}>
        <Typography>
          <b>Position:</b>
          {" " + experience.position}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>
          <b>Company:</b> {" " + experience.company}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Typography>
          <b>Dates Employed:</b> {" " + experience.datesEmployed}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight="bold">Description: </Typography>
        {experience.description.map((point) => (
          <Typography>-{" " + point}</Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <b>Tech I Worked With:</b> {" " + experience.stack.join(", ")}
        </Typography>
      </Grid>
    </InfoCard>
  );
};

export default ExperienceInfo;
