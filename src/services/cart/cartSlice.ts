import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { ProductCart } from "~/models/productCart";

const initialState = {
  listProductCart: getLocalStorage("listProductCart") ?? [],
  listIdProductBill: getLocalStorage("listIdProductBill") ?? [],
  listProductBought: getLocalStorage("listProductBought") ?? [],
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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
