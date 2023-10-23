"use client"
import {
  Button,
  IconButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { MenuItemStyled, MenuStyled } from "./custom-mui/search-dialog";
import { typeSearchs } from "./data/typeSearchs";

const SearchMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [typeSearch, setTypeSearch] = useState("All");
  return (
    <div>
      <Button
        id="search-button"
        aria-controls={open ? "search-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "var(--black)", textTransform: "none", width: "100%" }}
      >
        {typeSearch}
      </Button>

      <MenuStyled
        id="search-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "search-button",
        }}
      >
        {typeSearchs.map((type, index) => {
          const Icon = type.icon;
          return (
            <MenuItemStyled
              key={index}
              autoFocus={type.type === typeSearch}
              onClick={() => {
                setTypeSearch(type.type);
                handleClose(null);
              }}
            >
              <IconButton>{Icon}</IconButton>
              <ListItemText primary={type.type} />
            </MenuItemStyled>
          );
        })}
      </MenuStyled>
    </div>
  );
};

SearchMenu.propTypes = {};

export default SearchMenu;
