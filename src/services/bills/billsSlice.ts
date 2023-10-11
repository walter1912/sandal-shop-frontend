import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";

const initialState = {
  current: getLocalStorage("currentBill") ?? {},
  listBill: getLocalStorage("listBill") ?? [],
};

export const billsSlice = createSlice({
  name: "bills",
  initialState: initialState,
  reducers: {
    addBill(state, action) {
      state.listBill = action.payload;
      setLocalStorage("listBill", state.listBill);
    },
    setCurrentBill(state, action) {
      state.current = action.payload;
      setLocalStorage("currentBill", state.current);
    },
    setListBill(state, action) {
      state.listBill = action.payload;
      setLocalStorage("listBill", state.listBill);
    },
  },
});

export const billsActions = billsSlice.actions;

export default billsSlice.reducer;
