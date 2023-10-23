"use client";
import { AlertTitle } from "@mui/material";
import { ErrorMessage } from "formik";
import React from "react";
import { ErrorLog } from "~/modules/global-styles/custom-mui";
type ErrorLogProps = {
  listValue: string[];
};
function ErrorLogComponent({ listValue }: ErrorLogProps) {
  return (
    <ErrorLog severity="error">
      <AlertTitle color="error">Có một số lỗi</AlertTitle>
      <ul>
        {listValue.map((name, index) => (
          <ErrorMessage
            key={index}
            name={name}
            render={(msg) => <li>{msg}</li>}
          />
        ))}
      </ul>
    </ErrorLog>
  );
}

export default ErrorLogComponent;
