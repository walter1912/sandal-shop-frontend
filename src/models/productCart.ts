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
// khi có idBill thì productCart trở thành productBill 
// khi isBought = true thì productBill trở thành productBought
  isBought?: boolean;
  idBill?: string;
}
