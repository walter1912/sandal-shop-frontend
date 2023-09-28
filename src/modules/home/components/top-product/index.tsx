import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { listProduct } from "~/assets/fake-data/product";
import { Product } from "~/models/product";
import ProductItem from "~/modules/global-components/ProductItem";
import SectionTitle from "~/modules/global-components/SectionTitle";
import { ButtonText } from "~/modules/global-styles/custom-mui";

function TopProduct() {
 

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
          <ProductItem data={product} key={index} />
        ))}
      </Grid2>
    </div>
  );
}
export default TopProduct;

// export {listProduct};