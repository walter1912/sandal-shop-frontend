"use client";
import React, { useEffect, useRef, useState } from "react";
import FramePictrure from "./components/frame-pictures";
import { listProduct } from "~/assets/fake-data/product";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Detail from "./components/detail";
import ListComment from "./components/list-comment";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { Product } from "~/models/product";
import { ButtonMain, ButtonText } from "~/modules/global-styles/custom-mui";
import { useSearchParams } from "next/navigation";
import { commentRequest } from "~/services/comment/commentRequest";
import { Review } from "~/models/review";
import "./textarea.css";

function DetailProduct({ name }: { name: string }) {
  const searchParams = useSearchParams();

  const productBought: string = searchParams.get("productBought");
  const productBoughtId: string = searchParams.get("productBoughtId");
  console.log(
    "productBought, productBoughtId ",
    productBought,
    productBoughtId
  );
  const textareaRef = useRef(null);

  const handleInputChange = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const dispatch = useAppDispatch();
  const [contentComment, setContentComment] = useState<string>("");
  const products = useAppSelector((state) => state.products);
  const [currentProducts, setCurrentProducts] = useState<any[]>(
    products.current
  );
  const [currentProduct, setCurrentProduct] = useState<any>(listProduct[0]);

  useEffect(() => {
    console.log("params.name: ", name);
    async function getAllReview(idProduct: string) {
      const reviews: Review[] = await commentRequest.getReviews(idProduct);
      const rate = await commentRequest.getRate(idProduct);
      return { reviews, rate };
    }
    async function fetchData() {
      await productsRequest.searchAllByName(name, dispatch);
      let result = [];
      for (let i = 0; i < products.current.length; i++) {
        let product: Product = products.current[i];
        let {
          reviews,
          rate,
        }: {
          reviews: Review[];
          rate: any;
        } = await getAllReview(product._id);
        result.push({
          ...product,
          reviews: reviews,
          star: rate,
        });
      }
      setCurrentProducts(result);
      setCurrentProduct(result[0]);
    }
    fetchData();
  }, []);

  function handlePostComment(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    console.log(contentComment);
    alert(contentComment);
    let data = {
      idProduct: productBoughtId,
      content: contentComment,
    };
    commentRequest.postReview(data);
  }

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
        <Detail
          data={currentProducts}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      </Grid2>
      <Grid2 xs={12} md={5}>
        <div>mô tả sản phẩm</div>
      </Grid2>
      <Grid2 xs={12} md={7}>
        <ListComment currentProduct={currentProduct} />
        {productBought !== null ? (
          <div
            className="flex-column-center"
            style={{
              backgroundColor: "var(--white)",
              border: "2px solid var(--color-main)",
            }}
          >
            <h4> Sản phẩm: {productBought} </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <textarea
                name="contentComment"
                id="contentComment"
                value={contentComment}
                onChange={(e: any) => setContentComment(e.target.value)}
                ref={textareaRef}
                onInput={handleInputChange}
              ></textarea>

              <ButtonMain
                sx={{ width: "60px!important" }}
                onClick={handlePostComment}
              >
                Gửi
              </ButtonMain>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Grid2>
    </Grid2>
  );
}

export default DetailProduct;
