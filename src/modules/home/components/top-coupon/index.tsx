"use client";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { listCoupon } from "~/assets/fake-data/coupon";
import CouponItem from "~/modules/global-components/CouponItem";
import CustomSlider from "~/modules/global-components/CustomSlider";
import SectionTitle from "~/modules/global-components/SectionTitle";
import { ButtonText } from "~/modules/global-styles/custom-mui";

function TopCoupon() {
  return (
    <Grid2 width="100%">
      <div
        className="flex-row-center"
        style={{ justifyContent: "space-between" }}
      >
        <SectionTitle title={"Top mã giảm giá hot"} />

        <ButtonText sx={{ color: "var(--blue)", fontSize: "1.1rem" }}>
          <span>Xem tất cả</span>
          <ArrowForwardIosOutlined />
        </ButtonText>
      </div>
      <CustomSlider width={"860px"}>
        {listCoupon
          .reduce<number[]>((result, cp, index) => {
            if (index % 2 === 0) {
              result.push(index);
            }
            return result;
          }, [])
          .map((value) => {
            let j = value + 1;
            if (j === listCoupon.length) {
              j = 0;
            }

            return (
              <div
                className="flex-row-center"
                style={{ padding: 0, margin: 0 }}
              >
                <CouponItem coupon={listCoupon[value]} key={value} />
                <CouponItem coupon={listCoupon[j]} key={value} />
              </div>
            );
          })}
      </CustomSlider>
    </Grid2>
  );
}

export default TopCoupon;
