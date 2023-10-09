"use client";
import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const CustomSlider = ({ children, width, height }) => {
  return (
    <Carousel
      //   navButtonsAlwaysVisible
      fullHeightHover={false}
      autoPlay={false}
      sx={{
        width: { width },
        height: { height },
        position: "relative",
        margin: "10px",
        padding: 0,
        // backgroundColor: "var(--black)",
      }}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic
        let styles = {
          position: "relative",
          top: "calc(50% - 20px)",
          borderRadius: "4px",
          width: "50px",
          minWidth: 0,
          height: "66px",
          backgroundColor: "transparent !important",
          border: "1px solid transparent !important",
          color: "var(--white-second) !important",
          "& svg": {
            fontSize: "40px",
          },
          "&:hover": {
            opacity: "1 !important",
          },
          "&:hover svg": {
            fill: "var(--color-main)",
          },
        };

        return (
          <Button
            onClick={onClick}
            className={className}
            style={style}
            variant="outlined"
            sx={{
              ...styles,
            }}
          >
            {next && <ArrowForwardIosRounded />}
            {prev && <ArrowBackIosRounded />}
          </Button>
        );
      }}
    >
      {children}
    </Carousel>
  );
};

CustomSlider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
CustomSlider.defaultProps = {
  width: "100vw",
  height: "fit-content",
};

export default CustomSlider;
