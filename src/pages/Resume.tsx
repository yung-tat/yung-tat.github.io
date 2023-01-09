import * as React from "react";
import { AiFillPhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BsFillHouseFill } from "react-icons/bs";
import {
  IoMdSchool,
  IoMdBriefcase,
  IoMdRocket,
  IoMdFolder,
  IoLogoGameControllerA,
} from "react-icons/io";
import { HiMail } from "react-icons/hi";

export interface IResumeProps {}

export default class Resume extends React.Component<IResumeProps> {
  public render() {
    const pageStyle: any = {
      width: "21cm",
      height: "29.7cm",
      background: "#fafaff",
    };

    const darkBg = {
      backgroundColor: "#30343f",
      color: "#fafaff",
    };

    const lightBg = {
      backgroundColor: "#fafaff",
      color: "#30343f",
    };

    const icons = {
      color: "#40c9a2",
    };

    const titleDiv = {
      borderBottom: "2px solid #30343f",
      fontWeight: 700,
    };

    const separate = {
      borderBottom: "1px dashed #30343f",
    };

    const frontend = [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Tailwind CSS",
      "BootStrap",
      "Material UI",
    ];
    const backend = ["Django", "NestJs", "RabbitMQ"];
    const database = ["PostGres SQL", "SQLite"];
    const devops = ["Git", "GitHub", "Docker", "AWS", "Jira", "Asana", "Slack"];
    const os = ["Windows", "MacOs", "Linux"];
    const languages = [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C",
      "C++",
      "Racket",
      //"Unity",
      "Bash",
    ];

    const resumeBody = (
      <div className="mb-16" style={pageStyle}>
        <div className="py-10 flex flex-col items-center gap-2" style={darkBg}>
          <div className="text-5xl">Issac Liu</div>
          <div className="text-xl">Honours Mathematics 3A - 20894194</div>
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <HiMail />
              <div className="pl-2">i9liu@uwaterloo.ca</div>
            </div>
            <div className="flex items-center">
              <AiFillPhone />
              <div className="pl-2">647-466-5557</div>
            </div>
            <div className="flex items-center">
              <CgWebsite />
              <div className="pl-2">yung-tat.github.io</div>
            </div>
            <div className="flex items-center">
              <BsFillHouseFill />
              <div className="pl-2">Mississauga, ON</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 px-10 py-6 gap-4" style={lightBg}>
          <div className="w-full col-span-3">
            {/* Work Experience */}
            <div className="text-xl flex items-center gap-2" style={titleDiv}>
              <IoMdBriefcase style={icons} />
              Work Experience
            </div>
            <div className="pb-1 mb-1" style={separate}>
              <div className="text-lg pr-1">Front-End Web Developer</div>
              <div className="flex gap-2">
                <div className="text-sm">NorthernLabs</div>
                <div className="font-light text-sm pr-1">Sept - Dec 2022</div>
              </div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Worked with the product team to implement new features and fix
                  bugs for a ReactJS crypto web app
                </li>
                <li className="text-sm">
                  Created unit tests with Jest and E2E tests with Cypress for
                  the frontend service
                </li>
                <li className="text-sm">
                  Set up integration testing and automated with Github Actions
                  for an Elixir based backend
                </li>
                <li className="text-sm">
                  Proposed and implemented a dashboard page feature that was
                  used later in production
                </li>
              </ul>
            </div>
            <div className="pb-1 mb-1" style={separate}>
              <div className="text-lg pr-1">Full-Stack Web Developer</div>
              <div className="flex gap-2">
                <div className="text-sm">SkyViewSuites</div>
                <div className="font-light text-sm pr-1">Jan - Apr 2022</div>
              </div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Developed, tested, and deployed the React front-end and NestJS
                  microservice APIs of the admin system web app for other
                  SkyViewSuites employees
                </li>
                <li className="text-sm">
                  Collaborated with coworkers in different departments to fully
                  understand and implement their needs
                </li>
                <li className="text-sm">
                  Quickly adapted to an existing codebase and learned new
                  technologies to seamlessly integrate to the dev team
                </li>
              </ul>
            </div>
            <div>
              <div className="text-lg pr-1">Front-End Developer Intern</div>
              <div className="flex gap-2">
                <div className="text-sm">Timbles Innovations Inc.</div>
                <div className="font-light text-sm pr-1">May - Sept 2021</div>
              </div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Fixed bugs and added features to a web app built with React,
                  and Django to aid in development of an early startup
                </li>
                <li className="text-sm">
                  Demonstrated strong intuition and collaboration ability by
                  understanding code structure of an existing web app
                </li>
              </ul>
            </div>

            {/* Education */}
            <div
              className="text-xl mt-1 flex items-center gap-2"
              style={titleDiv}
            >
              <IoMdSchool style={icons} />
              Education
            </div>
            <div>
              <div className="flex items-center">
                <div className="text-lg pr-1">University of Waterloo</div>
                <div className="font-light text-sm">- Waterloo, ON</div>
              </div>
              <div className="text-sm pr-1">Sept 2020 - Present</div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Candidate for Honours Bachelor of Mathematics in Computational
                  Mathematics, Co-op
                </li>
                {/* <li className="text-sm">
                  University of Waterloo's Presidents Scholarship Recipient
                </li> */}
              </ul>
              <div className="text-md pr-1">Relevant Coursework</div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Elementary Algorithm Design and Data Abstraction
                </li>
                <li className="text-sm">Logic and Computation</li>
                <li className="text-sm">
                  Object-Oriented Software Development
                </li>
              </ul>
              {/* Interests */}
              <div
                className="text-xl mt-1 flex items-center gap-2"
                style={titleDiv}
              >
                <IoLogoGameControllerA style={icons} />
                Interests
              </div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Piano, Baritone, Trumpet, and Trombone
                </li>
                <li className="text-sm">
                  Soccer, Basketball, and Weight Lifting
                </li>
                <li className="text-sm">Learn Japanese</li>
              </ul>
            </div>
          </div>
          <div className="w-full rounded col-span-2">
            {/* Technical Skills */}
            <div className="text-xl flex items-center gap-2" style={titleDiv}>
              <IoMdRocket style={icons} />
              Technical Skills
            </div>
            <div>
              <div>Front-End</div>
              <div className="flex flex-wrap gap-1">
                {frontend.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <div>Back-End</div>
              <div className="flex flex-wrap gap-1">
                {backend.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <div>Database</div>
              <div className="flex flex-wrap gap-1">
                {database.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <div>Dev Ops</div>
              <div className="flex flex-wrap gap-1">
                {devops.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <div>Operating Systems</div>
              <div className="flex flex-wrap gap-1">
                {os.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
              <div>Languages</div>
              <div className="flex flex-wrap gap-1">
                {languages.map((item: string) => (
                  <div className="bg-gray-200 rounded-full py-0.5 px-2 text-xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Projects */}
            <div
              className="text-xl mt-1 flex items-center gap-2"
              style={titleDiv}
            >
              <IoMdFolder style={icons} />
              Projects
            </div>
            <div className="pb-1 mb-1" style={separate}>
              <div className="text-lg pr-1">Bacon Number Calculator</div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Cleaned and manipulated a dataset with 10000+ movies from IMDB
                  to find an actor's distance from Kevin Bacon
                </li>
                <li className="text-sm">
                  Data manipulation done with basic Python, calculations done
                  using a graph structure from the NetworkX Python library
                </li>
              </ul>
            </div>
            <div className="pb-1 mb-1" style={separate}>
              <div className="text-lg pr-1">YouTube Live Checker</div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Utilized Python libraries to output newly live channels from a
                  given list of channel ids
                </li>
                <li className="text-sm">
                  Bypassed YouTube's costly API to check a channel's live status
                  using web scraping in Python
                </li>
              </ul>
            </div>
            <div>
              <div className="text-lg pr-1">Portfolio Page</div>
              <ul className="list-outside list-disc px-4">
                <li className="text-sm">
                  Created a portfolio website with ReactJS
                </li>
                <li className="text-sm">
                  Utilized TailwindCSS and deployed on GitHub Pages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    return resumeBody;
  }
}
