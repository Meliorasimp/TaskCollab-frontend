import { configureStore } from "@reduxjs/toolkit";
import LandingpageStore from "./Landingpage";

export const store = configureStore({
  reducer: {
    landingpage: LandingpageStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
