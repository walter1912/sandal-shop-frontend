import axiosInstance from "~/lib/utils/axiosInstance";
import { couponsActions } from "./couponsSlice";
import { responseActions } from "../response/responseSlice";

export const couponsRequest = {
  getAllCoupon: async function (dispatch: Function) {
    try {
      let url = "coupons";
      const res: any = await axiosInstance.get(url);
      if(res.status === 200) {
          dispatch(couponsActions.setAllCoupon(res.data.coupons));
      }
    } catch (err) {
        dispatch(responseActions.otherMethods(err));
    }
  },
  getTopCoupon: async function (dispatch: Function) {
    try {
        let url = "coupons/top";
        const res: any = await axiosInstance.get(url);
        if(res.status === 200) {
            dispatch(couponsActions.setTopCoupon(res.data.coupons));
        }
    } catch(err) {
        dispatch(responseActions.otherMethods(err));
    }
  }
};
