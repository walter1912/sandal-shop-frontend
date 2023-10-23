"use client";
import styled from "@emotion/styled";
import { Alert, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "~/lib/store/hook";
import { Customer } from "~/models/customer";
import { authRequest } from "~/services/auth/authRequest";

const EditPassword = styled(Stack)(() => ({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const FormPassword = ({
  user,
}: {
  user: Customer;
}) => {

  const dispatch = useAppDispatch();
  
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errNewPassword, setErrNewPassword] = useState(true);

  async function handleChangePassword(){
      await authRequest.changePassword({oldPassword, newPassword}, dispatch);
  }
  console.log(errNewPassword);
  return (
    <EditPassword spacing={3}>
      <TextField
        fullWidth
        label="Mật khẩu cũ"
        value={oldPassword}
        onChange={(e) => {
          setOldPassword(e.target.value);
        }}
        variant="standard"
      />
    
        <TextField
        fullWidth
        label="Mật khẩu mới"
        value={newPassword}
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
        variant="standard"
      />
      <TextField
        fullWidth
        label="Nhập lại mật khẩu mới"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setErrNewPassword(confirmPassword !== newPassword);
        }}
        variant="standard"
      />
      {(confirmPassword !== "") && (confirmPassword !== newPassword)  ? (
        <Alert severity="error">Nhập mật khẩu mới không khớp</Alert>
      ) : (
        <Button variant="contained"
        onClick={handleChangePassword}
        >Xác nhận mật khẩu</Button>
      )}
    </EditPassword>
  );
};

export default FormPassword;
