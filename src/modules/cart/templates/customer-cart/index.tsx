"use client";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Checkbox, List, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "../../components/ProductCartItem";
import { ButtonMain, ButtonOutlined } from "~/modules/global-styles/custom-mui";
import { productCart, productCart2 } from "~/assets/fake-data/productcart";
import { cartRequest } from "~/services/cart/cartRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { cartActions } from "~/services/cart/cartSlice";
import { useRouter } from "next/navigation";
import { responseActions } from "~/services/response/responseSlice";

function CustomerCart() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [couponChoosed, setCouponChoosed] = useState<string>("");
  const [listProductBill, setListProductBill] = useState<string[]>([]);

  const [listProductcart, setListProductcart] = useState<ProductCart[]>([
    productCart,
    productCart2,
  ]);
  useEffect(() => {
    cartRequest.getCart(dispatch);
    setListProductcart(cart.listProductCart);
  }, []);

  function handleDeleteProductCart(idProductCart: string) {
    setListProductcart((pre) =>
      pre.filter((pro: ProductCart) => pro?._id !== idProductCart)
    );
  }

  const router = useRouter();
  function handleCartToBill() {
    dispatch(cartActions.setListIdproductBill(listProductBill));
    router.push("/pending-bill");
    setTimeout(() => {
      dispatch(
        responseActions.toastify({
          message: "Đang chuyển tới trang thanh toán",
          type: "success",
        })
      );
    }, 1000);
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
              <div className="flex-row-center" key={index}>
                <Checkbox
                  onChange={(e: any) =>
                    setListProductBill((pre: string[]) => {
                      const updatedList: string[] = [...pre];
                      if (e.target.checked) {
                        updatedList.push(String(productCart._id));
                      } else {
                        const index = updatedList.indexOf(
                          String(productCart._id)
                        );
                        if (index !== -1) {
                          updatedList.splice(index, 1);
                        }
                      }
                      return updatedList;
                    })
                  }
                  sx={{
                    color: "var(--orange)",
                    "&.Mui-checked": {
                      color: "var(--orange)",
                    },
                  }}
                />
                <ProductCartItem
                  key={index}
                  handleDeleteProductCart={handleDeleteProductCart}
                  productCart={productCart}
                  listProductBill={listProductBill}
                />
              </div>
            ))}
          </List>
          <div>Đã thêm {listProductBill.length} sản phẩm </div>
          <div className="flex-column-center">
            <ButtonMain onClick={handleCartToBill}>Thanh toán</ButtonMain>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default CustomerCart;
