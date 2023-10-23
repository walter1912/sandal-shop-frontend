"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InforCustomer from "../components/infor-customer";
import FormPassword from "../components/change-password/FormPassword";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import styled from "@emotion/styled";
import {
  AccountBox,
  Phone,
  SettingsApplications,
  SyncLock,
} from "@mui/icons-material";
import { Customer } from "~/models/customer";
import { customerRequest } from "~/services/setting-customer/customerRequest";

const TabPanelStyled = styled(TabPanel)(() => ({
  width: "calc(100% - 200px)",
  backgroundColor: "var(--white)",
}));
const TabStyled = styled(Tab)(() => ({
  justifyContent: "left!important",
  "&.MuiTab-labelIcon": {
    display: "flex",
    flexDirection: "row",
    "& svg": {
      margin: "0",
      marginRight: "20px",
    },
  },

  // "&.Mui-selected": {
  //   color: 'var(--orange)'
  // }
}));
export default function Profile() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.customer);
  const [inforCustomer, setInforCustomer] = useState<Customer>(customer.infor);

  useEffect(() => {
    customerRequest.getInfor(dispatch);
    setInforCustomer(customer.infor);
  }, []);

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
          sx={{ borderRight: 1, width: "200px" }}
        >
          <TabStyled
            icon={<AccountBox />}
            label="Thông tin "
            value="1"
            sx={{
              "&.Mui-selected": {
                color: "var(--color-main)",
              },
            }}
          />
          <TabStyled
            icon={<SyncLock />}
            label="đổi mật khẩu"
            sx={{
              "&.Mui-selected": {
                color: "var(--orange)",
              },
            }}
            value="2"
          />
          <TabStyled
            icon={<SettingsApplications />}
            label="Setting"
            value="3"
          />
        </TabList>
        <TabPanelStyled value="1">
          <InforCustomer
          inforCustomer={inforCustomer}
          setInforCustomer={setInforCustomer}
          />
        </TabPanelStyled>
        <TabPanelStyled value="2">
          <FormPassword user={customer.infor} />
        </TabPanelStyled>
        <TabPanelStyled value="3">
          xem setting customer : coupon, loaij khach hang
        </TabPanelStyled>
      </TabContext>
    </Box>
  );
}
