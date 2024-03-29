"use client";
import React, { useCallback, useEffect, useState } from "react";

//material UI
import { Divider, IconButton, InputAdornment } from "@mui/material";
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
import { Imgs } from "~/assets";
import Image from "next/image";
import logo from "~/assets/images/logo.png";
import { useAppSelector } from "~/lib/store/hook";
import { getLocalStorage } from "~/lib/utils/localStorage";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
const Header = (props?: any) => {
  const auth = useAppSelector((state) => state.auth);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams()!
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  function handleSearchProduct(e:any) {
    router.push("/products" + '?' + createQueryString('keyword', searchKeyword))
  }
  return (
    <>
      <Contained>
        <Link className="main-logo" href="/">
          <Image
            alt="Logo"
            src={logo}
            style={{
              width: "80px",
              height: "auto",
              marginRight: "100px",
            }}
          />
        </Link>

        <SearchForm
          type={"search"}
          focus="true"
          value={searchKeyword}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchKeyword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={(e) => {
                  handleSearchProduct(e);
                }}
                edge="end"
              >
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
          placeholder="Tìm kiếm sản phẩm"
        />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderLeftWidth: "1px", borderColor: "var(--white)" }}
        />

        <MenuList href={"/cart"}>
          <FactCheck />
          <span>Giỏ hàng</span>
        </MenuList>

        {/* login hoặc sign in */}
        {getLocalStorage("auth") == undefined ? (
          <MenuList href={"/auth/login"}>
            <span>Đăng nhập</span>
          </MenuList>
        ) : (
          <>
            <MenuList href={"/profile"}>{auth.username}</MenuList>
            <MenuList href={"/auth/logout"}>Đăng xuất</MenuList>
          </>
        )}
      </Contained>
      <Divider />
    </>
  );
};

Header.propTypes = {};

export default Header;
