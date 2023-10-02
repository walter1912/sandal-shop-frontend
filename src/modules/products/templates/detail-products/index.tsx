import React from "react";
import FramePictrure from "./components/frame-pictures";
import { listProduct } from "~/assets/fake-data/product";

function DetailProduct() {
  return (
    <div>
      <FramePictrure data={listProduct} styles={{}} />
    </div>
  );
}

export default DetailProduct;
