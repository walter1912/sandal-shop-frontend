"use client";
import {
  Box,
  Chip,
  FormControlLabel,
  FormLabel,
  List,
  Radio,
  RadioGroup,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { productCart2 } from "~/assets/fake-data/productcart";
import { ProductCart } from "~/models/productCart";
import ProductCartItem from "~/modules/cart/components/ProductCartItem";
import { ButtonMain, ButtonOutlined } from "~/modules/global-styles/custom-mui";
import ChooseAddress from "./choose-address";
import { BoxNavbarItemCalcCostStyles, Grid2NavbarListStyles } from "./styles";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { cartRequest } from "~/services/cart/cartRequest";
import { responseActions } from "~/services/response/responseSlice";
import { type } from "os";
import { billsActions } from "~/services/bills/billsSlice";
import { PendingBill } from "~/models/pending-bill";
import { billsRequest } from "~/services/bills/billsRequest";
import { Bill } from "~/models/bill";

function PendingBillTemplate() {
  const dispatch = useAppDispatch();
  const bills = useAppSelector((state) => state.bills);
  const [bill, setBill] = useState<any>({});

  const [listProductBill, setListProductBill] = useState<ProductCart[]>([]);
  // const listIdProductBill = [String(productCart.id), String(productCart2.id)];
  const [couponChoosed, setCouponChoosed] = useState<string>(
    bills?.current?.coupon ?? ""
  );
  const [address, setAddress] = useState<string>("");

  const [priceCart, setPriceCart] = useState<number>(0);
  const [costShip, setCostShip] = useState<number>(0);
  const [typePay, setTypePay] = useState<string>("offline");
  const [note, setNote] = useState<string>("");
  const [isPendingBill, checkPendingBill] = useState<boolean>(true);

  const styleInput = {
    width: "178px",
    height: "40px",
    paddingLeft: "10px",
  };

  const { listIdProductBill = ["6525c0b1ad1e775b8620a2ab"] } = useAppSelector(
    (state) => state.cart
  );

  const { currrentProductCarts } = useAppSelector((state) => state.bills);
  useEffect(() => {
    let resultList: ProductCart[] = [];
    let total = 0;
    async function fetchData() {
      for (let i = 0; i < listIdProductBill.length; i++) {
        let id = listIdProductBill[i];
        const productCart = await cartRequest.getProductCart(id);
        if (productCart === undefined) {
          dispatch(
            responseActions.toastify({
              message: `Không tìm thấy sp trong giỏ hàng có id=${id}`,
              type: "error",
            })
          );
        } else {
          resultList.push(productCart);
          total += productCart.price;
        }
      }
      setPriceCart(total);
      setListProductBill(resultList);
      dispatch(billsActions.setCurrrentProductCarts(resultList));
    }
    // setListProductBill(currrentProductCarts);
    fetchData();
    console.log("listProductBill: ", listProductBill);
  }, []);

  // create pending bill
  async function createPendingBill() {
    let ship = listProductBill.reduce(
      (totalQuantity: number, productBill: ProductCart) => {
        return totalQuantity + productBill.quantity;
      },
      0
    );
    // mỗi sản phẩm sẽ tính 2000 tiền ship min là 20000
    ship *= 2000;
    if (ship < 20000) ship = 20000;
    setCostShip(ship);
    let pendingBill: PendingBill = {
      address,
      ship: ship,
      coupon: couponChoosed,
      productCarts: listIdProductBill,
      note,
      typePay,
    };
    alert(JSON.stringify(pendingBill));
    const bill = await billsRequest.createPendingBill(pendingBill, dispatch);
    if (bill) {
      setBill(bill);
    }
    checkPendingBill(false);
  }
  async function saveBill() {}
  return (
    <div>
      <Grid2 container spacing={6}>
        <Grid2 xs={12} md={6}>
          <h4>{listProductBill.length} sản phẩm</h4>
          <List>
            {listProductBill.map((productBill: ProductCart, index: number) => (
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
            {isPendingBill ? (
              <ChooseAddress
                stylesSelect={styleInput}
                setAddress={setAddress}
              />
            ) : (
              <>
                <div className="navbar-item navbar-item--bg">
                  <h4> Địa chỉ nhận hàng</h4>
                  <span>{bill.address} </span>
                </div>
              </>
            )}
          </Box>
          {isPendingBill ? (
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
          ) : (
            <></>
          )}
          <Box component="div" className="navbar-item navbar-item--bg">
            <textarea
              name="note"
              placeholder="Viết ghi chú cho đơn hàng"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ paddingLeft: "14px", minWidth: "60%" }}
            />
          </Box>
          <Box className="navbar-item navbar-item--border">
            <FormLabel id="form-choose-typePay">
              Chọn phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="form-choose-typePay"
              name="typePay"
              value={typePay}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTypePay((e.target as HTMLInputElement).value)
              }
            >
              <FormControlLabel
                value="offline"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "var(--orange)",
                      },
                    }}
                  />
                }
                label="Trực tiếp"
              />
              <FormControlLabel
                value="banking"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "var(--orange)",
                      },
                    }}
                  />
                }
                label="Chuyển khoản"
              />
            </RadioGroup>
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
              {isPendingBill ? (
                <></>
              ) : (
                <>
                  <span>Các mã giảm giá được áp dụng:</span>
                  <ul>
                    {bill.couponUsed?.length > 0 && bill.couponUsed.map((cou: string, index: number) => {
                      if (cou != "") {
                        return (
                          <Chip
                            key={index}
                            label={cou}
                            color="success"
                            variant="outlined"
                            style={{ marginRight: "6px" }}
                          />
                        );
                      }
                      return <></>;
                    })}
                  </ul>
                  <span className="calc-cost">
                    Được giảm giá:{" "}
                    <span className="currentcy">
                      {priceCart + bill.ship - bill.total} <span>₫</span>
                    </span>
                  </span>
                </>
              )}
            </div>
            <div className="ship-cost calc-cost">
              Phí ship:{" "}
              <span className="currentcy">
                + {costShip} <span>₫</span>{" "}
              </span>
            </div>

            <ButtonMain onClick={isPendingBill ? createPendingBill : saveBill}>
              {isPendingBill ? (
                <>Tính toán hóa đơn</>
              ) : (
                <>
                  <span
                    className="currentcy"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "2px",
                    }}
                  >
                    {" "}
                    Thanh toán {bill.total}
                    <span>₫</span>
                  </span>
                </>
              )}
            </ButtonMain>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default PendingBillTemplate;
