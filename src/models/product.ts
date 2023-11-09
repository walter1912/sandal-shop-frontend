import { Review } from "./review";

export interface Product {
  reviews?: Review[];
  _id?: string;
  name: string;
  element: {
    sole: { color: string; material: string };
    sandal: { color: string; material: string };
    des?: string;
  };
  //  enum: ['tong', '2 quai', '3 quai'],
  style: string;

  stock: number;

  cost: number;
             
  coupon: string;

  star?: number;

  img: string;

  bought?: number;

  size?: number;
}
