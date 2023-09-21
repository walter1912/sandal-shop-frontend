"use client";
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  MenuItem,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LaunchSharp,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";
// import { Imgs } from "../../../assets/assets";

const Contained = styled(Container)((props) => ({
  paddingTop: "80px",
  paddingBottom: "20px",
  marginBottom: "50px",
  width: "100vw",
  backgroundColor: "var(--black)",
  color: "var(--white)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const Connection = styled("div")((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
const ShareButton = styled(IconButton)((props) => ({
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
const LinkTool = styled(Link)(() => ({
  margin:"10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  color: "var(--white)",
  "& a": {
    color: "var(--white)",
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
  "span": {
    whiteSpace: "nowrap",
  },
}));
const toolMenus = [
  {
    action: "Giúp đỡ",
    route: "",
    blank: true,
  },
  {
    action: "Chính sách giao hàng",
    route: "",
    blank: true,
  },
  {
    action: "Chính sách thanh toán",
    route: "",
    blank: true,
  },
  {
    action: "Liên hệ với shop",
    route: "",
  },
];
const Footer = (props) => {
  return (
    <Contained>
      <Connection>
        <ShareButton variant="text" iconcolor={"#0470e5"}>
          <Facebook />
        </ShareButton>
        <ShareButton variant="text" iconcolor={"#ff3131"}>
          <YouTube />
        </ShareButton>
        <ShareButton variant="text" iconcolor={"#f60a60"}>
          <Instagram />
        </ShareButton>
        <ShareButton variant="text" iconcolor={"#1da1f2"}>
          <Twitter />
        </ShareButton>
      </Connection>
      <Grid2 container style={{ width: "80%" }}>
        {toolMenus.map((tool, index) => (
          <Grid2 marginTop={"16px"}>
            <LinkTool href={tool.route} key={index}>
              <span> {tool.action}</span>
              {tool.blank !== undefined && (
                <a href={tool.route} target="_blank" rel="noopener noreferrer">
                  <LaunchSharp />
                </a>
              )}
            </LinkTool>
          </Grid2>
        ))}
      </Grid2>
      {/* <Imgs.Amazone style={{ margin: "16px auto" }} /> */}
      <p style={{ color: "var(--color-second)", fontSize: "0.88rem" }}>
        © 1990-2023 by Walter, Inc.
      </p>
    </Contained>
  );
};

Footer.propTypes = {};

export default Footer;
