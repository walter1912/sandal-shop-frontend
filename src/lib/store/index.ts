import { configureStore } from "@reduxjs/toolkit";
import authReducer from "~/services/auth/authSlice";
import responseReducer from "~/services/response/responseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    response: responseReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
