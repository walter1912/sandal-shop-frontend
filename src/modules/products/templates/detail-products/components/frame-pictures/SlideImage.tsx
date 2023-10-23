'use client'
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { Product } from "~/models/product";

function SlideImage({
  children,
  width,
  height,
  setCurrentData,
  data,
}: {
  children: React.ReactNode;
  width: string;
  height: string;
  setCurrentData: Function;
  data: Product[];
}) {
  function leftData() {
    setCurrentData((pre: number[]) => {
      return pre.map((p) => {
        let k = p - 1;
        if (k < 0) {
          k = data.length + k;
        }
        return k;
      });
    });
  }
  function nextData() {
    setCurrentData((pre: number[]) => {
      return pre.map((p) => {
        let k = p + 1;
        if (k >= data.length) {
          k = k - data.length;
        }
        return k;
      });
    });
  }
  return (
    <Box
      sx={{
        position: "relative",
        width: width,
        height: height,
        ".nav-btn": {
          position: "absolute",
          top: "50%",
          right: 0,
          left: -28,
        
          transform: "translate(0, -50%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          svg: {
            cursor:'pointer',
            fill: "var(--black)",
            fontSize: "36px",
            border: " 1px solid var(--blue)",
            borderRadius: "1px",
            padding: "6px",
          },
        },
      }}
    >
      <div className="nav-btn">
        <ArrowLeft onClick={leftData} />
      {children}
        <ArrowRight onClick={nextData} />
      </div>
    </Box>
  );
}

export default SlideImage;
