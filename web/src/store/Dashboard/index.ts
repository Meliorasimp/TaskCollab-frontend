import { createSlice } from "@reduxjs/toolkit";
import type { DashboardType } from "../../types/DashboardType";

const initialDashboardState: DashboardType = {
  isNotificationsOpen: false,
  isUserSettingsOpen: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    setIsNotificationsOpen(state, action) {
      state.isNotificationsOpen = action.payload;
    },
    setIsUserSettingsOpen(state, action) {
      state.isUserSettingsOpen = action.payload;
    },
  },
});

export const { setIsNotificationsOpen, setIsUserSettingsOpen } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
