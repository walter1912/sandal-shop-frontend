import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { ProductCart } from "~/models/productCart";

const initialState = {
  listProductCart: getLocalStorage("listProductCart") ?? [],
  listIdProductBill: getLocalStorage("listIdProductBill") ?? [],
  listProductBought: getLocalStorage("listProductBought") ?? [],
  listProductBill: getLocalStorage("listProductBill") ?? [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductCart(state, action) {
      const productCart = action.payload;
      state.listProductCart.push(productCart);
      setLocalStorage("listProductCart", state.listProductCart);
    },
    setCart(state, action) {
      state.listProductCart = action.payload;
      setLocalStorage("listProductCart", state.listProductCart);
    },
    setListIdproductBill(state, action) {
      state.listIdProductBill = action.payload;
      setLocalStorage("listIdProductBill", state.listIdProductBill);
    },
    setListProductBought(state, action) {
      state.listProductBought = action.payload;
      setLocalStorage("listProductBought", state.listProductBought);
    },
    setListProductBill(state, action) {
      state.listProductBill = action.payload;
      setLocalStorage("listProductBill", state.listProductBill);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
