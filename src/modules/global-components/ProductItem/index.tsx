"use client";
import React from "react";
import { Box, CardContent, Tooltip } from "@mui/material";
import {
  Add,
  Favorite,
  HearingOutlined,
  PlayArrowRounded,
  StarOutlineRounded,
  StarRounded,
} from "@mui/icons-material";
import { Product } from "~/models/product";
import { ButtonStyled, CardStyled, IconButtonStyled } from "./custom-mui";
import { ButtonText } from "~/modules/global-styles/custom-mui";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({
  data,
  width,
  height,
}: {
  data: Product;
  width?: number;
  height?: number;
}) => {
  const { _id, name, star, cost, img, bought } = data;
  if (width === undefined) {
    width = 370;
  }
  if (height === undefined) {
    height = 260;
  }
  return (
    <CardStyled width={width} height={height}>
      <Link href={`/products/${name}`}>
        <Image
          src={String(img)}
          alt={name}
          width={width}
          height={height}
          priority
          // style={{
          //   width: `${width}`,
          //   height:  `${height}`,
          // }}
        />
      </Link>
      <CardContent
        sx={{
          a: {
            color: "var(--black)",
          },
          "a:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Link href={`/products/${name}`}>
          <span>{name} </span>
        </Link>
        <Box
          className="flex-row-center"
          sx={{
            margin: "20px 0",

            justifyContent: "space-between",
            ".cost": {
              color: "var(--orange)",
              fontSize: "1.4rem",
              fontWeight: "600",
              letterSpacing: "1.4px",
            },
            ".donvi": {
              padding: "0",
              lineHeight: "1.4rem",
              fontSize: "1.4rem",
            },
            ".bought": {
              color: "var(--black-second)",
            },
          }}
        >
          <span className=" cost">
            {cost}
            <span className="donvi">₫</span>
          </span>

          <span className="bought">Đã bán: {bought}</span>
        </Box>

        <div
          className="flex-row-center"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <StarRounded
              sx={{
                color: "var(--color-main)",
                fontSize: "1.1912rem",
              }}
            />
            <span>{star}</span>
          </div>
          <IconButtonStyled sx={{ position: "relative" }}>
            <Tooltip
              title="Thêm vào yêu thích"
              placement="top"
              sx={{
                padding: 0,
              }}
            >
              <Favorite />
            </Tooltip>
          </IconButtonStyled>
        </div>
      </CardContent>
    </CardStyled>
  );
};

export default ProductItem;
