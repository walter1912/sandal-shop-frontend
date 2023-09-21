"use client"
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem } from "@mui/material";

import Link from "next/link";
import { MenuItemStyled, MenuStyled } from './custom-mui/acount-menu';
import { typeActions } from "./data/typeActions";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let account = {
    username: "Walter1912",
  };

  return (
    <div>
      <Button
        id="account-button"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "currentColor", textTransform: "none", width: "100%" }}
      >
        {account.username}
      </Button>
      <MenuStyled
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "account-button",
        }}
      >
        {typeActions.map((action, index) => (
          <Link href={account.username + action.route} key={index}>
            <MenuItemStyled key={index} onClick={() => setAnchorEl(null)}>
              {action.name}
            </MenuItemStyled>
          </Link>
        ))}
      </MenuStyled>
    </div>
  );
};

AccountMenu.propTypes = {};

export default AccountMenu;
