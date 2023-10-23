import React from "react";
import { FormField, TextFieldStyled } from "~/modules/global-styles/custom-mui";

function FormUniqueComponent({ values, handleChange }) {
  return (
    <>
      <FormField>
        <label>Username</label>
        <TextFieldStyled
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Tạo username của bạn"
        />
      </FormField>
      <FormField>
        <label>Email</label>
        <TextFieldStyled
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Nhập email của bạn"
        />
      </FormField>
      <FormField>
        <label>Password</label>
        <TextFieldStyled
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Nhập mật khẩu của bạn"
        />
      </FormField>
      <FormField>
        <label>Nhập lại password</label>
        <TextFieldStyled
          name="rePassword"
          value={values.rePassword}
          onChange={handleChange}
          placeholder="Nhập lại mật khẩu của bạn"
        />
      </FormField>
    </>
  );
}

export default FormUniqueComponent;
