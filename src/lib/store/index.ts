import { configureStore } from "@reduxjs/toolkit";
import authReducer from "~/services/auth/authSlice";
import responseReducer from "~/services/response/responseSlice";
import couponsReducer from "~/services/coupons/couponsSlice";
import productsReducer from "~/services/products/productsSlice";
import cartReducer from "~/services/cart/cartSlice";
import billsReducer from "~/services/bills/billsSlice";
import customerReducer from "~/services/setting-customer/customerSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    response: responseReducer,
    coupons: couponsReducer,
    products: productsReducer,
    cart: cartReducer,
    bills: billsReducer,
    customer: customerReducer,
    
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
