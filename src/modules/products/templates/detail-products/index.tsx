"use client";
import React, { useEffect, useState } from "react";
import FramePictrure from "./components/frame-pictures";
import { listProduct } from "~/assets/fake-data/product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Detail from "./components/detail";
import ListComment from "./components/list-comment";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { Product } from "~/models/product";

function DetailProduct({ name }: { name: string }) {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products);
  const [currentProducts, setCurrentProducts] = useState<Product[]>(
    products.current
  );
  const [currentProduct, setCurrentProduct] = useState<Product>(listProduct[0]);
  useEffect(() => {
    console.log("params.name: ", name);
    async function fetchData() {
      await productsRequest.searchAllByName(name, dispatch);
      setCurrentProducts(products.current);
      setCurrentProduct(products.current[0]);
    }
    fetchData();
  }, []);

  return (
    <Grid2 container spacing={1}>
      <Grid2 xs={12} md={5}>
        <FramePictrure
          data={currentProducts}
          styles={{}}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Detail data={currentProducts}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct} />
      </Grid2>
      <Grid2 xs={12} md={5}>
        <div>mô tả sản phẩm</div>
      </Grid2>
      <Grid2 xs={12} md={7}>
        <ListComment />
      </Grid2>
    </Grid2>
  );
}

export default DetailProduct;
