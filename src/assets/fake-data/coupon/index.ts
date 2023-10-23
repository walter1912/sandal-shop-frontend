import { CouponDto } from "~/models/coupon";

export const listCoupon: CouponDto[] = [
  {
    code: "SALE10",
    name: "Giảm giá 10% một số mặt hàng, tối đa 30k",
    percent: 10,
    maxDiscount: 30000,
    start: new Date(),
    end: new Date(),
    countUsed: 10,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhahy42migabe6",
  },
  {
    code: "SALE20",
    name: "Giảm giá 20%, tối đa 40k",
    percent: 10,
    maxDiscount: 40000,
    start: new Date(),
    end: new Date(),
    countUsed: 10,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lha29tko5nw229",
  },
  {
    code: "SALE50",
    name: "Giảm giá 50%, tối đa 40k",
    percent: 10,
    maxDiscount: 40000,
    start: new Date(),
    end: new Date(),
    countUsed: 10,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhahy42migabe6",
  },
];
