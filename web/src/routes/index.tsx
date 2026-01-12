import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import Task from "../pages/Task";
import Team from "../pages/Team";
import ProjectDetail from "../pages/ProjectDetail";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/tasks/:username",
    element: <Task />,
  },
  {
    path: "/projects",
    element: <Project />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects/:projectname",
    element: <ProjectDetail />,
  },
];
