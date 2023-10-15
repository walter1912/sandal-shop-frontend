import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InforCustomer from "../components/infor-customer";
import FormPassword from "../components/change-password/FormPassword";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function Profile() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.customer);
  const [value, setValue] = React.useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <TabContext value={value}>
        <TabList
          orientation="vertical"
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider", width: "200px" }}
        >
          <Tab label="Thông tin khách hàng" value="1" />
          <Tab label="Thay đổi mật khẩu" value="2" />
          <Tab label="Setting khách hàng" value="3" />
        </TabList>
        <TabPanel value="1" sx={{width:'calc(100% - 200px)'}}>
          <InforCustomer />
        </TabPanel>
        <TabPanel value="2" sx={{width:'calc(100% - 200px)'}}>
          <FormPassword user={customer.infor} editPassword={true} />
        </TabPanel>
        <TabPanel value="3" sx={{width:'calc(100% - 200px)'}}>
          xem setting customer : coupon, loaij khach hang
        </TabPanel>
      </TabContext>
    </Box>
  );
}
