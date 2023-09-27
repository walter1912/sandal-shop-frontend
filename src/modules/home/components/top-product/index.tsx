import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Product } from "~/models/product";
import ProductItem from "~/modules/global-components/ProductItem";
import SectionTitle from "~/modules/global-components/SectionTitle";
import { ButtonText } from "~/modules/global-styles/custom-mui";

function TopProduct() {
  let product: Product = {
    id: "id",
    name: "dép tông loại một",
    element: {
      sole: {
        color: "",
        material: "",
      },
      sandal: {
        color: "",
        material: "",
      },
    },
    style: "tong",
    stock: 0,
    cost: 30000,
    coupon: "",
    star: 4.6,
    img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhahy42migabe6",
    bought: 100,
  };
  let listProduct = [];
  for (let i = 0; i < 10; i++) {
    listProduct.push(product);
  }

  return (
    <div>
      <div
        className="flex-row-center"
        style={{ justifyContent: "space-between" }}
      >
        <SectionTitle title={"Sản phẩm bán chạy"} />

        <ButtonText sx={{ color: "var(--blue)", fontSize: "1.1rem" }}>
          <span>Xem tất cả</span>
          <ArrowForwardIosOutlined />
        </ButtonText>
      </div>

      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listProduct.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </Grid2>
    </div>
  );
}

export default TopProduct;
