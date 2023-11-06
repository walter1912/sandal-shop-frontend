import axiosInstance from "~/lib/utils/axiosInstance";
import { couponsActions } from "./couponsSlice";
import { responseActions } from "../response/responseSlice";
import { CouponDto } from "~/models/coupon";

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
  },
  createCoupon: async function (data: any, dispatch: Function) {
    try {
      let url = "coupons/admin";
      const res = await axiosInstance.post(url, data);
      if(res.status == 201) {
        dispatch(couponsActions.addOne(res.data.coupon));
      }
    } catch(err) {
      console.log(err);
      
    }
  }
};
