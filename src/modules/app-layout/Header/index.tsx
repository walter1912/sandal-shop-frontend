"use client"
import React, { useState } from "react";

//material UI
import {
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//asset
// import { Imgs } from "../../../assets/assets";
//react-router
import { ArrowDropDown, FactCheck } from "@mui/icons-material";
//custom conponent
import SearchMenu from "./SearchDialog";

import AccountMenu from "./AccountMenu";
import MenuDialog from "./MenuDialog.jsx";
import Link from "next/link";
import { Contained, SearchForm, MenuList } from "./custom-mui";

const Header = (props?:any) => {
  return (
    <>
      <Contained>
        <Link className="main logo" href="/">
          {/* <Imgs.Logo style={{ marginTop: 6, padding: 0 }} /> */}
          logo 1
        </Link>
        <MenuList>
          <MenuDialog />
        </MenuList>
        <SearchForm
          type={"search"}
          focus
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => {}} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment
              position="start"
              style={{ display: "flex", flexDirection: "row", height: "100%" }}
            >
              <SearchMenu />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderLeftWidth: "1px", borderColor: "#000" }}
              />
            </InputAdornment>
          }
          label=""
          placeholder="Search IMDb"
        />
        <MenuList>
          {/* <Imgs.Logo2 /> */} logo 2
        </MenuList>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderLeftWidth: "1px", borderColor: "var(--white)" }}
        />
        <MenuList>
          <FactCheck />
          <span>Giỏ hàng</span>
        </MenuList>
        {/* login hoặc sign in */}
        {false ? (
          <Link href="/login/option">
            <MenuList>
              <span>Sign In</span>
            </MenuList>
          </Link>
        ) : (
          <MenuList>
            <AccountMenu />
          </MenuList>
        )}

        <MenuList>
          <span>EN</span>
          <ArrowDropDown />
        </MenuList>
      </Contained>
    </>
  );
};

Header.propTypes = {};

export default Header;
