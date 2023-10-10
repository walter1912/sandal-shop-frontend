import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: 200,
  message: "Đang truy cập trang web",
  data: {},
  type: "success",
  toast: false,
};
export const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    otherMethods(state, action) {
      const { status, data } = action.payload;
      state.status = status;
      state.message = data.message;
      state.data = data;
      if (state.status === 200 || state.status === 201) {
        state.type = "success";
      } else {
        state.type = "error";
      }
      state.toast = true;
    },
    createMethod(state, action) {
      console.log("payload response: ", action.payload);
      
        const { status, data } = action.payload;
      console.log("data response: ", status, data);

        state.status = status;
        state.message = data.message;
        state.data = data;
        if (state.status === 201) {
          state.type = "success";
        } else {
          state.type = "error";
        }
        state.toast = true;
      },
      warningAlert(state, action) {
        const {message} = action.payload;
        state.type = "warning";
        state.message = message;
        state.toast = true;
      }
  },
});

export const responseActions = responseSlice.actions;
export default responseSlice.reducer;
