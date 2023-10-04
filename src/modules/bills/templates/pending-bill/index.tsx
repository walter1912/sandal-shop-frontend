"use client";
import { Box, Chip, List } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { productCart, productCart2 } from "~/assets/fake-data/productcart";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "~/modules/cart/components/ProductCartItem";
import { ButtonOutlined } from "~/modules/global-styles/custom-mui";
import ChooseAddress from "./choose-address";

function PendingBillTemplate() {
  const listProductBill = [productCart, productCart2];
  const listIdProductBill = [String(productCart.id), String(productCart2.id)];
  const [couponChoosed, setCouponChoosed] = useState<string>("");
  const [address, setAddress] = useState<string>('')
  const styleInput = {
    width: "178px",
    height: "40px",
    marginRight: "40px",
    paddingLeft: "10px",
  };
  return (
    <div>
      <Grid2 container spacing={6}>
        <Grid2 xs={12} md={6}>
          <h4>{listProductBill.length} sản phẩm</h4>
          <List>
            {listProductBill.map((productBill, index) => (
              <ProductCartItem
                key={index}
                productCart={productBill}
                handleDeleteProductCart={() => {}}
                listProductBill={listIdProductBill}
              />
            ))}
          </List>
        </Grid2>
        <Grid2
          xs={12}
          md={6}
          sx={{
            paddingRight: "40px",
            "& .navbar-item": {
              padding: "40px",
              marginBottom: "20px",
            },
          }}
        >
          <Box>
            <ChooseAddress stylesSelect={styleInput} setAddress={setAddress} />
          </Box>
          <Box
            className="navbar-item"
            sx={{ backgroundColor: "var(--color-bg)" }}
          >
            <p>MÃ COUPON ƯU ĐÃI</p>
            <div
              className="flex-row-center"
              style={{
                height: "40px",
              }}
            >
              <input
                style={
                  styleInput
                  // outlineColor:'var(--orange)'
                }
                name="couponChoosed"
                value={couponChoosed}
                onChange={(e) => setCouponChoosed(e.target.value)}
                placeholder="Nhập mã ưu đãi"
              />
              <ButtonOutlined sx={{ height: "100%", color: "var(--orange)" }}>
                Áp dụng
              </ButtonOutlined>
            </div>
          </Box>
          <Box
            className="navbar-item"
            sx={{
              border: "1px solid var(--color-bg)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "& .calc-cost": {
                width: "400px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "0.5px solid var(--orange)",
                marginBottom: "20px",
                marginTop: "10px",
              },
            }}
          >
            <p>TẠM TÍNH</p>
            <div className="products-cost calc-cost">
              Sản phẩm:{" "}
              <span className="currentcy">
                {200000} <span>₫</span>
              </span>
            </div>
            <div
              className="coupons-cost"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>Các mã giảm giá được áp dụng:</span>
              <ul>
                {couponChoosed.split(",").map((cou: string, index: number) => (
                  <Chip
                    key={index}
                    label={cou}
                    color="success"
                    variant="outlined"
                    style={{ marginRight: "6px" }}
                  />
                ))}
              </ul>
              <span className="calc-cost">
                Được giảm giá:{" "}
                <span className="currentcy">
                  - {50000} <span>₫</span>
                </span>
              </span>
            </div>
            <div className="ship-cost calc-cost">
              Phí ship:{" "}
              <span className="currentcy">
                + {10000} <span>₫</span>{" "}
              </span>
            </div>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default PendingBillTemplate;
