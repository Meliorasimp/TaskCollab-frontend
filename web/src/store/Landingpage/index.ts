import { createSlice } from "@reduxjs/toolkit";
import type { LandingpageType } from "../../types/LandingpageType";
const initialLandingpageState: LandingpageType = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
};

const landingPageSlice = createSlice({
  name: "landingpage",
  initialState: initialLandingpageState,
  reducers: {
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { setIsRegisterModalOpen, setIsLoginModalOpen } =
  landingPageSlice.actions;
export default landingPageSlice.reducer;
