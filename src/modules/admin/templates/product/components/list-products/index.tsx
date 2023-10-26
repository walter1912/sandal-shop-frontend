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
import { GridActionsCellItemStyled } from "./custom-mui";
import { Product } from "~/models/product";

export default function ListProducts() {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  //   lấy danh sách sản phẩm
  useEffect(() => {
    productsRequest.findAllProduct(dispatch);
  }, []);

  //  phần CRUD
  function handleEditClick(id: GridRowId) {
    window.alert(id);
  }
  function handleDeleteClick(id: GridRowId) {
    window.alert(id);
  }

  const columns: GridColDef[] = [
    { field: "stt", headerName: "STT", width: 40 },
    { field: "name", headerName: "Tên sản phẩm", width: 160 },
    { field: "color", headerName: "Màu sắc", width: 240, sortable: false },
    {
      field: "style",
      headerName: "Kiểu dáng",
      sortable: false,
      width: 80,
    },
    {
      field: "coupon",
      headerName: "Mã giảm giá",
      sortable: false,

      width: 200,
    },
    {
      field: "cost",
      headerName: "Giá",
      type: "number",
      width: 80,
    },
    {
      field: "bought",
      headerName: "Đã bán",
      type: "number",
      width: 80,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Chỉnh sửa",
      width: 80,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItemStyled
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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products.all.map((item: any, index: number) => ({
          stt: index + 1,
          id: item._id,
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
