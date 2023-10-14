"use client";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// import { listCoupon } from "~/assets/fake-data/coupon";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import CouponItem from "~/modules/global-components/CouponItem";
import CustomSlider from "~/modules/global-components/CustomSlider";
import SectionTitle from "~/modules/global-components/SectionTitle";
import { ButtonText } from "~/modules/global-styles/custom-mui";
import { couponsRequest } from "~/services/coupons/couponsRequest";

function TopCoupon() {
  const dispatch = useAppDispatch();
  const coupons = useAppSelector((state) => state.coupons);
  const router = useRouter();
  useEffect(() => {
    couponsRequest.getTopCoupon(dispatch);
  }, []);
  return (
    <Grid2 width="100%">
      <div
        className="flex-row-center"
        style={{ justifyContent: "space-between" }}
      >
        <SectionTitle title={"Top mã giảm giá hot"} />

        <ButtonText
          sx={{ color: "var(--blue)", fontSize: "1.1rem" }}
          onClick={() => {
            router.push("/coupons");
          }}
        >
          <span>Xem tất cả</span>
          <ArrowForwardIosOutlined />
        </ButtonText>
      </div>  
      <CustomSlider width={"860px"}>
        {coupons.top
          .reduce<number[]>((result, cp, index) => {
            if (index % 2 === 0) {
              result.push(index);
            }
            return result;
          }, [])
          .map((value) => {
            let j = value + 1;
            if (j === coupons.top.length) {
              j = 0;
            }

            return (
              <div
                className="flex-row-center"
                style={{ padding: 0, margin: 0 }}
              >
                <CouponItem coupon={coupons.top[value]} key={value} />
                <CouponItem coupon={coupons.top[j]} key={value + j} />
              </div>
            );
          })}
      </CustomSlider>
    </Grid2>
  );
}

export default TopCoupon;
