import styled from "@emotion/styled";
import { Dialog, IconButton, Toolbar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";


export const DialogStyled = styled(Dialog)((props?: any) => ({
  ".MuiDialog-paper": {
    padding: "40px 120px",
    background: "var(--black)",
  },
}));
export const ToolbarStyled = styled(Toolbar)((props?: any) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));
export const IconButtonClose = styled(IconButton)((props?: any) => ({
  backgroundColor: "var(--color-main)",
  "&:hover": {
    backgroundColor: "var(--color-main)",
    opacity: 0.8,
  },
}));
export const GridMenu = styled(Grid2)((props?: any) => ({
  color: "var(--white)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& a": {
    paddingLeft: "36px",
  },
}));
export const IconGridMenu = styled(IconButton)((props?: any) => ({
  "& svg": {
    fill: "var(--color-main)",
  },
}));
export const LinkStyled = styled(Link)((props?: any) => ({
  marginBottom: "20px",
  backgroundColor: "var(--black)",
  color: "var(--color-bg)",
  "&:hover": {
    textDecoration: "underline",

    marginBottom: "20px",
  },
  "&:focus": {
    color: "var(--color-main)",
  },
}));
