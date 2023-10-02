import React from "react";
import FramePictrure from "./components/frame-pictures";
import { listProduct } from "~/assets/fake-data/product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Detail from "./components/detail";
import ListComment from "./components/list-comment";

function DetailProduct() {
  return (
    <Grid2 container spacing={1}>
      <Grid2 xs={12} md={5}>
        <FramePictrure data={listProduct} styles={{}} />
      </Grid2>

      <Grid2 xs={12} md={7}>
        <Detail data={listProduct} />
      </Grid2>
      <Grid2 xs={12} md={5}>
        <div>
          mô tả sản phẩm
        </div>
      </Grid2>
      <Grid2 xs={12} md={7}>
        <ListComment />
      </Grid2>
    </Grid2>
  );
}

export default DetailProduct;
