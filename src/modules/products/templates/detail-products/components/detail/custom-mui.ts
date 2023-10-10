'use client'
import styled from "@emotion/styled";

export const BoxDetailStyles = {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    "& div.feature": {
      marginTop: "20px",
    },
    "& .MuiChip-root": {
      fontSize: "20px",
      cursor: "pointer",
      border: "1px solid transparent",
      marginLeft: "20px",
    },
    "& .MuiChip-root.typeElement": {
      borderColor: "var(--color-hover)",
      borderRadius: "4px",
      background: "transparent",
    },
  }