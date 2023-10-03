"use client";
import { ShoppingCart } from "@mui/icons-material";
import { Box, List, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "../../components/ProductCartItem";
import { ButtonMain, ButtonOutlined } from "~/modules/global-styles/custom-mui";
import { productCart, productCart2 } from "~/assets/fake-data/productcart";

function CustomerCart() {
  const [couponChoosed, setCouponChoosed] = useState<string>("");
  const [listProductBill, setListProductBill] = useState<string[]>([]);

  const [listProductcart, setListProductcart] = useState<ProductCart[]>([
    productCart,
    productCart2,
  ]);
  function handleDeleteProductCart(idProductCart: string) {
    setListProductcart((pre) =>
      pre.filter((pro: ProductCart) => pro?.id !== idProductCart)
    );
  }

  return (
    <div>
      <h2 className="flex-row-center">
        {/* <Icons.Cart /> */}
        <ShoppingCart style={{ marginRight: "40px" }} />
        <span>Giỏ hàng</span>
      </h2>
      <Grid2 container>
        <Grid2 xs={12} md={10} mdOffset={1}>
          <h2>Danh sách sản phẩm trong giỏ hàng</h2>
          <List>
            {listProductcart.map((productCart, index) => (
              <ProductCartItem
                key={index}
                handleDeleteProductCart={handleDeleteProductCart}
                productCart={productCart}
                setListProductBill={setListProductBill}
              />
            ))}
          </List>
          <div>Đã thêm {listProductBill.length} sản phẩm </div>
          <div className="flex-column-center">
            <ButtonMain>Thanh toán</ButtonMain>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default CustomerCart;
