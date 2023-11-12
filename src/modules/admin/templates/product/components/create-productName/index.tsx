"use client";
import {
  ErrorMessage,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import React, { useState } from "react";
import { ProductName } from "~/models/productName";
import createProductNameSchema from "~/models/validations/createProductNameSchema";
import {
  ButtonMain,
  FormField,
  TextFieldStyled,
} from "~/modules/global-styles/custom-mui";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./props";
import { decode, encode } from "html-entities";
import {
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch } from "~/lib/store/hook";
import { firebaseRequest } from "~/services/firebase/firebaseRequest";
import { useRouter } from "next/navigation";

const initialValues: ProductName = {
  name: "",
  code: "",
  detail: "",
  img: "",
  cost: 0,
  style: "",
};

function CreateProductName() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [editorHtml, setEditorHtml] = useState<any>("");
  const [thumbnail, setThumbnail] = useState<any>("");

  async function handleUploadImg(e: any, values: any) {
    const file = e.target.files[0];
    // const codeImg = await convertToBase64(file);
    values.img = file;
    setThumbnail(file);
  }

  async function handleCreateProductName(values: any) {
    const img = await firebaseRequest.uploadImage(values.img, values.name);

    let productName: ProductName = {
      name: values.name,
      code: values.code,
      detail: values.detail,
      img: String(img),
      cost: values.cost,
      style: values.style,
    };

    const res: any = await productsRequest.createProductName(
      productName,
      dispatch
    );
    if (res.status == 201) {
      setTimeout(() => {
        router.push("/admin/products/create-product");
      }, 2000);
    }
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
      <h2>Thêm mới sản phẩm</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={createProductNameSchema}
        onSubmit={function (
          values: FormikValues,
          formikHelpers: FormikHelpers<FormikValues>
        ) {
          console.log("img: ", values.img);

          handleCreateProductName(values);
        }}
      >
        {({ touched, values, handleChange, handleSubmit }) => (
          <Form>
            <FormField>
              <label>Tên sản phẩm</label>
              <TextFieldStyled
                name="name"
                error={!!touched.name}
                value={values.name}
                onChange={handleChange}
                placeholder="Nhập tên sản phẩm"
                helperText={touched.name && <ErrorMessage name="name" />}
              />
            </FormField>
            <FormField>
              <label>Mã sản phẩm</label>
              <TextFieldStyled
                name="code"
                error={!!touched.code}
                value={values.code}
                onChange={handleChange}
                placeholder="Nhập mã sản phẩm"
                helperText={touched.code && <ErrorMessage name="code" />}
              />
            </FormField>
            <FormField
              className="create-productName"
              sx={{
                ".quill": {
                  ".ql-toolbar": {
                    borderTopRightRadius: "6px",
                    borderTopLeftRadius: "6px",
                  },
                  ".ql-container": {
                    borderBottomRightRadius: "6px",
                    borderBottomLeftRadius: "6px",
                    minHeight: "200px",
                    backgroundColor: "var(--color-bg)",
                  },
                },
              }}
            >
              <label>Mô tả sản phẩm</label>
              <ReactQuill
                value={editorHtml}
                onChange={(e) => {
                  values.detail = encode(editorHtml);
                  setEditorHtml(e);
                }}
                modules={modules}
                formats={formats}
                placeholder="Hãy tạo bài viết của bạn"
                bounds={".create-productName"}
              />
            </FormField>

            <FormField>
              <label htmlFor="">Giá</label>
              <TextFieldStyled
                name="cost"
                error={!!touched.cost}
                value={values.cost}
                onChange={handleChange}
                placeholder="Nhập giá sản phẩm"
                helperText={touched.cost && <ErrorMessage name="cost" />}
                type="number"
                color="error"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        "&.MuiInputAdornment-positionEnd .MuiTypography-root": {
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
            <FormField>
              <label>Loại dép</label>
              <RadioGroup
                name="style"
                defaultValue={"tong"}
                value={values.style}
                onChange={handleChange}
                sx={{ margin: "20px 0" }}
              >
                <FormControlLabel
                  value="tong"
                  control={<Radio />}
                  label="Tông"
                />
                <FormControlLabel
                  value="2 quai"
                  control={<Radio />}
                  label="Hai quai"
                />
                <FormControlLabel
                  value="3 quai"
                  control={<Radio />}
                  label="Ba quai"
                />
              </RadioGroup>
              {!!touched.style && (
                <ErrorMessage
                  name="style"
                  render={(msg) => (
                    <FormHelperText error={true}>{msg}</FormHelperText>
                  )}
                />
              )}
            </FormField>
            <FormField>
              <label htmlFor="inforImg">
                <img
                  src={thumbnail || ""}
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
                onChange={(e) => handleUploadImg(e, values)}
                accept=".jpg,  .png, .jpeg, .svg"
                style={{ display: "none" }}
              />
              {!!touched.img && (
                <ErrorMessage
                  name="img"
                  render={(msg) => (
                    <FormHelperText error={true}>{msg}</FormHelperText>
                  )}
                />
              )}
            </FormField>

            <ButtonMain
              sx={{ marginTop: "40px" }}
              onClick={(e) => {
                handleSubmit
              }}
            >
              Thêm thông tin sản phẩm
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateProductName;
