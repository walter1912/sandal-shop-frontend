import * as Yup from "yup";

export interface loginDto {
  username: string;
  password: string
}
 const loginSchema = Yup.object({
    username: Yup.string().required("Mời nhập tên người dùng"),
    password: Yup.string().required("Mời nhập mật khẩu"),
  });

  export default loginSchema;