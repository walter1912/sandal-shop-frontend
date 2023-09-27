import styled from "@emotion/styled";
import { Button, Card, IconButton } from "@mui/material";

export const CardStyled = styled(Card)(
  ({ width, height }: { width: string; height: string }) => ({
    width: width,
    height: `calc(${height} + 150px)`,
    postion: "relative",
    backgroundColor: "var(--white)",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    fontSize: "1.2rem",
    border: '2px solid transparent',
    "&:hover": {
        borderColor: 'var(--orange)'
    }
  })
);

export const IconButtonStyled = styled(IconButton)(() => ({
  borderRadius: "4px",
  color: "var(--blue)",
  fontSize: "1.1912rem",
  marginLeft: "20px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--red)",
  },
}));
export const ButtonStyled = styled(Button)(() => ({
  color: "var(--blue)",
  backgroundColor: "var(--color-hover)",
  textTransform: "none",
  width: "100%",
  fontSize: "1rem",
  fontWeight: "500",
}));
