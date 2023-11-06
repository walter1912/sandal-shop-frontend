"use client";

import * as React from "react";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";


import { billsRequest } from "~/services/bills/billsRequest";
import moment from "moment";

export default function ListBills() {
  const [bills, setBill] = useState<any[]>([]);
  //   lấy danh sách sản phẩm
  useEffect(() => {
    async function get() {
      let bill = await billsRequest.adminGetBills();
      setBill(bill);
    }
    get();
  }, []);

  const columns: GridColDef[] = [
    { field: "stt", headerName: "STT", width: 40 },
    { field: "idCustomer", headerName: "Id khách hàng", width: 210 },
    { field: "coupon", headerName: "Mã giảm giá", width: 100, sortable: false },
    {
      field: "address",
      headerName: "Địa chỉ nhận hàng",
      sortable: false,
      width: 400,
    },
    {
      field: "statePay",
      headerName: "Trạng thái",
      width: 80,
    },
    {
      field: "typePay",
      headerName: "Hình thức thanh toán",
      width: 80,
    },
    {
      field: "total",
      headerName: "Giá trị",
      type: "number",
      width: 80,
    },
    {
        field:"created",
        headerName:"Tạo ngày",
        type:"string",
        width:140
    }
  ];

  return (
    <div style={{ height: 'auto', width: "100%" }}>
      <DataGrid
        rows={bills.map((item: any, index: number) => ({
          stt: index + 1,
          id: item._id,
          created: moment(item.createdAt).format("DD-MM-YY hh:mm:ss"),
          ...item,
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        sx={{
          backgroundColor: "var(--white)",
          shadow: "var(--shadow)",
        }}
        // checkboxSelection
      />
    </div>
  );
}
