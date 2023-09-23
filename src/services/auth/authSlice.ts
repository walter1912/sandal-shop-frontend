import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "~/lib/utils/localStorage";
import { AuthDto } from "~/models/validations/auth";

const initialAuth: AuthDto = {
  id: "",
  username: "",
  role: "",
  access_token: getLocalStorage("access_token"),
  refresh_token: getLocalStorage("refresh_token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state, action) {
      const { id, username, role, access_token, refresh_token } =
        action.payload;
      state.id = id;
      state.username = username;
      state.role = role;
      state.access_token = access_token;
      state.refresh_token = refresh_token;

      setLocalStorage("access_token", access_token);
      setLocalStorage("refresh_token", refresh_token);
    },
    refreshToken(state, action) {
      const { access_token } = action.payload;
      state.access_token = access_token;
      setLocalStorage("access_token", access_token);
    },
    logout(state, action) {
      state.access_token = "";
      state.refresh_token = "";
      removeLocalStorage("access_token");
      removeLocalStorage("refresh_token");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
