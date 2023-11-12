"use client";
import * as React from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect } from "react";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import { Product } from "~/models/product";
import { GridActionsCellItemStyled } from "~/modules/admin/custom-mui";
import { couponsRequest } from "~/services/coupons/couponsRequest";
import moment from "moment";

export default function ListCoupon() {
  const coupons = useAppSelector((state) => state.coupons);
  const dispatch = useAppDispatch();
  //   lấy danh sách sản phẩm
  useEffect(() => {
    couponsRequest.getAllCoupon(dispatch);
  }, []);

  //  phần CRUD
  function handleEditClick(id: GridRowId) {
    window.alert(id);
  }
  function handleDeleteClick(id: GridRowId) {
    window.alert(id);
  }
  /*
export interface CouponDto {
    _id?: string;
    code: string;
    name: string;
    percent: number;
    maxDiscount:number;
    start: Date;
    end: Date;
    countUsed: number;
    img?:string;
}
*/
  const columns: GridColDef[] = [
    { field: "stt", headerName: "STT", width: 40 },
    { field: "code", headerName: "Code", width: 80 },
    { field: "name", headerName: "Tên mã", width: 240, sortable: false },
    {
      field: "percent",
      headerName: "Tỉ lệ(%)",
      type: "number",
      width: 60,
    },
    {
      field: "maxDiscount",
      headerName: "Tối đa(đ)",
      width: 80,
    },
    {
      field: "batdau",
      headerName: "Ngày bắt đầu",
      type: "number",
      width: 180,
    },
    {
      field: "ketthuc",
      headerName: "Ngày kết thúc",
      type: "number",
      width: 180,
    },
    {
      field: "countUsed",
      headerName: "Số lượt dùng",
      type: "number",
      width: 80,
    },
    {
      field: "maxUse",
      headerName: "Số lượt tối đa",
      type: "number",
      width: 80,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Chỉnh sửa",
      width: 40,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItemStyled
          showInMenu={true}
            key={id}
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
            // showInMenu={false}
          />,
        ];
      },
    },
  ];

  return (
    <div style={{ minHeight: 400, width: "100%" }}>
      <DataGrid
        rows={coupons.all.map((item: any, index: number) => ({
          stt: index + 1,
          id: item._id,
          batdau: moment(item.start).format("DD-MM-YY, HH:mm:ss"),
          ketthuc: moment(item.end).format("DD-MM-YY, HH:mm:ss"),
          ...item,
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          backgroundColor: "var(--white)",
          shadow: "var(--shadow)",
        }}
        // checkboxSelection
      />
    </div>
  );
}
