"use client";
import { Box, Chip, Divider, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "~/models/product";
import "./style.css";
import {
  ButtonMain,
  ButtonOutlined,
  ButtonText,
} from "~/modules/global-styles/custom-mui";
import { prod } from "~/assets/fake-data/productcart";
import { BoxDetailStyles } from "./custom-mui";
import { useAppDispatch } from "~/lib/store/hook";
import { responseActions } from "~/services/response/responseSlice";
import { cartRequest } from "~/services/cart/cartRequest";

function Detail({
  data,
  currentProduct,
  setCurrentProduct,
}: {
  data: Product[];
  currentProduct: Product;
  setCurrentProduct: Function;
}) {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState<number>(0);
  const [sizeChoosed, setSize] = useState<number>(36);
  const [typeChoosed, setType] = useState<string>("");
  const [couponChoosed, setCoupon] = useState<number[]>([]);
  let product = data[0] ?? prod;
  let sizes = [36, 37, 38, 39, 40];
  // var typeElements = ["vàng", "đen", "trắng", "trắng - đen", "đen - trắng"];
  const [typeElements, setTypeElements] = useState<string[]>([]);
  let listCoupon: string[] = currentProduct.coupon.split(",");
  useEffect(() => {
    setTypeElements((pre) => {
      return data.map((product: Product, index: number) => {
        let des = "";
        if (product.element.sandal.color == product.element.sole.color) {
          des = product.element.sandal.color;
        } else {
          des = product.element.sandal.color + " " + product.element.sole.color;
        }
        console.log("des:", des, index);
        return des;
      });
    });
  }, []);

  async function handleAddToCart() {
    const payload = {
      idProduct: currentProduct._id,
      quantity,
      size: sizeChoosed,
      type: typeChoosed,
      coupon: couponChoosed
        .map((id: number, index: number) => listCoupon[id])
        .join(", "),
      price: quantity * currentProduct.cost,
    };
    let message = "";
    if (payload.quantity <= 0) {
      message += "\n Phải chọn trên 1 sản phẩm!";
    }
    if (!sizes.includes(payload.size)) {
      message += "\n Phải chọn size dép!";
    }
    if (payload.type == "") {
      message += "\n Phải chọn loại sản phẩm!";
    }
    if (message === "") {
      await cartRequest.addProductCart(payload, dispatch);
      alert(JSON.stringify(payload));
    } else {
      dispatch(responseActions.warningAlert({ message }));
    }
  }

  return (
    <div>
      <Box sx={BoxDetailStyles}>
        <h2>{currentProduct.name}</h2>
        <div
          className="cost feature"
          style={{
            fontSize: "40px",
            color: "var(--orange)",
          }}
        >
          {currentProduct.cost} ₫
        </div>
        <div className="coupon feature">
          {listCoupon.map((cou: string, index: number) => (
            <Chip
              label={cou}
              key={index}
              sx={{
                borderColor: couponChoosed.includes(index)
                  ? "var(--orange)!important"
                  : "",
              }}
              onClick={(e: any) =>
                setCoupon((prev) => {
                  let pre = [...prev];
                  if (pre.includes(index)) {
                    let res = pre.filter((c) => c !== index);
                    return res;
                  }
                  pre.push(index);
                  return pre;
                })
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
              onClick={() => {
                setCurrentProduct(data[index]);
                setType(des);
              }}
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
          <div className="stock">{currentProduct.stock} sản phẩm có sẵn</div>
        </div>
        <div className="feature">
          <ButtonMain sx={{ width: "200px!important", marginRight: "20px" }}>
            Mua ngay
          </ButtonMain>
          <ButtonOutlined onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </ButtonOutlined>
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
          {currentProduct.star}
          <Rating
            name="read-only"
            value={Number(currentProduct.star)}
            precision={0.25}
            readOnly
          />
        </div>
        <div className="appreciation">{currentProduct.reviews?.length} đánh giá</div>
        <div className="appreciation">Đã bán {currentProduct.bought}</div>
      </Box>
    </div>
  );
}

export default Detail;
