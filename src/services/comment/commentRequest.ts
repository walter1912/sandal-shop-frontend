import axiosInstance from "~/lib/utils/axiosInstance";
import { getLocalStorage } from "~/lib/utils/localStorage";
import { Rate } from "~/models/rate";
import { Review } from "~/models/review";

export const commentRequest = {
  postReview: async function (data: any) {
    try {
      const customer = getLocalStorage("auth");
      let dataPost: Review = {
        idCustomer: customer.id,
        idProduct: data.idProduct,
        content: data.content,
      };
      let url = `products/${dataPost.idProduct}/reviews`;
      const res = await axiosInstance.post(url, dataPost);
      if (res.status === 200) {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  },
  getReviews: async function (idProduct: string) {
    try {
      let url = `products/${idProduct}/reviews`;
      const res = await axiosInstance.get(url);
      if (res.status === 200) {
        return res.data.reviews;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  postRate: async function (data: any) {
    try {
      const customer = getLocalStorage("auth");
      let dataPost: Rate = {
        idCustomer: customer.id,
        idProduct: data.idProduct,
        star: data.content,
      };
      let url = `products/${dataPost.idProduct}/rates`;
      const res = await axiosInstance.post(url, dataPost);
      if (res.status === 200) {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  },
  getRate: async function (idProduct: string) {
    try {
      let url = `products/${idProduct}/rates`;
      const res = await axiosInstance.get(url);
      if (res.status == 200) {
        return res.data.rate;
      }
      return 5;
    } catch (err) {
      return 5;
    }
  },
};
