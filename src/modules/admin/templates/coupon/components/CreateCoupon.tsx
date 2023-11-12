"use client";

import { InputAdornment } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import React, { useState } from "react";
import { useAppDispatch } from "~/lib/store/hook";
import { CouponDto } from "~/models/coupon";
import {
  ButtonMain,
  FormField,
  TextFieldStyled,
} from "~/modules/global-styles/custom-mui";
import { couponsRequest } from "~/services/coupons/couponsRequest";
import { firebaseRequest } from "~/services/firebase/firebaseRequest";

const initialValues: CouponDto = {
  code: "",
  name: "",
  percent: 0,
  maxDiscount: 0,
  start: new Date(),
  end: new Date(),
  maxUse: 0,
  countUsed: 0,
  img: "",
};

function CreateCoupon() {
  const [batdau, setBatdau] = useState<any>(dayjs(new Date()));
  const [ketthuc, setKetthuc] = useState<any>(dayjs(new Date()));
  const [thumbnail, setThumbnail] = useState<any>("");
  const dispatch = useAppDispatch();

  async function handleUploadImg(e: any) {
    const file = e.target.files[0];
    // const codeImg = await convertToBase64(file);

    setThumbnail(file);
    console.log("THUMBNAIL: ", file.src);
  }
  async function handleCreateCoupon(values: FormikValues) {
    const img = await firebaseRequest.uploadImage(thumbnail, values.name);
    let coupon = {
      ...values,
      img: String(img),
    };
    couponsRequest.createCoupon(coupon, dispatch);
  }
  return (
    <div
      className="flex-column-center"
      style={{
        backgroundColor: "var(--white)",
        padding: "40px",
        borderRadius: "6px",
        boxShadow: "var(--shadow)",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={function (
          values: FormikValues,
          formikHelpers: FormikHelpers<FormikValues>
        ) {
          values.start = batdau.toISOString();
          values.end = ketthuc.toISOString();
          handleCreateCoupon(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <Grid2
              container
              spacing={2}
              sx={{
                "& .MuiTextField-root": {
                  width: "100%!important",
                },
                "& .MuiInputBase-root": {
                  minWidth: "100px!important",
                },
              }}
            >
              <Grid2 md={4}>
                <FormField>
                  <label>Mã</label>
                  <TextFieldStyled
                    name="code"
                    value={values.code}
                    onChange={handleChange}
                    placeholder="Nhập mã"
                  />
                </FormField>
              </Grid2>
              <Grid2 md={8}>
                <FormField>
                  <label>Tên</label>
                  <TextFieldStyled
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Nhập tên"
                  />
                </FormField>
              </Grid2>
              <Grid2 md={4}>
                <FormField>
                  <label>Phần trăm giảm giá</label>
                  <TextFieldStyled
                    name="percent"
                    value={values.percent}
                    onChange={handleChange}
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">%</InputAdornment>
                      ),
                    }}
                  />
                </FormField>
              </Grid2>
              <Grid2 md={4}>
                <FormField>
                  <label>Giảm giá tối đa</label>
                  <TextFieldStyled
                    name="maxDiscount"
                    value={values.maxDiscount}
                    onChange={handleChange}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          sx={{
                            "&.MuiInputAdornment-positionEnd .MuiTypography-root":
                              {
                                fontSize: "32px",
                                color: "var(--orange)",
                              },
                          }}
                          position="end"
                        >
                          ₫
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormField>
              </Grid2>
              <Grid2 md={4}>
                <FormField>
                  <label>Số lượt dùng</label>
                  <TextFieldStyled
                    name="maxUse"
                    value={values.maxUse}
                    onChange={handleChange}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">max</InputAdornment>
                      ),
                    }}
                  />
                </FormField>
              </Grid2>
              <Grid2 md={6}>
                <FormField>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DateTimePicker
                        views={[
                          "year",
                          "month",
                          "day",
                          "hours",
                          "minutes",
                          "seconds",
                        ]}
                        label="Ngày bắt đầu"
                        value={batdau}
                        onChange={(value: any) => setBatdau(value)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormField>
              </Grid2>
              <Grid2 md={6}>
                <FormField>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DateTimePicker
                        views={[
                          "year",
                          "month",
                          "day",
                          "hours",
                          "minutes",
                          "seconds",
                        ]}
                        label="Ngày kết thúc"
                        value={ketthuc}
                        onChange={(value: any) => setKetthuc(value)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormField>
              </Grid2>
              <Grid2 md={12}>
                <FormField>
                  <label htmlFor="inforImg">
                    <img
                      src={thumbnail.src}
                      alt="fdADS"
                      width={360}
                      height={240}
                    />
                    Thêm ảnh sản phẩm
                  </label>
                  <input
                    type="file"
                    name="img"
                    id="inforImg"
                    onChange={(e) => handleUploadImg(e)}
                    accept=".jpg,  .png, .jpeg, .svg"
                    style={{ display: "none" }}
                  />
                </FormField>
              </Grid2>
              <Grid2 md={4}>
                <ButtonMain onClick={(e) => {handleSubmit}}>Thêm mã giảm giá</ButtonMain>
              </Grid2>
            </Grid2>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateCoupon;
