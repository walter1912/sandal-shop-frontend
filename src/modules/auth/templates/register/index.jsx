"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Formik } from "formik";
//   FormField,
import {
  ButtonMain,
  ButtonText,
  FormStyled,
  PageContained,
} from "~/modules/global-styles/custom-mui";
import registerSchema, {
  initCustomer,
} from "~/models/validations/registerSchema";

import dayjs from "dayjs";
import ErrorLogComponent from "./ErrorLogComponent";
import FormBasicComponent from "./FormBasic";
import FormUniqueComponent from "./FormUnique";

const SignUp = (props) => {
  const [errorLog, setErrorLog] = useState(0);
  const [basicForm, setBasicForm] = useState(true);
  const [dayOfBirth, setDob] = useState(dayjs(new Date()));
  function postData(values) {
    values.dob = dayOfBirth.toISOString().slice(0, 10);
    console.log("values: ", values);
  }
  return (
    <PageContained bgcolor="var(--white)" container="true">
      <Link href="/">logo1</Link>
      <Formik
        initialValues={initCustomer}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          setErrorLog(0);
          postData(values);
          setTimeout(() => {
            alert(JSON.stringify(values));
          }, 2000);
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <>
            <FormStyled>
              <h2>Tạo tài khoản khách hàng</h2>
              {basicForm ? (
                <>
                  {errorLog === 1 && (
                    <ErrorLogComponent
                      listValue={["name", "gender", "address", "phone"]}
                    />
                  )}
                  <FormBasicComponent
                    values={values}
                    handleChange={handleChange}
                    dayOfBirth={dayOfBirth}
                    setDob={setDob}
                  />
                  <ButtonText
                    txtcolor="var(--black)"
                    onClick={() => {
                      setErrorLog(1);
                      setBasicForm(false);
                    }}
                    style={{ backgroundColor: "var(--blue)", float: "right" }}
                  >
                    Tiếp theo
                  </ButtonText>
                </>
              ) : (
                <>
                  {errorLog === 2 && (
                    <ErrorLogComponent
                      listValue={[
                        "username",
                        "password",
                        "rePassword",
                        "email",
                      ]}
                    />
                  )}
                  <FormUniqueComponent
                    values={values}
                    handleChange={handleChange}
                  />
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
                      setErrorLog(2);
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
