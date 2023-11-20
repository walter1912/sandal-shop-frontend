"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { memo, useCallback, useEffect, useState } from "react";
import CustomPagination from "~/modules/global-components/CustomPagination";
import ProductItem from "~/modules/global-components/ProductItem";
import NavSearch from "../../components/NavSearch";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";

function AllProduct({ searchKeyword = "" }: { searchKeyword?: string }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const searchData = () => {
    productsRequest.searchProduct(searchKeyword, dispatch);
    console.log("searchKeyword: ", searchKeyword);
  };

  const [currentProduct, setCurrentProduct] = useState<any[]>(products.all);
  useEffect(() => {
    if (searchKeyword != "null") {
      searchData();
    } else {
      productsRequest.findAllProduct(dispatch);
    }
    setCurrentProduct(products.all);
  }, [searchKeyword]);
  return (
    <Grid2 container spacing={1} sx={{ marginTop: "20px" }}>
      <Grid2 xs={0} md={3}>
        <NavSearch setCurrentProduct={setCurrentProduct} />
      </Grid2>
      <Grid2 xs={0} md={9}>
        <h2>
          {searchKeyword != "null"
            ? `Các sản phẩm có tên = ${searchKeyword}`
            : "Danh sách tất cả product"}{" "}
        </h2>
        <CustomPagination
          data={currentProduct}
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

export default memo(AllProduct);
