"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import AllProduct from "~/modules/products/templates/all-products";

function AllProductPage() {
  const searchParams = useSearchParams();

  const keyword: any = searchParams?.get("keyword");
  return (
    <div>
      <AllProduct searchKeyword={String(keyword)} />
    </div>
  );
}

export default AllProductPage;
