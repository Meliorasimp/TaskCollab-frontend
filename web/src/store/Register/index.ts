import { createSlice } from "@reduxjs/toolkit";
import type { RegisterType } from "../../types/RegisterType";

const initialRegisterState: RegisterType = {
  username: "",
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialRegisterState,
  reducers: {
    setUserName(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setUserName, setEmail, setPassword } = registerSlice.actions;
export default registerSlice.reducer;
