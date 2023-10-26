import { Product } from "./product";

export interface ProductName {
  _id?: string;
  name: string;
  code: string;
  detail: string;
  listProduct?: Product[];
  star?: number;
  bought?: number;
  img: string;
  cost: number;
  coupon?: string;
  color?: string;
  style: string;
}
