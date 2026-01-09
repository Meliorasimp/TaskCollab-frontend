import { createSlice } from "@reduxjs/toolkit";
import type { TaskType } from "../../types/TaskType";

const initialTaskState: TaskType = {
  openMenuTaskId: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialTaskState,
  reducers: {
    openActionMenu(state, action) {
      state.openMenuTaskId = action.payload;
    },
  },
});

export const { openActionMenu } = taskSlice.actions;

export default taskSlice.reducer;
