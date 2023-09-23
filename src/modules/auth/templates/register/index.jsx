"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Imgs } from "../../assets/assets";
import Link from "next/link";

import { ErrorMessage, Formik, validateYupSchema } from "formik";
import { AlertTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material";
//   FormField,
import {
  ButtonMain,
  ButtonText,
  ErrorLog,
  FormField,
  FormStyled,
  PageContained,
  TextFieldStyled,
} from "~/modules/global-styles/custom-mui";
import registerSchema, {
  initCustomer,
} from "~/models/validations/registerSchema";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
// import { setTimeout } from "timers/promises";
/*
id?: string;
username: string;
password?:string;
rePassword?: string;
name: string;
email: string;
phone: string;
address: string;
dob: string;
gender: string;
role?: string;
*/

const SignUp = (props) => {
  const [errorLog, setErrorLog] = useState(false);
  const [basicForm, setBasicForm] = useState(true);
  const [dayOfBirth, setDob] = useState(dayjs(new Date()));
  function postData(values) {
    values.dob = dayOfBirth.toISOString().slice(0, 10);
    console.log("values: ", values);
  }
  return (
    <PageContained bgcolor="var(--white)" container="true">
      <Link href="/">
        {/* <Imgs.Logo style={{ width: "108px", height: "54px" }} /> */}
        logo1
      </Link>
      <Formik
        initialValues={initCustomer}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          setErrorLog(false);
          postData(values);
          setTimeout(() => {
            alert(JSON.stringify(values));
          }, 2000);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <FormStyled>
              <h2>Tạo tài khoản khách hàng</h2>
              {basicForm ? (
                <>
                  <FormField>
                    <label>Họ và tên</label>
                    <TextFieldStyled
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên của bạn"
                    />
                  </FormField>
                  <FormField>
                    <label>Giới tính: </label>
                    <RadioGroup
                      name="gender"
                      defaultValue={"Nam"}
                      value={values.gender}
                      onChange={handleChange}
                      sx={{ margin: "20px 0" }}
                    >
                      <FormControlLabel
                        value="Nữ"
                        control={<Radio />}
                        label="Nữ"
                      />
                      <FormControlLabel
                        value="Nam"
                        control={<Radio />}
                        label="Nam"
                      />
                    </RadioGroup>
                  </FormField>
                  <FormField>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateField"]}>
                        <DateField
                          label="Ngày sinh"
                          name="dob"
                          value={dayOfBirth}
                          id="dob"
                          onChange={(value) => setDob(value)}
                          sx={{ margin: "20px 0" }}
                          fullWidth
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </FormField>
                  <FormField>
                    <label>Địa chỉ</label>
                    <TextFieldStyled
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ của bạn"
                    />
                  </FormField>
                  <FormField>
                    <label>Số điện thoại</label>
                    <TextFieldStyled
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </FormField>
                  <ButtonText
                    txtcolor="var(--black)"
                    onClick={() => setBasicForm(false)}
                    style={{ backgroundColor: "var(--blue)", float: "right" }}
                  >
                    Tiếp theo
                  </ButtonText>
                </>
              ) : (
                <>
                  {errorLog && (
                    <ErrorLog severity="error">
                      <AlertTitle color="error">Có một số lỗi</AlertTitle>
                      <ul>
                        <ErrorMessage
                          name="username"
                          render={(msg) => <li>{msg}</li>}
                        />
                        <ErrorMessage
                          name="password"
                          render={(msg) => <li>{msg}</li>}
                        />
                        <ErrorMessage
                          name="rePassword"
                          render={(msg) => <li>{msg}</li>}
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => <li>{msg}</li>}
                        />
                      </ul>
                    </ErrorLog>
                  )}
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
                  <ButtonText
                    onClick={() => setBasicForm(true)}
                    style={{ float: "left" }}
                  >
                    Quay lại
                  </ButtonText>
                  <ButtonMain
                    style={{
                      height: "32px",
                    }}
                    onClick={() => {
                      setErrorLog(true);
                      handleSubmit();
                    }}
                    type="submit"
                  >
                    <span> Tạo tài khoản khách hàng</span>
                  </ButtonMain>
                </>
              )}

              <div style={{ color: "var(--color-second)" }}>
                <span>Bạn đã có sẵn tài khoản? </span>
                <Link href="login">
                  <ButtonText color="primary">Đăng nhập</ButtonText>
                </Link>
              </div>
            </FormStyled>
          </>
        )}
      </Formik>
    </PageContained>
  );
};

SignUp.propTypes = {};

export default SignUp;
