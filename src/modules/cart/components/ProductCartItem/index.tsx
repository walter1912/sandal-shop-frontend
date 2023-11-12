import { AddComment, Delete } from "@mui/icons-material";
import { Box, Checkbox, Divider, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { ProductCart } from "~/models/productCart";
import { BoxFrameSetQuantityStyle, BoxLayoutStyle } from "./styles";
import { ButtonText } from "~/modules/global-styles/custom-mui";
import { cartRequest } from "~/services/cart/cartRequest";
import { useAppDispatch } from "~/lib/store/hook";
import { Product } from "~/models/product";
import { useRouter } from "next/navigation";

function ProductCartItem({
  productCart,
  handleDeleteProductCart,
  listProductBill,
  isBought = false,
}: {
  productCart: ProductCart;
  handleDeleteProductCart: Function;
  listProductBill: string[];
  isBought?: boolean;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  function handleComment() {
    const productBought = productCart.type + ";" + productCart.size;
    setTimeout(() => {
      router.push(
        `/products/${productCart.product?.name}?productBought=${String(productBought)}&productBoughtId=${String(productCart.product?._id)}`
      );
    }, 500);
  }
  const [currentProduct, setCurrentProduct] =
    useState<ProductCart>(productCart);
  let width = 124;
  let height = 170;
  const { product } = productCart;

  async function handleUpdateProductCart() {
    let price = currentProduct.quantity * Number(product?.cost);
    await cartRequest.updateProductCart(
      { ...currentProduct, price: price },
      dispatch
    );
  }

  return (
    <Box component="div" className="productCartItem" sx={BoxLayoutStyle}>
      <Image
        src={String(product?.img)}
        alt={"anhr tamj thoi"}
        width={width}
        height={height}
        priority
      />

      <div className="main-infor">
        <h4 className="name">{product?.name}</h4>
        <div className="des">
          type: {productCart.type}, size: {productCart.size}
        </div>
        <Box
          component="div"
          className="flex-row-center"
          sx={BoxFrameSetQuantityStyle}
        >
          {listProductBill.includes(String(productCart._id)) ? (
            <>
              <span>Số lượng: {currentProduct.quantity}</span>
            </>
          ) : (
            <>
              <div
                onClick={() => {
                  setCurrentProduct((pre) => {
                    let newProduct: ProductCart = {
                      ...pre,
                      quantity: pre.quantity - 1,
                    };
                    return newProduct;
                  });
                }}
              >
                -
              </div>
              <div>{currentProduct.quantity}</div>
              <div
                onClick={() =>
                  setCurrentProduct((pre) => {
                    let newProduct: ProductCart = {
                      ...pre,
                      quantity: pre.quantity + 1,
                    };
                    return newProduct;
                  })
                }
              >
                +
              </div>
            </>
          )}
        </Box>
        <div className="price flex-row-center currentcy">
          {product?.cost
            ? currentProduct.quantity * product?.cost
            : productCart.price}
          <span>₫</span>
        </div>
      </div>
     
      <div className="handle_ProductCart">
      {isBought && (
        <ButtonText
          onClick={(e) => {
            handleComment();
          }}
        >
          <Tooltip title={"Đánh giá sản phẩm"}>
            <AddComment />
          </Tooltip>
        </ButtonText>
      )}

        {listProductBill.includes(String(productCart._id)) ? (
          ""
        ) : (
          <>
            <IconButton
              className="delete_productCart"
              onClick={() => handleDeleteProductCart(productCart._id)}
            >
              <Delete />
            </IconButton>
            {currentProduct.quantity === productCart.quantity ? (
              <></>
            ) : (
              <ButtonText onClick={handleUpdateProductCart}>
                Lưu thay đổi
              </ButtonText>
            )}
          </>
        )}
      </div>
    </Box>
  );
}

export default ProductCartItem;
