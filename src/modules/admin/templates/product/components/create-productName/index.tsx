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
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";

const initialValues: ProductName = {
  name: "",
  code: "",
  detail: "",
  img: "",
  cost: 0,
  style: "",
};
async function convertToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
function CreateProductName() {
  const [editorHtml, setEditorHtml] = useState<any>("");
  const [thumbnail, setThumbnail] = useState<any>("");

  async function handleUploadImg(e: any) {
    const file = e.target.files[0];
    const codeImg = await convertToBase64(file);
    setThumbnail(codeImg);
  }

  return (
    <div className="flex-column-center">
      <h2>Thêm mới sản phẩm</h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={createProductNameSchema}
        onSubmit={function (
          values: FormikValues,
          formikHelpers: FormikHelpers<FormikValues>
        ): void | Promise<any> {
          values.detail = encode(editorHtml);
          values.img = thumbnail;
          console.log("img: ", values.img);

          window.alert(JSON.stringify(values));
        }}
      >
        {({ touched, values, handleChange, handleSubmit }) => (
          <Form
            style={{
              backgroundColor: "var(--white)",
              padding: "40px",
              borderRadius: "6px",
              boxShadow: "var(--shadow)",
            }}
          >
            <FormField>
              <label>Tên sản phẩm</label>
              <TextFieldStyled
                name="name"
                error={touched.name}
                value={values.name}
                onChange={handleChange}
                placeholder="Nhập tên sản phẩm"
                helperText={touched.name && <ErrorMessage name="name" />}
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
                error={touched.cost}
                value={values.cost}
                onChange={handleChange}
                placeholder="Nhập giá sản phẩm"
                helperText={touched.name && <ErrorMessage name="name" />}
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
            </FormField>
            <FormField>
              <label htmlFor="inforImg">
                <img src={thumbnail || ""} alt="fdADS" width={360} height={240}/>
                Thêm ảnh sản phẩm
              </label>
              <input
                type="file"
                name="img"
                id="inforImg"
                onChange={(e) => handleUploadImg(e)}
                accept=".jpg,  .png, .jpeg, .svg"
                style={{ display: "none " }}
              />
            </FormField>

            <ButtonMain sx={{ marginTop: "40px" }} onClick={handleSubmit}>
              Thêm thông tin sản phẩm
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateProductName;
