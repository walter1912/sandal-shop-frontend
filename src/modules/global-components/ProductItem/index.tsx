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

const ProductItem = ({ product }: { product: Product }) => {
  const { id, name, star, cost, img, bought } = product;

  const width = "370px";
  const height = "260px";
  return (
    <CardStyled width={width} height={height}>
      {/* <PosterBookmark
        poster={movie.poster}
        trailer={movie.link}
        width="186px"
        height="272px"
      /> */}
      <Image
        src={String(product.img)}
        alt={name}
        width={370}
        height={260}
        priority
      />
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
        <a href={id} target="_blank" rel="noopener noreferrer">
          <span>{name} </span>
        </a>
        <Box
          className="flex-row-center"
          sx={{
            margin: "20px 0",
           
            justifyContent: "space-between",
            ".cost" : {
              color:'var(--orange)',
              fontSize: "1.4rem",
              fontWeight: "600",
              letterSpacing: "1.4px",
            },
            ".donvi": {
              padding: "0",
              lineHeight: "1.4rem",
              fontSize: "1.4rem",
            },
            '.bought': {
              color: 'var(--black-second)'
            }
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
