"use client";
import { Grid, InputAdornment } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  ErrorMessage,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { Product } from "~/models/product";
import {
  ButtonMain,
  FormField,
  FormStyled,
  TextFieldStyled,
} from "~/modules/global-styles/custom-mui";
import { firebaseRequest } from "~/services/firebase/firebaseRequest";
import { productsRequest } from "~/services/products/productsRequest";

function CreateProduct() {
  const { currentProductName } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [thumbnail, setThumbnail] = useState<any>("");
  const router = useRouter();

  async function handleUploadImg(e: any) {
    const file = e.target.files[0];
    // const codeImg = await convertToBase64(file);

    setThumbnail(file);
    console.log("THUMBNAIL: ", file.src);
  }

  async function handleCreateProduct(values: any) {
    const img = await firebaseRequest.uploadImage(thumbnail, values.name);

    let product: Product = {
      name: values.name,
      element: values.element,
      style: values.style,
      stock: Number(values.stock),
      cost: values.cost,
      coupon: values.coupon,
      img: String(img),
    };

    const res: any = await productsRequest.createProduct(product, dispatch);
    if (res.status == 201) {
      setTimeout(() => {
        router.push("/admin/products/create-product");
      }, 2000);
    }
  }
  const initialValues: Product = {
    name: currentProductName.name,
    element: {
      sole: {
        color: "",
        material: "",
      },
      sandal: {
        color: "",
        material: "",
      },
      // des: undefined
    },
    style: currentProductName.style,
    stock: 0,
    cost: currentProductName.cost,
    coupon: "",
    star: 0,
    img: "",
  };
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
      <h2>Thêm chi tiết sản phẩm</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={function (
          values: FormikValues,
          formikHelpers: FormikHelpers<FormikValues>
        ) {
          window.alert(JSON.stringify(values));
          handleCreateProduct(values);
        }}
      >
        {({ values, touched, errors, handleChange, handleSubmit }) => (
          <Form>
            <Grid2
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                "& .title": {
                  fontWeight: 600,
                  fontSize: "16px",
                },
                "& .MuiTextField-root": {
                  marginRight: "40px",
                },
              }}
              spacing={2}
            >
              <Grid2>
                <h2>{values.name}</h2>
                <div>Loại {values.style}</div>
              </Grid2>
              {/* <Grid2 md={12} spacing={3} container> */}
              <Grid2>
                <div className="title">Đế dép</div>
                <div style={{ display: "flex", flex: 2 }}>
                  <TextFieldStyled
                    name="element.sole.color"
                    value={values.element.sole.color}
                    onChange={handleChange}
                    placeholder="Màu sắc"
                    sx={{ display: "flex", flex: 0.9 }}
                  />

                  <TextFieldStyled
                    name="element.sole.material"
                    value={values.element.sole.material}
                    onChange={handleChange}
                    placeholder="Chất liệu"
                    sx={{ display: "flex", flex: 0.9 }}
                  />
                </div>
              </Grid2>
              <Grid2>
                <div className="title">Quai dép</div>
                <div style={{ display: "flex", flex: 2 }}>
                  <TextFieldStyled
                    name="element.sandal.color"
                    value={values.element.sandal.color}
                    onChange={handleChange}
                    placeholder="Màu sắc"
                    sx={{ display: "flex", flex: 0.9 }}
                  />

                  <TextFieldStyled
                    name="element.sandal.material"
                    value={values.element.sandal.material}
                    onChange={handleChange}
                    placeholder="Chất liệu"
                    sx={{ display: "flex", flex: 0.9 }}
                  />
                </div>
              </Grid2>
              <Grid2 style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100px",
                  }}
                >
                  <div className="title">Số lượng</div>
                  <TextFieldStyled
                    type="number"
                    name="stock"
                    value={values.stock}
                    onChange={handleChange}
                    sx={{
                      "&.MuiTextField-root": {
                        width: "100px!important",
                      },
                      " .MuiInputBase-root": {
                        minWidth: "100px!important",
                      },
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "calc(100% - 180px)",
                    marginLeft: "40px",
                  }}
                >
                  <div className="title">Mã giảm giá(nếu có)</div>
                  <TextFieldStyled
                    name="coupon"
                    value={values.coupon}
                    onChange={handleChange}
                    placeholder="Các mã ngăn cách nhau bằng ','"
                    inputProps={{ style: { textTransform: "uppercase" } }}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "var(--color-main)",
                        fontWeight: 600,
                      },
                    }}
                  />
                </div>
              </Grid2>
              <Grid2 md={6}>
                <TextFieldStyled
                  name="cost"
                  value={values.cost}
                  onChange={handleChange}
                  type="number"
                  color="error"
                  InputProps={{
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
              </Grid2>
              <Grid2>
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
            </Grid2>

            <ButtonMain
              onClick={(e) => {
                handleSubmit
              }}
              sx={{
                "&.MuiButton-root": {
                  width: "calc(100% - 40px)",
                },
              }}
            >
              Thêm
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateProduct;
