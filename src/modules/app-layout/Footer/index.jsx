"use client";
import React from "react";
import PropTypes from "prop-types";
import { Connection, Contained, LinkTool, ShareButton } from "./custom-mui";
import {
  Facebook,
  Instagram,
  LaunchSharp,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import toolMenus from "./data/toolMenus";
// import { Imgs } from "../../../assets/assets";

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
          <Grid2 key={index} sx={{ marginTop: "16px" }}>
            <LinkTool href={tool.route} key={index}>
              <span> {tool.action}</span>
              {tool.blank !== undefined && (
                // <a href={tool.route} target="_blank" rel="noopener noreferrer">
                <LaunchSharp />
                // </a>
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
