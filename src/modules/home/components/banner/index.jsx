"use client";
import Image from "next/image";
import React from "react";
import { listBanner } from "~/assets/fake-data/banner";
import CustomSlider from "~/modules/global-components/CustomSlider";
function Banner() {
  return (
    <CustomSlider width={"900px"} height={"90vh"}>
      {listBanner.map(({ img }) => (
        <Image
          src={img.src}
          alt={"hello"}
          fill
          style={{
            width: "100%",
            height: "100%",
          }}
          priority
        />)
      )}
    </CustomSlider>
  );
}

export default Banner;
