"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BillItem from "../../components/BillItem";
import { Bill, bill1, bill2 } from "~/models/bill";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { useEffect } from "react";
import { billsRequest } from "~/services/bills/billsRequest";

export default function AllBillsTemplate() {
  const dispatch = useAppDispatch();
  const bills = useAppSelector((state) => state.bills);
  const [listBill, setListBill] = React.useState<Bill[]>([bill1, bill1]);
  console.log("bills out effect: ", bills);
  useEffect(() => {
    async function get() {
      await billsRequest.getAllBill(dispatch);
      setListBill(bills.listBill);
    }
    get();
    console.log("bills: ", bills);
  }, []);
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Chờ thanh toán" value="1" />
            <Tab label="Đang giao hàng" value="2" />
            <Tab label="Đã nhận hàng" value="3" />
            <Tab label="Trả hàng/hoàn tiền" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {listBill
            .filter((bill: Bill) => bill.statePay == "pending")
            .map((bill: Bill, index: number) => (
              <BillItem bill={bill} key={index} />
            ))}
        </TabPanel>
        <TabPanel value="2">
          {listBill
            .filter((bill: Bill) => bill.statePay == "shipping")
            .map((bill: Bill, index: number) => (
              <BillItem bill={bill} key={index} />
            ))}
        </TabPanel>
        <TabPanel value="3">
          {listBill
            .filter((bill: Bill) => bill.statePay == "received")
            .map((bill: Bill, index: number) => (
              <BillItem bill={bill} key={index} />
            ))}
        </TabPanel>
        <TabPanel value="4">
          {listBill
            .filter((bill: Bill) => bill.statePay == "refund")
            .map((bill: Bill, index: number) => (
              <BillItem bill={bill} key={index} />
            ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
