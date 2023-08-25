import { IProject } from "../types/project";

/**
 * This website
 * Dokkan farm bot (failed)
 * Chess
 * Bacon number calculator
 * Youtube live checker
 */

export const projects: IProject[] = [
  {
    title: "Student Networking Project (Backend)",
    link: "https://github.com/yung-tat/student-net-be",
    description:
      "The backend for a student networking service that I'm working on. The goal is to make a semi-professional way for students to connect with and find each other based on their courses and program. Also used some python webscraping to get the list of Fall 2023 UW courses.",
    stack: [
      "TypeScript",
      "NestJS",
      "TypeORM",
      "OpenAPI",
      "Postgres",
      "SQL",
      "Python",
      "BeautifulSoup4",
    ],
  },
  {
    title: "Portfolio Page",
    link: "https://github.com/yung-tat/yung-tat.github.io",
    description:
      "This page you're looking at right now! The 4th edition of my website, built using React and MUI. My first was built in pure HTML/CSS, the second was built with Bootstrap, the third was built with React and Tailwind. After my latest coop placement at NorthernLabs, I decided to use my MUI skills.",
    stack: ["React", "React Router", "MaterialUI"],
  },
  {
    title: "Research: Dokkan Farming Bot",
    description:
      "A failed project to revive an old open source farming bot for a DragonBall app. In my goose chase to find the backend endpoints, I used android emulators, wireshark, and charles proxy to attempt to intercept the outgoing calls. I researched a lot into network protocols, ssl, and proxying",
    stack: ["Python", "Wireshark", "Charles Proxy", "Networking"],
  },
];
