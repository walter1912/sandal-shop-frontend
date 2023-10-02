"use client";
import { Box, Chip, Divider, Rating } from "@mui/material";
import { edgeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import React, { useState } from "react";
import { Product } from "~/models/product";
import "./style.css";
import {
  ButtonMain,
  ButtonOutlined,
  ButtonText,
} from "~/modules/global-styles/custom-mui";

function Detail({ data }: { data: Product[] }) {
  const [quantity, setQuantity] = useState<number>(0);
  const [sizeChoosed, setSize] = useState<number>(36);
  const [typeChoosed, setType] = useState<string>("vàng");
  const [couponChoosed, setCoupon] = useState<number[]>([]);
  let product = data[0];
  let sizes = [36, 37, 38, 37, 40];
  let typeElements = ["vàng", "đen", "trắng", "trắng - đen", "đen - trắng"];
  product.star = 3.4;
  product.reviews = 30;
  return (
    <div>
      <Box
        sx={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          "& div.feature": {
            marginTop: "20px",
          },
          "& .MuiChip-root": {
            fontSize: "20px",
            cursor: "pointer",
            border: "1px solid transparent",
            marginLeft: "20px",
            // "&:hover": {
            //   borderColor: "var(--orange)",
            // },
          },
          "& .MuiChip-root.typeElement": {
            borderColor: "var(--color-hover)",
            borderRadius: "4px",
            background: "transparent",
            // "&:hover": {
            //   borderColor: "var(--orange)",
            // },
          },
        }}
      >
        <h2>{product.name}</h2>
        <div
          className="cost feature"
          style={{
            fontSize: "40px",
            color: "var(--orange)",
          }}
        >
          {product.cost} ₫
        </div>
        <div className="coupon feature">
          {product.coupon.split(",").map((cou: string, index: number) => (
            <Chip
              label={cou}
              key={index}
              sx={{
                borderColor: couponChoosed.includes(index)
                  ? "var(--orange)!important"
                  : "",
              }}
              onClick={(e: any) => (  
                  setCoupon((pre) => {
                      if (pre.includes(index)) {
                          let res = pre.filter((c) => c !== index);
                          return res;
                        }
                        pre.push(index);
                        return pre;
                    })
                    )
                }
            />
          ))}
        </div>
        <div className="sizes feature">
          {sizes.map((size: number, index: number) => (
            <Chip
              label={size}
              key={index}
              
              sx={{
                borderRadius: "50%!important",
                borderColor:
                  sizeChoosed === size ? "var(--orange)!important" : "",
              }}
              onClick={() => setSize(size)}
            />
          ))}
        </div>
        <div className="typeElements feature">
          {typeElements.map((des: string, index: number) => (
            <Chip
              label={des}
              key={index}
              className="typeElement"
              sx={{
                borderColor:
                  des === typeChoosed ? "var(--orange)!important" : "",
              }}
              onClick={() => setType(des)}
            />
          ))}
        </div>
        <div className="quantity feature flex-row-center">
          <Box
            component="div"
            className="flex-row-center"
            sx={{
              marginRight: "20px",
              "& div": {
                cursor: "pointer",
                border: "1px solid var(--color-hover)",
                color: "var(--orange)",
                borderRadius: "4px",
                padding: "6px 10px",
                fontSize: "20px",
              },
            }}
          >
            <div onClick={() => setQuantity((quantity) => quantity - 1)}>-</div>
            <div>{quantity}</div>
            <div onClick={() => setQuantity((quantity) => quantity + 1)}>+</div>
          </Box>
          <div className="stock">{product.stock} sản phẩm có sẵn</div>
        </div>
        <div className="feature">
          <ButtonMain sx={{ width: "200px!important", marginRight: "20px" }}>
            Mua ngay
          </ButtonMain>
          <ButtonOutlined>Thêm vào giỏ hàng</ButtonOutlined>
        </div>
      </Box>
      <Divider />
      <Box
        className="appreciations flex-row-center"
        sx={{
          marginTop: "40px",
          "& .appreciation": {
            marginRight: "20px",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <div className="appreciation">
          {product.star}
          <Rating
            name="read-only"
            value={Number(product.star)}
            precision={0.25}
            readOnly
          />
        </div>
        <div className="appreciation">{product.reviews} đánh giá</div>
        <div className="appreciation">Đã bán {product.bought}</div>
      </Box>
    </div>
  );
}

export default Detail;
