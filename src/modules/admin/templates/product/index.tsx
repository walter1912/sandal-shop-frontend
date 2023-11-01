"use client";
import React from "react";
import PropTypes from "prop-types";
import ListProducts from "./components/list-products";
import { ButtonText } from "~/modules/global-styles/custom-mui";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";


function ManagementProduct() {
    const router = useRouter();
    function addNewProductName(){
        router.push('products/create-product-name')
    }
  return (
    <div 
    >
      <ButtonText
      onClick={addNewProductName}
      >
        <Add />
        <span>thêm mới sản phẩm</span>
      </ButtonText>
      <ListProducts />
    </div>
  );
}

export default ManagementProduct;
