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
      dispatch(responseActions.otherMethods(res));
      if (res.status === 200) {
        // dispatch(billsActions.setCurrentBill(res.data.bill));
        if (res.data.messageCoupons.length > 0) {
          res.data.messageCoupons.forEach((message: string) => {
            setTimeout(() => {
            if(message !== "")  dispatch(responseActions.warningAlert({ message }));
            }, 500);
          });
        }
        return res.data.bill;
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
};
