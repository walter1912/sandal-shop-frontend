"use client";
import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import { Product } from "~/models/product";
import CustomSlider from "~/modules/global-components/CustomSlider";
import SlideImage from "./SlideImage";
import { log } from "console";

function FramePictrure({
  data,
  styles,
  currentProduct,
  setCurrentProduct,
}: {
  data: Product[];
  styles: object;
  currentProduct: Product;
  setCurrentProduct: Function;
}) {
  const [currentData, setCurrentData] = useState<number[]>(
    data.map((p: any, index: number) => index)
  );
  const {
    width = 450,
    height = 450,
    childSize = 82,
  }: {
    width?: number;
    height?: number;
    childSize?: number;
  } = styles;

  useEffect(() => {
    let elements = document.querySelectorAll(".childImage");

    elements.forEach((element: any) => {
      element.style.margin = "2px";
      element.style.border = "2px solid transparent";

      element.addEventListener("mouseout", () => {
        element.style.borderColor = "transparent";
      });
      element.addEventListener("mouseover", () => {
        element.style.cursor = "pointer";
        element.style.borderColor = "var(--blue)";
        setCurrentProduct(data[element.getAttribute("data-key")]);
      });
    });
  }, []);

  return (
    <div className="flex-column-center">
      <Image
        src={String(currentProduct.img)}
        alt={String(currentProduct.element.des)}
        width={width}
        height={height}
        priority={true}
      />

      <SlideImage
        width={`${width}px`}
        height={`${childSize + 10}px`}
        setCurrentData={setCurrentData}
        data={data}
      >
        {currentData.map((p, index) => (
          <Image
            className="childImage"
            key={index}
            src={data[p].img}
            alt={String(data[p].element.des)}
            data-key={p}
            width={childSize}
            height={childSize}
            // priority={true}
          />
        ))}
      </SlideImage>
    </div>
  );
}

export default FramePictrure;
