import {
  Create,
  Home,
  Interests,
  RateReview,
  WorkHistory,
} from "@mui/icons-material";
import { INavLink } from "../types/common";

export const navlinks: INavLink[] = [
  { title: "Main", path: "/", icon: <Home /> },
  { title: "Experiences", path: "/experiences", icon: <WorkHistory /> },
  { title: "Projects", path: "/projects", icon: <Create /> },
  { title: "Interests", path: "/interests", icon: <Interests /> },
  { title: "Reviews", path: "/reviews", icon: <RateReview /> },
];
