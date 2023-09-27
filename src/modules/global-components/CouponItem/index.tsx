"use client";
import React from "react";
import PropTypes from "prop-types";
import { Box, Card } from "@mui/material";
import { Gesture, ListAlt, Photo } from "@mui/icons-material";
import { CouponDto } from "~/models/coupon";
import Image from "next/image";
import styles from './coupon.module.css'
import Icon from "./icon";
// import IconPlay from '../IconPlay';
// code: "",
// name: "",
// percent: 0,
// maxDiscount
// start: new Date(),
// end: new Date(),
// countUsed: 0
const CouponItem = ({ coupon }: { coupon: CouponDto }) => {
  let { code, name, img, percent } = coupon;

  return (
    <Card
    className={styles.coupon}
      sx={{
        // color: "var(--white)",
        width: "fit-content",
        padding: "10px",
        height: "312px",
        postion: "relative",
        // backgroundColor: "var(--black)",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        "& a": {
          marginTop: "20px",
          maxWidth: "400px",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          width: "fit-content",
          position: "relative",
        }}
      >
        <Icon />
        <Image src={String(img)} alt={name} height={212} width={380} />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            padding: "0 10px",
            background:
              "linear-gradient(360deg, rgba(26,26,26,.7) 36%,rgba(49,49,50,0.4) 60%, rgba(245,245,245,0.01) 100%)",
            display: "flex",
            alignItems: "center",
            fontSize: "1.2rem",
            "& svg:hover": {
              fill: "var(--color-main)",
            },
            "& span": {
              textTransform: "capitalize",
              marginLeft: "16px",
            },
          }}
        >
          <Gesture />
          {/* {type === 'list' &&  <ListAlt />} */}
          {/* {type === 'photos' &&  <Photo />} */}
          {/* {type === 'video' &&  <IconPlay size="28px" />} */}
          {/* <span>{type === 'video' ? coupon.video.time : type}</span> */}
        </Box>
      </div>
      {/* <CardContent> */}
      <span>{name}</span>
      <a
        href='#'
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "var(--blue)" }}
        className="card__actions"
      >
        Sử dụng
      </a>
    </Card>
  );
};

CouponItem.propTypes = {};

export default CouponItem;
