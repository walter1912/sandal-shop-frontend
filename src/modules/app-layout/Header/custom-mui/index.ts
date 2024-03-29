import styled from "@emotion/styled";
import { Container, OutlinedInput } from "@mui/material";
import Link from "next/link";

export const Contained = styled(Container)((props?: any) => ({
  height: "100px",
  width: "100vw",
  padding: "28px 10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "var(--white)",
  color: "var(--black)",
}));
export const MenuList = styled(Link)((props?: any) => ({
  fontSize:'20px',
  fontWeight:500,
  letterSpacing:'1px',
  padding: "0px 20px",
  marginLeft: "10px",
  marginRight: "10px",
  height: "100%",
  lineHeight: "100%",
  display: "flex",
  color: "var(--black)",
  alignItems: "center",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "var(--color-hover)",
  },
  span: {
    marginLeft: "4px",
    whiteSpace: "nowrap",
  },
}));
export const SearchForm = styled(OutlinedInput)((props?: any) => ({
  width: "710px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "var(--white)",
  borderRadius: "4px",

  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--color-main)!important",
  },
}));
