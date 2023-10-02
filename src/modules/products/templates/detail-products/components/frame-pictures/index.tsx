"use client";
import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import { Product } from "~/models/product";
import CustomSlider from "~/modules/global-components/CustomSlider";
import SlideImage from "./SlideImage";
import { log } from "console";

function FramePictrure({ data, styles }: { data: Product[]; styles: object }) {
  const [currentProduct, setCurrentProduct] = useState<Product>(data[0]);
  const [currentData, setCurrentData] = useState<number[]>([0, 1, 2, 3, 4]);
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
        //  element.setAttribute('cursor', 'pointer');
        element.style.cursor = "pointer";
        element.style.borderColor = "var(--blue)";
        // console.log('key: ',  element.getAttribute('data-key'));

        // element.getAttribute('data-key')
        setCurrentProduct(data[element.getAttribute("data-key")]);
      });
    });
  }, []);

  return (
    <div className='flex-column-center'>
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
            data-key={index}
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
