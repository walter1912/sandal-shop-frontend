import { getLocalStorage } from "~/lib/utils/localStorage";
import { responseActions } from "../response/responseSlice";
import axiosInstance from "~/lib/utils/axiosInstance";
import { customerActions } from "./customerSlice";

export const customerRequest = {
  getInfor: async function (dispatch: Function) {
    try {
      const customer = getLocalStorage("auth");
      let url = `customers/${customer.id}`;
      let res = await axiosInstance.get(url);
      dispatch(responseActions.otherMethods(res));
      if (res.status == 200) {
        dispatch(customerActions.setInfor(res.data.customer));
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
  getSetting: async function (dispatch: Function) {
    try {
      const customer = getLocalStorage("auth");
      let url = `setting/${customer.id}`;
      let res = await axiosInstance.get(url);
      dispatch(responseActions.otherMethods(res));
      if (res.status == 200) {
        dispatch(customerActions.settingCustomer(res.data.settingCustomer));
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
};
