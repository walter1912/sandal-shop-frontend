export interface PendingBill {
        idCustomer: string;
        ship: number;
        coupon: string;
      //   total: number;
        address: string;
        note: string;
        // statePay: string;
        typePay: string;
        productCarts: string[];
}
export const pedingBill1: PendingBill = {
    idCustomer: "walter1912",
    ship: 0,
    coupon: "SALE10, SALE20",
    address: "",
    note: "",
    typePay: "",
    productCarts: []
}