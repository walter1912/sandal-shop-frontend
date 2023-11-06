"use client";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ConfirmationNumber } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const MainListItems = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => router.push("/admin/products")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Sản phẩm" />
      </ListItemButton>
      <ListItemButton onClick={() => router.push("/admin/bills")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Hóa đơn" />
      </ListItemButton>
      <ListItemButton  onClick={() => router.push("/admin/customers")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Khách hàng" />
      </ListItemButton>
      <ListItemButton onClick={() => router.push("/admin/coupons")}>
        <ListItemIcon>
          <ConfirmationNumber />
        </ListItemIcon>
        <ListItemText primary="Mã giảm giá" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Thống kê
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Tháng vừa rồi" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Quý vừa rồi" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Năm vừa rồi" />
      </ListItemButton>
    </React.Fragment>
  );
};
