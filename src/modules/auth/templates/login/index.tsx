"use client";
import React from "react";
import {
  ButtonMain,
  FormField,
  FormStyled,
  PageContained,
  TextFieldStyled,
} from "~/modules/global-styles/custom-mui";
import { ErrorMessage, Formik } from "formik";

import { Divider } from "@mui/material";
import Link from "next/link";
import loginSchema from "~/models/validations/loginSchema";
import CustomPopover from "../../components/popover";

const LoginWithAccount = () => {
  return (
    <PageContained bgcolor="var(--white)">
      <Link href="/">Sandal Shop</Link>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ touched, values, handleChange, handleSubmit }) => (
          <>
            <FormStyled>
              <h2>Login</h2>
              <FormField>
                <label>Tên người dùng</label>
                <TextFieldStyled
                  name="username"
                  error={touched.username}
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Nhập username của bạn"
                  helperText={
                    touched.username && <ErrorMessage name="username" />
                  }
                />
              </FormField>

              <FormField>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <label>Mật khẩu</label>
                  <Link
                    href={`forgetPassword`}
                    style={{ float: "right", color: "var(--text-color)" }}
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <TextFieldStyled
                  name="password"
                  error={touched.password}
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Nhập password của bạn"
                  helperText={
                    touched.password && <ErrorMessage name="password" />
                  }
                />
                <ErrorMessage name="password" />
              </FormField>
              <ButtonMain
                style={{
                  height: "32px",
                }}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Đăng nhập
              </ButtonMain>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <span>Giữ trạng thái đăng nhập</span>
                <CustomPopover
                  txtbutton="Chi tiết"
                  contentpopover={
                    <span>
                      Chọn "Giữ cho tôi đăng nhập" sẽ giảm số lần bạn được yêu
                      cầu Đăng nhập trên thiết bị này. Để giữ cho bạn bảo mật
                      tài khoản, chỉ sử dụng tùy chọn này cho mục đích cá nhân
                      của bạn thiết bị.
                    </span>
                  }
                  styles={{ height: "176px", width: "440px" }}
                />
              </div>
              <Divider>New customer</Divider>
              <Link href="register">
                <ButtonMain style={{ backgroundColor: "#eceef0" }}>
                  Tạo tài khoản mới
                </ButtonMain>
              </Link>
            </FormStyled>
          </>
        )}
      </Formik>
    </PageContained>
  );
};

LoginWithAccount.propTypes = {};

export default LoginWithAccount;
