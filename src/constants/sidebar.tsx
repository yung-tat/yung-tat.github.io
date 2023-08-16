import { Create, Home, WorkHistory } from "@mui/icons-material";
import { INavLink } from "../types/common";

export const navlinks: INavLink[] = [
  { title: "About Me", path: "/", icon: <Home /> },
  { title: "Experiences", path: "/experiences", icon: <WorkHistory /> },
  { title: "Projects", path: "/projects", icon: <Create /> },
];
