import { configureStore } from "@reduxjs/toolkit";
import LandingpageStore from "./Landingpage";
import Register from "./Register/index.ts";

export const store = configureStore({
  reducer: {
    landingpage: LandingpageStore,
    register: Register,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
