"use client";

import * as React from "react";
import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { customerRequest } from "~/services/customers/customerRequest";
import moment from "moment";



export default function ListCustomers() {
  const [customers, setCustomer] = useState<any[]>([]);
  //   lấy danh sách sản phẩm
  useEffect(() => {
    async function get() {
        let customer = await customerRequest.getAll();
        setCustomer(customer);
    }
    get();
  }, []);

  const columns: GridColDef[] = [
    { field: "stt", headerName: "STT", width: 40 },
    { field: "username", headerName: "Username", width: 120 },
    { field: "name", headerName: "Tên", width: 200, sortable: false },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 120,
    },
    {
      field: "phone",
      headerName: "SĐT",
      width: 100,
    },
    {
      field: "ngaysinh",
      headerName: "Ngày sinh",
      width: 120,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      type: "number",
      width: 280,
    }
  ];

  return (
    <div style={{ height: '300px', width: "100%" }}>
      <DataGrid
        rows={customers.map((item: any, index: number) => ({
          stt: index + 1,
          id: item._id,
          ngaysinh: moment(item.dob).format("DD-MM-YYYY"),
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
      />
    </div>
  );
}
