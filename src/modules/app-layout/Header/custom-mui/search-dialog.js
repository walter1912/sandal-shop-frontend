import { Menu, MenuItem } from "@mui/material";
import styled from "@emotion/styled";

export const MenuStyled = styled(Menu)((props) => ({}));
export const MenuItemStyled = styled(MenuItem)((props) => ({
  width: "300px",
  fontSize: "1.4rem",
  backgroundColor: "var(--white)",
  color: "var(--black)",
  "&:focus": {
    color: "var(--color-main)",
    // backgroundColor: "var(--color-second)",
  },
  "&:hover": {
    // backgroundColor: "var(--color-second)",
    backgroundColor: "var(--white)",
  },
  "&:hover svg": {
    fill: "var(--color-main)",
  },
  "&:focus svg": {
    fill: "var(--color-main)",
  },
}));
