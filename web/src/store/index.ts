import { configureStore } from "@reduxjs/toolkit";
import LandingpageStore from "./Landingpage";
import Register from "./Register/index.ts";
import DashboardStore from "./Dashboard/index.ts";
import Task from "./Task/index.ts";

export const store = configureStore({
  reducer: {
    landingpage: LandingpageStore,
    register: Register,
    dashboard: DashboardStore,
    task: Task,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
