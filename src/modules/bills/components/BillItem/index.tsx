"use state";
import { List } from "@mui/icons-material";
import { Card, Divider } from "@mui/material";
import React from "react";
import { productCart } from "~/assets/fake-data/productcart";
import { Bill, StatePay } from "~/models/bill";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "~/modules/cart/components/ProductCartItem";
import { ButtonOutlined, ButtonText } from "~/modules/global-styles/custom-mui";

function BillItem({ bill }: { bill: Bill }) {
  let message = "Bill trống";
  let btnOutlined = "xem saản phẩm";
  switch (bill.statePay) {
    case StatePay.pending:
      message = "Thanh toán trước 48h sau khi cho vào hàng chờ";
      btnOutlined = "Thanh toán ngay";
      break;
    case StatePay.received:
      message = "Đánh giá sản phẩm";
      btnOutlined = "Mua lại";
      break;
    case StatePay.shiping:
      message = "Theo dõi đơn hàng";
      btnOutlined = "Mua sản phẩm khác";
      break;
  }
  return (
    <Card
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        "& .header, & .footer": {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
        "& .statePay": {
          textTransform: "uppercase",
          color: "var(--color-main)",
        },
        "& .createAt": {
          fontSize: "1.4em",
          color: "var(--black-second)",
        },
        "& .total": {
          width: "100%",
          float: "right",
        },
        "& .footer": {},
      }}
    >
      <div className="header">
        <span className="createAt">
          Hóa đơn tạo ngày {bill.createAt.toISOString()}
        </span>
        <span className="statePay">{bill.statePay}</span>
      </div>
      <Divider />
      <div
        // sx={{
        //   "& .productCartItem": {
        //     borderBottom: "1px solid var(--orange)",
        //   },
        // }}
      >
        {bill.listProductBill?.map(
          (productBill: ProductCart, index: number) => (
            <ProductCartItem
              key={index}
              productCart={productBill}
              handleDeleteProductCart={() => {}}
              listProductBill={[String(productBill.id)]}
            />
          )
        )}
        <ProductCartItem
          productCart={productCart}
          handleDeleteProductCart={() => {}}
          listProductBill={[String(productCart.id)]}
        />
      </div>
      <div className="total">
        <span>Thành tiền</span>
        <span className="currentcy">
          {bill.total}
          <span>₫</span>
        </span>
      </div>
      <div className="footer">
        {bill.statePay === StatePay.pending ? (
          <span>{message}</span>
        ) : (
          <ButtonText>{message}</ButtonText>
        )}
        <ButtonOutlined sx={{ color: "var(--orange)" }}>
          {btnOutlined}
        </ButtonOutlined>
      </div>
    </Card>
  );
}

export default BillItem;
