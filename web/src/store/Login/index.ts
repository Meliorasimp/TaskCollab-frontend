import { createSlice } from "@reduxjs/toolkit";
import type { LoginType } from "../../types/LoginType";

const initialLoginState: LoginType = {
  email: "",
  password: "",
};

const LoginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = LoginSlice.actions;
export default LoginSlice.reducer;
