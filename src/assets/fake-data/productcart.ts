import { Product } from "~/models/product";
import { product } from "./product";
import { ProductCart } from "~/models/productCart";

export let prod: Product = { ...product };
prod.size = 36;
export let productCart: ProductCart = {
  id: "12",
  product: prod,
  quantity: 3,
  coupon: "",
  price: 90000,
};
export let productCart2 = { ...productCart };
productCart2.id = "13";
