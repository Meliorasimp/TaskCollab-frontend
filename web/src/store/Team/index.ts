import { createSlice } from "@reduxjs/toolkit";
import type { CreateTeamType } from "../../types/Team";

const initialCreateTeamState: CreateTeamType = {
  isCreateTeamModalOpen: false,
  name: "",
  description: "",
  members: [],
};

const createTeamSlice = createSlice({
  name: "createTeam",
  initialState: initialCreateTeamState,
  reducers: {
    setTeamModalOpen(state, action) {
      state.isCreateTeamModalOpen = action.payload;
    },
    setTeamName(state, action) {
      state.name = action.payload;
    },
    setTeamDescription(state, action) {
      state.description = action.payload;
    },
    addTeamMember(state, action) {
      if (!state.members) {
        state.members = [];
      }
      state.members.push(action.payload);
    },
  },
});

export const {
  setTeamName,
  setTeamDescription,
  addTeamMember,
  setTeamModalOpen,
} = createTeamSlice.actions;
export default createTeamSlice.reducer;
