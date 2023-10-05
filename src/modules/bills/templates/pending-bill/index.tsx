"use client";
import { Box, Chip, List } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { productCart, productCart2 } from "~/assets/fake-data/productcart";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "~/modules/cart/components/ProductCartItem";
import { ButtonMain, ButtonOutlined } from "~/modules/global-styles/custom-mui";
import ChooseAddress from "./choose-address";
import { BoxNavbarItemCalcCostStyles, Grid2NavbarListStyles } from "./styles";

function PendingBillTemplate() {
  const listProductBill = [productCart, productCart2];
  const listIdProductBill = [String(productCart.id), String(productCart2.id)];
  const [couponChoosed, setCouponChoosed] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [priceCart, setPriceCart] = useState<number>(200000);
  const [discountCoupon, setDiscountCoupon] = useState<number>(-20000);
  const [costShip, setCostShip] = useState<number>(50000);
  const styleInput = {
    width: "178px",
    height: "40px",
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
        <Grid2 xs={12} md={6} sx={{ ...Grid2NavbarListStyles }}>
          <Box>
            <ChooseAddress stylesSelect={styleInput} setAddress={setAddress} />
          </Box>
          <Box component="div" className="navbar-item navbar-item--bg">
            <p>MÃ COUPON ƯU ĐÃI</p>
            <div
              style={{
                height: "40px",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <input
                style={{
                  ...styleInput,
                  marginRight: "40px",
                }}
                name="couponChoosed"
                value={couponChoosed}
                onChange={(e) => setCouponChoosed(e.target.value)}
                placeholder="Nhập mã ưu đãi"
              />
              <ButtonOutlined
                sx={{
                  height: "100%",
                  color: "var(--orange)",
                }}
              >
                Áp dụng
              </ButtonOutlined>
            </div>
          </Box>
          <Box
            className="navbar-item navbar-item--border"
            sx={{ ...BoxNavbarItemCalcCostStyles }}
          >
            <p>TẠM TÍNH</p>
            <div className="products-cost calc-cost">
              Sản phẩm:{" "}
              <span className="currentcy">
                {priceCart} <span>₫</span>
              </span>
            </div>
            <div
              className="coupons-cost"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
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
                  {discountCoupon} <span>₫</span>
                </span>
              </span>
            </div>
            <div className="ship-cost calc-cost">
              Phí ship:{" "}
              <span className="currentcy">
                + {costShip} <span>₫</span>{" "}
              </span>
            </div>
            <ButtonMain>
              <span
                className="currentcy"
                style={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                }}
              >
                Thanh toán {priceCart + discountCoupon + costShip}
                <span>₫</span>
              </span>
            </ButtonMain>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default PendingBillTemplate;
