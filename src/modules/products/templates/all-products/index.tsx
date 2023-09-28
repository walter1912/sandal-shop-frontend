"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { listProduct } from "~/assets/fake-data/product";
import CustomPagination from "~/modules/global-components/CustomPagination";
import ProductItem from "~/modules/global-components/ProductItem";
import NavSearch from "../../components/NavSearch";

function AllProduct() {
  return (
    <Grid2 container spacing={1} sx={{ marginTop: "20px" }}>
      <Grid2 xs={0} md={3}>
        <NavSearch />
      </Grid2>
      <Grid2 xs={0} md={9}>
        <h2>Danh sách tất cả product</h2>
        <CustomPagination
          data={listProduct}
          per_page={6}
          component={ProductItem}
          componentProps={{
            width: 280,
            height: 228,
          }}
        />
      </Grid2>
    </Grid2>
  );
}

export default AllProduct;
