import { ProductCart } from "./productCart";
import { productCart, productCart2 } from "~/assets/fake-data/productcart";
export enum StatePay {
  pending = "pending",
  empty = "empty",
  shiping = "shipping",
  received = "received",
  refund = "refund",
}
export enum TypePay {
  off = "Khi nhận hàng",
  on = "Thanh toán online",
}
export interface Bill {
  _id?: string;
  idCustomer: string;
  ship: number;
  coupon: string;
  total: number;
  address: string;
  note: string;

  statePay: StatePay;
  typePay: TypePay;

  listIdproductCart?: string[];
  listProductBill?: ProductCart[];

  createdAt?: any;
  updatedAt?: any;
  couponUsed?: string[];
}

export let productBill1: ProductCart = {
  _id: "3123",
  idCustomer: "1912",
  // customer:  ,
  idProduct: "1",
//   product:  ,
  quantity: 3,
  coupon: "",
  price: 150000,
  isBought: false,
  idBill: "1",
};
export let productBill2: ProductCart = {
  _id: "3124",
  idCustomer: "1912",
  // customer:  ,
  idProduct: "1",
  // product:  ,
  quantity: 3,
  coupon: "",
  price: 450000,
  isBought: false,
  idBill: "1",
};

export const listProductBill: ProductCart[] = [productCart, productCart2];

export let bill1: Bill = {
    _id: "1",
    idCustomer: "1912",
    ship: 10000,
    coupon: "SALE10",
    total: 500000,
    address: "Xóm 16, Xã Quỳnh Tân, Quỳnh Lưu, Nghệ An",
    note: "Giao trong giờ hành chính 8h - 17h",
    statePay: StatePay.pending,
    typePay: TypePay.off,
    listProductBill: listProductBill,
    // createAt: new Date().toUTCString(),
    // updateAt: new Date().toUTCString()
};

let productBought1: ProductCart = productBill1;
productBought1.isBought = true;
let productBought2: ProductCart = productBill2;
productBought2.isBought = true;

export let bill2: Bill = {
    _id: "1",
    idCustomer: "1912",
    ship: 10000,
    coupon: "SALE10",
    total: 600000,
    address: "Xóm 16, Xã Quỳnh Tân, Quỳnh Lưu, Nghệ An",
    note: "Giao trong giờ hành chính 8h - 17h",
    statePay: StatePay.shiping,
    typePay: TypePay.off,
    listProductBill: [productBought1, productBought2],
    // createAt: new Date(),
    // updateAt: new Date()
};
