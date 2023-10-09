"use client";
import React from "react";
import PropTypes from "prop-types";
import { Box, Card } from "@mui/material";
import { ConfirmationNumber, Gesture, ListAlt, Photo } from "@mui/icons-material";
import { CouponDto } from "~/models/coupon";
import Image from "next/image";
import styles from "./coupon.module.css";
import Icon from "./icon";
import { ButtonText } from "~/modules/global-styles/custom-mui";
// import IconPlay from '../IconPlay';
// code: "",
// name: "",
// percent: 0,
// maxDiscount
// start: new Date(),
// end: new Date(),
// countUsed: 0
const CouponItem = ({ coupon }: { coupon: CouponDto }) => {
  let { code, name, img, percent, countUsed } = coupon;

  return (
    <Card
      className={styles.coupon}
      sx={{
        // color: "var(--white)",
        width: "fit-content",
        padding: "10px",
        height: "322px",
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
            // fontSize: "1.2rem",
            fontWeight: 500,
            "& svg": {
              fill: "var(--color-main)",
            },
            "& span": {
              // textTransform: "capitalize",
              marginLeft: "16px",
              color: "var(--color-main)",
            },
          }}
        >
          <ConfirmationNumber />
          <span>
            {countUsed} lượt đã dùng
          </span>
        </Box>
      </div>
      {/* <CardContent> */}
      <span style={{margin: '10px 10px'}}>{name}</span>
    
        <ButtonText sx={{padding:'20px'}}> Sử dụng</ButtonText>
    
    </Card>
  );
};

CouponItem.propTypes = {};

export default CouponItem;
