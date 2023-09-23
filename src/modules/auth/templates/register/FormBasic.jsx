"use client";
import React from "react";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { FormField, TextFieldStyled } from "~/modules/global-styles/custom-mui";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function FormBasicComponent({ values, handleChange, dayOfBirth, setDob }) {
  return (
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
          <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
          <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
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
    </>
  );
}

export default FormBasicComponent;
