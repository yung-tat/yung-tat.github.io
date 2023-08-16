import { Box, IconButton, Typography } from "@mui/material";
import InfoCard from "../../../../components/InfoCard";
import { IProject } from "../../../../types/project";
import { FC } from "react";
import { ArrowOutward, Link } from "@mui/icons-material";
import { darkBorder } from "../../../../constants/common";

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
  </InfoCard>
);

export default ProjectInfo;
