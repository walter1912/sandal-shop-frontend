import * as Yup from "yup";
/*
_id?: string;
  name: string;
  code: string;
  detail: string;
  listProduct?: Product[];
  star?: number;
  bought?: number;
  img: string;
  cost: number;
  coupon?: string;
  color?: string;
  style: string;
}
*/

const createProductNameSchema = Yup.object({
  name: Yup.string().required("Bạn phải nhập tên sản phẩm, tránh trùng tên cũ"),
  code: Yup.string().required("Bạn phải nhập mã sản phẩm, tránh trùng mã cũ"),
  detail: Yup.string().required("Bạn phải viết bài giới thiệu sản phẩm"),
  img: Yup.string().required("Bạn phải chọn 1 đại diện cho sản phẩm"),
  style: Yup.string().required("Bạn phải chọn style cho sản phẩm"),
  cost: Yup.number().required("Bạn phải nhập giá sản phẩm"),
});

export default createProductNameSchema;
