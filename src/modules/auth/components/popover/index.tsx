import React from "react";
import {
  IconButton,
  Popover,
  Toolbar,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { ButtonText } from "~/modules/global-styles/custom-mui";
type PopoverProps = {
    txtbutton: string ;
     contentpopover: React.ReactNode;
      styles : object; 
};
const CustomPopover = (props: PopoverProps) => {
  const { txtbutton, contentpopover, styles } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <ButtonText aria-describedby={id} onClick={handleClick} >
        {txtbutton}
      </ButtonText>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          minWidth: "300px",
          maxWidth: "60vw",
          fontSize:'0.9rem',
          ".MuiPopover-paper": {
            ...styles,
            color: "var(--black)",
          },
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "var(--color-bg)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span>"Keep Me Signed In" Checkbox</span>
          <IconButton onClick={handleClose} edge="end">
            <Close />
          </IconButton>
        </Toolbar>
        <div style={{ padding: "6px 16px" }}>{contentpopover}</div>
      </Popover>
    </div>
  );
};

CustomPopover.propTypes = {};

export default CustomPopover;
