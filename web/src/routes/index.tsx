import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import { lazy, Suspense } from "react";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Task = lazy(() => import("../pages/Task"));
const Project = lazy(() => import("../pages/Project"));
const Team = lazy(() => import("../pages/Team"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));
const Settings = lazy(() => import("../pages/Settings"));
const Calendar = lazy(() => import("../pages/Calendar"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/tasks/:username",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Task />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Project />
      </Suspense>
    ),
  },
  {
    path: "/team",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Team />
      </Suspense>
    ),
  },
  {
    path: "/calendar",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Calendar />
      </Suspense>
    ),
  },
  {
    path: "/projects/:projectname",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <ProjectDetail />
      </Suspense>
    ),
  },
  {
    path: "/settings",
    element: (
      <Suspense fallback={<div className="absolute inset-0">Loading...</div>}>
        <Settings />
      </Suspense>
    ),
  },
];
