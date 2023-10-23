import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "~/lib/utils/localStorage";

const initialProducts = {
    all : getLocalStorage("productsName") ?? [],
    current: getLocalStorage("currentProduct") ?? []
}
export const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    reducers: {
        setProductsName(state, action) {
            state.all = action.payload;
            setLocalStorage("productsName", state.all);
        },
        setCurrentProduct(state, action) {
            state.current = action.payload;
            setLocalStorage("currentProduct", state.current);
        }
    }
})

export const productsAction = productsSlice.actions;

export default productsSlice.reducer;