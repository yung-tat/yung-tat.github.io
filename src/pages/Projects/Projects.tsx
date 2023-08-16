import { projects } from "../../constants/projects";
import ProjectInfo from "./components/ProjectInfo";

const Projects = () => {
  return projects.map((project) => <ProjectInfo project={project} />);
};

export default Projects;
