import TitledContent from "../../components/TitledContent";
import { IExperience } from "../../types/experience";
import ExperienceInfo from "./components/ExperienceInfo";

const experienceList: IExperience[] = [
  {
    position: "Front-End Web Developer",
    company: "NorthernLabs",
    datesEmployed: "Sept-Dec 22, Apr-Aug 23",
    stack: ["React", "Redux", "React-Query", "MUI", "Elixir"],
    description: [
      "Implemented various UI features and maintained the front-end of a crypto-related React app",
      "Added a dashboard feature, revamped navigation, and improved site performance by eliminating unnecessary rerenders",
      "Where I learned code practices to build a clean, maintainable front-end application as well as an understanding of the Accessibility and testing",
    ],
  },
  {
    position: "Full-Stack Web Developer",
    company: "SkyViewSuites",
    datesEmployed: "Jan-Apr 22",
    stack: ["React", "Redux", "TailwindCSS", "NestJS", "AWS"],
    description: [
      "Responsible for developing both the front-end and back-end of a new admin system for the rental company",
      "Where I built a solid base for writing React and NestJS applications",
    ],
  },
  {
    position: "Front-End Web Developer Intern",
    company: "Timbles Inc",
    datesEmployed: "Apr-Aug 21",
    stack: ["React", "Redux", "Django"],
    description: [
      "Helped with bug fixing and adding features to an early ed-tech startup",
      "Where I first got experience using React",
    ],
  },
];

const Experiences = () => {
  return experienceList.map((experience) => (
    <ExperienceInfo experience={experience} />
  ));
};

export default Experiences;
