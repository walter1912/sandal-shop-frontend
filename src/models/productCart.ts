import { Customer } from "./customer";
import { Product } from "./product";

export interface ProductCart {
  id?: string;
  idCustomer?: string;
  customer?: Customer;
  idProduct?: string;
  product?: Product;

  quantity: number;

  coupon: string;

  price: number;

  isBought?: boolean;
}
