import { PendingBill } from "~/models/pending-bill";
import { responseActions } from "../response/responseSlice";
import { getLocalStorage } from "~/lib/utils/localStorage";
import axiosInstance from "~/lib/utils/axiosInstance";
import { billsActions } from "./billsSlice";
import Error from "next/error";
import { Bill } from "~/models/bill";
import { ProductCart } from "~/models/productCart";
import { cartRequest } from "../cart/cartRequest";

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
              if (message !== "")
                dispatch(responseActions.warningAlert({ message }));
            }, 500);
          });
        }
        return res.data.bill;
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
  saveBill: async function (
    idBill: string,
    dispatch: Function
  ): Promise<{ status: any; ress: any }> {
    try {
      const customer = getLocalStorage("auth");
      let url = `bills/customers/${customer.id}/save/${idBill}`;
      const res = await axiosInstance.post(url);
      dispatch(responseActions.otherMethods(res));
      if (res.status == 200) {
        dispatch(billsActions.addBill(res.data.bill));
      }
      return { status: res.status, ress: { ...res } };
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
      return { status: 400, ress: "fail" };
    }
  },
  getAllBill: async function (dispatch: Function) {
    try {
      let customer = getLocalStorage("auth");
      let url = `bills/customers/${customer.id}`;
      const res = await axiosInstance.get(url);
      if (res.status === 200) {
        const { bills } = res.data;
        console.log("bills in billrequest: ", bills);

        let newBills: Bill[] = [];
        for (let i = 0; i < bills.length; i++) {
          let newBill: Bill = { ...bills[i] };
          let url = `cart/${customer.id}/idBill/${bills[i]._id}`;
          const resBill = await axiosInstance.get(url);

          if (resBill.status === 200) {
            const { listProductBill } = resBill.data;
            console.log("listProductBill in billrequest: ", listProductBill);
            let newListProductBill = [];
            for (let j = 0; j < listProductBill.length; j++) {
              let productBill = await cartRequest.getProductCart(
                listProductBill[j]._id
              );
              console.log("productBill in BillRequest : ", productBill);

              newListProductBill.push(productBill);
            }
            console.log(
              "newListProductBill in BillRequest : ",
              newListProductBill
            );

            newBill = { ...newBill, listProductBill: newListProductBill };
          }
          newBills.push(newBill);
        }

        dispatch(billsActions.setListBill(newBills));
      }
    } catch (err) {
      console.log(err);
    }
  },
  adminGetBills: async function () {
    try {
      let url = "statistic-bills";

      let res = await axiosInstance.get(url);
      return res.data.bills;
    } catch (err) {
      console.log(err);
      return []
    }
  },
};
