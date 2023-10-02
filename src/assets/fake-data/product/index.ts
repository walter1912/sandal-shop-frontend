import { Product } from "~/models/product";

let product: Product = {
    id: "id",
    name: "Dép tông loại một",
    element: {
      sole: {
        color: "",
        material: "",
      },
      sandal: {
        color: "",
        material: "",
      },
      des: "đen"
    },
    style: "tong",
    stock: 0,
    cost: 30000,
    coupon: "SALE10, SALE20, SALE50",
    star: 4.6,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhahy42migabe6",
    bought: 100,
  };
const product2 =  {
  id: "id",
  name: "Dép tông loại hai",
  element: {
    sole: {
      color: "",
      material: "",
    },
    sandal: {
      color: "",
      material: "",
    },
    des: "đen"
  },
  style: "tong",
  stock: 0,
  cost: 30000,
  coupon: "SALE10, SALE20, SALE50",
  star: 3.4,
  img: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-b4ci7bqs9gov08",
  bought: 100,
};
export var listProduct = [
    product, product2, product, product, product2, product, product, product, product2, product
];
//   for (let i = 0; i < 10; i++) {
//     listProduct.push(product);
//   }
