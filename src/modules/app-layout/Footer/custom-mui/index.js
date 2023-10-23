"use client"

import styled from "@emotion/styled";
import Link from "next/link";

import {
  Container,
  IconButton,
} from "@mui/material";

export const Contained = styled(Container)((props) => ({
  paddingTop: "80px",
  paddingBottom: "20px",
  marginBottom: "50px",
  width: "100vw",
  backgroundColor: "var(--white)",
  color: "var(--black)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const Connection = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
export const ShareButton = styled(IconButton)((props) => ({
  margin: "4px 16px",
  padding: "30px",
  textTransform: "none",
  color: "var(--color-text)",
  borderColor: "var(--color-text)",
  "&:hover svg": {
    fill: props.iconcolor,
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: props.iconcolor,
    borderColor: props.iconcolor,
  },
}));
export const LinkTool = styled(Link)(() => ({
  margin: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "var(--black)",
  "& a": {
    color: "var(--black)",
  },
  "&:hover": {
    color: "var(--color-main)",
    // textDecoration: "underline",
  },
  "& svg": {
    fontSize: "1rem",
    padding: 0,
    margin: 0,
    marginLeft: "4px",
  },
  span: {
    whiteSpace: "nowrap",
  },
}));
