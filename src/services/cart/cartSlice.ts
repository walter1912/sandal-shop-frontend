import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";
import { ProductCart } from "~/models/productCart";

const initialState = {
    listProductCart: getLocalStorage('listProductCart') ?? [],
    listProductBill: getLocalStorage('listProductBill') ?? [],
    listProductBought: getLocalStorage('listProductBought') ?? [],
}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProductCart(state, action) {
            const productCart = action.payload
            state.listProductCart.push(productCart);
            setLocalStorage("listProductCart", state.listProductCart);
        },
        setCart(state, action) {
            state.listProductCart = action.payload;
            setLocalStorage("listProductCart", state.listProductCart);
        },
        addProductBill(state, action) {
            const productBill = action.payload
            state.listProductBill.push(productBill);
            setLocalStorage("listProductBill", state.listProductBill);
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

