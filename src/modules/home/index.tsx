"use client";
import React from "react";
import Banner from "./components/banner";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Divider } from "@mui/material";
import TopCoupon from "./components/top-coupon";
import TopProduct from "./components/top-product";

function HomePage() {
  return (
    <div>
      <Grid2 width="100vw" padding={"0 40px"}>
        <Banner />
        <Divider />
        <TopCoupon />
        <Divider />
        <TopProduct />
      </Grid2>
    </div>
  );
}

export default HomePage;
