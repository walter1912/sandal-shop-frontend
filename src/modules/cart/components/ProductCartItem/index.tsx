import { Delete } from "@mui/icons-material";
import { Box, Checkbox, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProductCart } from "~/models/productCart";
import { BoxFrameSetQuantityStyle, BoxLayoutStyle } from "./styles";

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
    <Box component="div" className="productCartItem" sx={BoxLayoutStyle}>
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
          sx={BoxFrameSetQuantityStyle}
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
