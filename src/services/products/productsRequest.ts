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
  getById: async function (id: string) {
    try {
      let url = `products/${id}`;
      let res = await axiosInstance.get(url);
      return res.data.product;
    } catch (err) {
      console.log(err);
    }
  },
  filterByOptions: async function (
    {
      data,
      sortOption,
      isOr = true,
    }: {
      data: {
        type: string;
        value: string;
      }[];
      sortOption: string;
      isOr?: boolean;
    },
    dispatch: Function
  ) {
    try {
      let url = "products/filter";
      let dataSearch = { data, sortOption, isOr };
      let res = await axiosInstance.post(url, dataSearch);
      dispatch(responseActions.otherMethods(res));
      // if (res.status === 200) {
      //   dispatch(productsAction.setProductsName(res.data.productNames));
      // }
      return res.data.productNames;
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },
  getProductHaveCoupon: async function (codeCoupon: string, dispatch: Function) {
    try{
      let url = `products/coupon/${codeCoupon}`;
      let res = await axiosInstance.get(url);
      dispatch(responseActions.otherMethods(res));
      if(res.status == 200) {
        dispatch(productsAction.setCurrentProduct(res.data.productNames));
      }
    }  catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  }
};
