import axiosInstance from "~/lib/utils/axiosInstance";
import { responseActions } from "../response/responseSlice";
import { productsAction } from "./productsSlice";

export const productsRequest = {
  findAllProduct: async function (dispatch: Function) {
    try {
      let url = "products";
      let res = await axiosInstance.get(url);
      if (res.status === 200) {
        dispatch(productsAction.setProductsName(res.data.productNames));
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
  searchAllByName: async function (name: string, dispatch: Function) {
    try {
      let url = `products/names/${name}`;
      let res = await axiosInstance.get(url);
      dispatch(responseActions.otherMethods(res));
      if (res.status == 200) {
        dispatch(productsAction.setCurrentProduct(res.data.products));
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
};
