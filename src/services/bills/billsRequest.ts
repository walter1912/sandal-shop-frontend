import { PendingBill } from "~/models/pending-bill";
import { responseActions } from "../response/responseSlice";
import { getLocalStorage } from "~/lib/utils/localStorage";
import axiosInstance from "~/lib/utils/axiosInstance";
import { billsActions } from "./billsSlice";

export const billsRequest = {
  createPendingBill: async function (data: PendingBill, dispatch: Function) {
    try {
      let customer = getLocalStorage("auth");
      let url = `bills/customers/${customer.id}`;
      const res = await axiosInstance.post(url, data);
      dispatch(responseActions.createMethod(res));
      if (res.status === 201) {
        dispatch(billsActions.addBill(res.data.bill));
        if (res.data.messageCoupons != "") {
          dispatch(
            responseActions.warningAlert({ message: res.data.messageCoupons })
          );
        }
      }
    } catch (err) {
      dispatch(responseActions.createMethod(err));
    }
  },

  
};
