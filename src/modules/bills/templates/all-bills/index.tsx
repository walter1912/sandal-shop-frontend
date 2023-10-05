'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BillItem from '../../components/BillItem';
import { bill1,  bill2 } from '~/models/bill';

export default function AllBillsTemplate() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Chờ thanh toán" value="1" />
            <Tab label="Đang giao hàng" value="2" />
            <Tab label="Đã nhận hàng" value="3" />
            <Tab label="Trả hàng/hoàn tiền" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BillItem bill={bill1} />
        </TabPanel>
        <TabPanel value="2">
        <BillItem bill={bill2} />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>

      </TabContext>
    </Box>
  );
}