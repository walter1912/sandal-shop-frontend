"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Alert, Button, IconButton, List, Menu, MenuItem, Tooltip } from "@mui/material";
import {
  AlternateEmail,
  Badge,
  Cake,
  MoreVert,
  Place,
  Source,
  Transgender,
} from "@mui/icons-material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemInfo from "./ItemInfor";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";
import { Customer } from "~/models/customer";
import { customerRequest } from "~/services/setting-customer/customerRequest";
import { SettingCustomer } from "~/models/setting-customer";
import moment from "moment";
import { ButtonText } from "~/modules/global-styles/custom-mui";
const Information = styled(Grid2)(() => ({
  position: "relative",
}));

const MoreActions = styled("div")(() => ({
  position: "absolute",
  right: 10,
  top: 10,
}));

function InforCustomer({
  inforCustomer,
  setInforCustomer,
}: {
  inforCustomer: Customer;
  setInforCustomer: Function;
}) {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);

  async function handleUpdateInfor() {
    console.log("customer pre to update: ", inforCustomer);
    await customerRequest.updateInfor(inforCustomer, dispatch);
  }
  return (
    <Grid2
      container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Information xs={10}>
        <h2>Thông tin cá nhân</h2>
        <List>
          <ItemInfo
            icon={<Badge />}
            destext={"Tên khách hàng: "}
            text={inforCustomer?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInforCustomer((pre: Customer) => {
                let name = e.target.value;
                return { ...pre, name };
              });
            }}
            isedit={isEdit}
          />
          <ItemInfo
            icon={<Source />}
            destext={"Username: "}
            text={inforCustomer?.username}
            isedit={false}
          />
          <Tooltip title="DD-MM-YYYY" >
            <ItemInfo
              icon={<Cake />}
              destext={"Ngày sinh: "}
              text={moment(inforCustomer?.dob).format("DD-MM-YYYY")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInforCustomer((pre: Customer) => {
                  let dob = e.target.value;
                  return { ...pre, dob };
                });
              }}
              isedit={isEdit}
            />
          </Tooltip>
          <ItemInfo
            icon={<Transgender />}
            destext={"Giới tính: "}
            text={inforCustomer?.gender}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInforCustomer((pre: Customer) => {
                let gender = e.target.value;
                return { ...pre, gender };
              });
            }}
            isedit={isEdit}
          />
          <ItemInfo
            icon={<AlternateEmail />}
            destext={"Email: "}
            text={inforCustomer.email ?? "user@gmail.com"}
            isedit={false}
          />
          <ItemInfo
            icon={<Place />}
            destext={"Địa chỉ: "}
            text={
              inforCustomer.address ??
              "Học viện Công nghệ Bưu chính Viễn thông Hà Nội"
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInforCustomer((pre: Customer) => {
                let address = e.target.value;
                return { ...pre, address };
              });
            }}
            isedit={isEdit}
          />
        </List>
        <MoreActions>
          <PopupState variant="popover">
            {(popupState) => (
              <React.Fragment>
                <IconButton {...bindTrigger(popupState)}>
                  <MoreVert />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Chỉnh sửa thông tin chung
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          {isEdit && (
            <ButtonText onClick={handleUpdateInfor}>Lưu thông tin</ButtonText>
          )}
        </MoreActions>
      </Information>
    </Grid2>
  );
}

export default InforCustomer;
