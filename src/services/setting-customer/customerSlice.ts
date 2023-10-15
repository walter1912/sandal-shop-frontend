import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { Customer } from "~/models/customer";
import { SettingCustomer } from "~/models/setting-customer";

const initialState: {
  infor: Customer;
  setting: SettingCustomer;
} = {
  infor: getLocalStorage("inforCustomer") ?? {},
  setting: getLocalStorage("settingCustomer") ?? {},
};
export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setInfor(state, action) {
      state.infor = action.payload;
      setLocalStorage("inforCustomer", state.infor);
    },
    settingCustomer(state, action) {
      state.setting = action.payload;
      setLocalStorage("settingCustomer", state.setting);
    },
  },
});

export const customerActions = customerSlice.actions;

export default customerSlice.reducer
