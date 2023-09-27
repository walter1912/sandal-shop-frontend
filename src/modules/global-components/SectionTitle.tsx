'use client'
import React from "react";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";

const SectionTitle = ({ title }: {title: string}) => {
  return (
    <Box
      component="h2"
      className="flex-row-center"
      sx={{
        color: "var(--black)",
        // cursor:'pointer',
        // "&:hover svg": {
        //   color: "var(--color-main)",
        // },
       
      }}
    >
      <Divider
        sx={{
          borderLeft: "2px solid var(--color-main)",
          borderRight: "2px solid var(--color-main)",
          borderRadius: "4px",
          height: "1.8rem",
          marginRight: "12px",
        }}
        orientation="vertical"
      />
      <span className="title">{title}</span>

      <ArrowForwardIosRounded
        sx={{
          fontSize: "2rem",
        }}
      />
    </Box>
  );
};

export default SectionTitle;
