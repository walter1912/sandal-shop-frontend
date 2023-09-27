"use client";

import styled from "@emotion/styled";
import { Alert, Button, Container, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Form } from "formik";

export const PageContained = styled(Container)(
  (props: { bgcolor?: string }) => ({
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "40px",
    backgroundColor: props.bgcolor ?? "var(--black)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })
);
//form có thể dùng cho login và sign up
export const FormStyled = styled(Form)((props) => ({
  minWidth: "360px",
  "& h2": {
    fontWeight: "400",
  },
  padding: "10px 12px 16px 12px",
  fontWeight: "400",
  border: "1px solid var(--black)",
  borderRadius: "4px",
  "&:focus": {
    borderColor: "var(--color-main)",
  },
}));
export const FormField = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "& label": {
    fontWeight: "500",
    marginBottom: "4px",
  },
}));

export const TextFieldStyled = styled(TextField)((props) => ({
  width: "100%",
  marginBottom: "16px",
  ".MuiInputBase-root": {
    height: "32px",
    minWidth: "316px",
  },
  ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e77600",
    borderWidth: "1px",
    boxShadow: "0 0 3px 2px rgba(228,121,17,.5)",
  },
}));

export const ErrorLog = styled(Alert)(() => ({
  minWidth: "360px",
  marginTop: "20px",
  marginBottom: "20px",
  // boxShadow: "0 0 3px 1px var(--color-main)",
  "& ul": {
    color: "var(--black)",
  },
}));

//button

export const ButtonMain = styled(Button)(() => ({
  width: "100%",
  backgroundColor: "var(--color-main)",
  border: "1px solid var(--black-second)",
  textTransform: "none",
  color: "var(--black)",
  opacity: 0.8,
  "&:hover": {
    backgroundColor: "var(--color-main)",
    opacity: 1,
  },
}));

export const ButtonText = styled(Button)((props: { txtcolor?: string }) => ({
  textTransform: "none",
  // fontSize: "1rem",
  fontWeight: 550,
  color: props.txtcolor,
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
    textDecorationColor: "currentColor",
  },
}));
