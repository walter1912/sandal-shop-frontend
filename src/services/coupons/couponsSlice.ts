import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { CouponDto } from "~/models/coupon";

const initialCoupons: {
  all: CouponDto[];
  top: CouponDto[];
} = {
  all: getLocalStorage("coupons")?.all ?? [],
  top: getLocalStorage("coupons")?.top ?? [],
};

const couponsSlice = createSlice({
  name: "coupons",
  initialState: initialCoupons,
  reducers: {
    setAllCoupon(state, action) {
      state.all = action.payload;
      setLocalStorage("coupons", state);
    },
    setTopCoupon(state, action) {
      state.top = action.payload;
      setLocalStorage("coupons", state);
    },
  },
});

export const couponsActions = couponsSlice.actions;

export default couponsSlice.reducer;
