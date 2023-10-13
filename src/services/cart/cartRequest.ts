import { ProductCart } from "~/models/productCart";
import { responseActions } from "../response/responseSlice";
import { getLocalStorage } from "~/lib/utils/localStorage";
import axiosInstance from "~/lib/utils/axiosInstance";
import { cartActions } from "./cartSlice";
import { productsRequest } from "../products/productsRequest";
import { listProduct } from "~/assets/fake-data/product";

export const cartRequest = {
  addProductCart: async function (data: any, dispatch: Function) {
    try {
      let customer = getLocalStorage("auth");
      let url = `cart/${customer.id}`;
      let res = await axiosInstance.post(url, data);
      dispatch(responseActions.createMethod(res));

      if (res.status === 201) {
        dispatch(cartActions.addProductCart(res.data.productCart));
      }
    } catch (err) {
      dispatch(responseActions.createMethod(err));
    }
  },
  getCart: async function (dispatch: Function) {
    try {
      let customer = getLocalStorage("auth");
      let url = `cart/${customer.id}`;
      let res = await axiosInstance.get(url);
      dispatch(responseActions.otherMethods(res));
      if (res.status === 200) {
        const { cart } = res.data;
        let listProductCart: any[] = [];
        for (let i = 0; i < cart.length; i++) {
          let productCart = cart[i];

          console.log("productCart.idProduct: ", productCart.idProduct);

          let url = `products/${productCart.idProduct}`;
          const resProduct = await axiosInstance.get(url);
          let result = {
            product: resProduct.data.product,
            ...productCart,
            id: productCart._id,
          };
          console.log("result: ", result);

          listProductCart.push(result);
        }
        console.log("listProductCart: ", listProductCart);
       let listCart = [];
       let listBill = [];
       let listBought = [];
       for(let i = 0; i < listProductCart.length; i++) {
        let p : any = listProductCart[i];
        if(p.idBill === undefined ) {
          listCart.push(p)
        }else {
          if(p.isBought === false) {
            listBill.push(p)
          }else {
            listBought.push(p)
          }
        }
       }
        console.log("listCart: ", listCart);
        console.log("listBill: ", listBill);

        console.log("listBought: ", listBought);

        
        dispatch(cartActions.setCart(listProductCart));
      }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },

  addProductBill: async function (data: any, dispatch: Function) {},
  updateProductCart: async function (data: ProductCart, dispatch: Function) {
    try {
      let url = `cart/items/${data._id}`;
      const res = await axiosInstance.put(url, data);
      // if (res.status === 200) {
      //   dispatch(cartActions.addProductBill(res.data.productCart));
      // }
    } catch (err) {
      dispatch(responseActions.otherMethods(err));
    }
  },

  getProductCart: async function (id: string) {
    try {
      let url = `cart/items/${id}`;
      const res = await axiosInstance.get(url);
      if (res.status == 200) {
        const { productCart } = res.data;
        const product = await productsRequest.getById(productCart.idProduct);
        let productBill = {
          ...productCart,
          product,
        };
        return productBill;
      }
      return undefined;
    } catch (err) {
      console.log(err);
    }
  },
};
