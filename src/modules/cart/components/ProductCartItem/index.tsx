import { Delete } from "@mui/icons-material";
import { Box, Checkbox, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProductCart } from "~/models/productCart";

function ProductCartItem({
  productCart,
  handleDeleteProductCart,
  listProductBill,
}: {
  productCart: ProductCart;
  handleDeleteProductCart: Function;
  listProductBill: string[];
}) {
  const [quantity, setQuantity] = useState<number>(productCart.quantity);
  let width = 124;
  let height = 170;
  const { product } = productCart;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "10px",
        position: "relative",
        borderBottom: "1px solid var(--color-hover)",
        "& .handle_ProductCart": {
          position: "absolute",
          right: 0,
          top: "10px",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        "& .main-infor": {
          marginLeft: "20px",
          "& .des": {
            textTransform: "uppercase",
            color: "var(--black-second)",
          },
          "& .price": {
            color: "var(--orange)",
            fontSize: "20px",
          },
        },
      }}
    >
      <Image
        src={
          "https://routine.vn/media/catalog/product/cache/9eb3bb38848a3053921b46e4936c5b10/a/o/ao-unisex-10f23hodu003_beige_1__3.jpg"
        }
        alt={"anhr tamj thoi"}
        width={width}
        height={height}
        priority
      />

      <div className="main-infor">
        <h4 className="name">{product?.name}</h4>
        <div className="des">
          {product?.element.des}, {product?.size}
        </div>
        <Box
          component="div"
          className="flex-row-center"
          sx={{
            margin: "20px 20px 20px 0",
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
          {listProductBill.includes(String(productCart.id)) ? (
            <>
              <span>Số lượng: {quantity}</span>
            </>
          ) : (
            <>
              <div onClick={() => setQuantity((quantity) => quantity - 1)}>
                -
              </div>
              <div>{quantity}</div>
              <div onClick={() => setQuantity((quantity) => quantity + 1)}>
                +
              </div>
            </>
          )}
        </Box>
        <div className="price flex-row-center currentcy">
          {productCart.price}
          <span>₫</span>
        </div>
      </div>

      <div className="handle_ProductCart">
        {listProductBill.includes(String(productCart.id)) ? (
          ""
        ) : (
          <IconButton
            className="delete_productCart"
            onClick={() => handleDeleteProductCart(productCart.id)}
          >
            <Delete />
          </IconButton>
        )}
      </div>
    </Box>
  );
}

export default ProductCartItem;
