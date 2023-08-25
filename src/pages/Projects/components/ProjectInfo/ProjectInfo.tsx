import { ArrowOutward } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import InfoCard from "../../../../components/InfoCard";
import { darkBorder } from "../../../../constants/common";
import { IProject } from "../../../../types/project";

interface IProjectInfo {
  project: IProject;
}

const ProjectInfo: FC<IProjectInfo> = ({ project }) => (
  <InfoCard>
    <Box
      display="flex"
      alignItems="flex-end"
      width="100%"
      sx={{ borderBottom: "1px solid " + darkBorder, marginBottom: 1 }}
    >
      <Typography sx={{ fontSize: "20px" }}>{project.title}</Typography>
      {project.link && (
        <IconButton
          size="small"
          sx={{ ml: 1 }}
          href={project.link}
          target="_blank"
        >
          <ArrowOutward
            sx={(theme) => ({
              color: theme.palette.text.primary,
            })}
            fontSize="small"
          />
        </IconButton>
      )}
    </Box>
    {project.description}
    <Box width="100%" my={1}>
      {project.stack.map((item) => (
        <Chip
          color="success"
          variant="outlined"
          label={item}
          size="small"
          sx={{ mr: 1 }}
        />
      ))}
    </Box>
  </InfoCard>
);

export default ProjectInfo;
