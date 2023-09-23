import { configureStore } from "@reduxjs/toolkit";
import authReducer from "~/services/auth/authSlice";
import responseReducer from "~/services/response/responseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    response: responseReducer,
  },
});
export default store;
