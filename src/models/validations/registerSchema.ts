import * as Yup from "yup";
import { Customer } from "../customer";

export let initCustomer = {
  username: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  gender: "",
  password: "",
  rePassword: ""
}

const registerSchema = Yup.object({
  username: Yup.string().required(
    "Mời nhập username của bạn, không được trùng với username của người khác"
  ),
  password: Yup.string().required("Mời nhập mật khẩu"),
  rePassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Mật khẩu không khớp"
  ),
  name: Yup.string().required("Mời nhập tên của bạn"),
  email: Yup.string().email("Email sai cú pháp").required("Nhập email của bạn"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Số điện thoại phải gồm 10 chữ số")
    .required("Số điện thoại là trường bắt buộc"),
  address: Yup.string().required("Mời nhập địa chỉ của bạn"),
  gender: Yup.string().required("Chọn giới tính của bạn"),
});
export default registerSchema;
