import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";

export const MenuStyled = styled(Menu)(() => ({
    color: "currentColor",
  }));
  
  export const MenuItemStyled = styled(MenuItem)(() => ({
    //   width: "240px",
    backgroundColor: "var(--white)",
    color: "var(--black)",
    "&:hover": {
      backgroundColor: "var(--color-bg)",
      textDecoration: "underline",
    },
    "&:focus": {
      color: "var(--color-main)",
    },
  }));