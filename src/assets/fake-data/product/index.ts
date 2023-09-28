import { Product } from "~/models/product";

let product: Product = {
    id: "id",
    name: "dép tông loại một",
    element: {
      sole: {
        color: "",
        material: "",
      },
      sandal: {
        color: "",
        material: "",
      },
    },
    style: "tong",
    stock: 0,
    cost: 30000,
    coupon: "",
    star: 4.6,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhahy42migabe6",
    bought: 100,
  };
export var listProduct = [
    product, product, product, product, product, product, product, product, product, product
];
//   for (let i = 0; i < 10; i++) {
//     listProduct.push(product);
//   }
