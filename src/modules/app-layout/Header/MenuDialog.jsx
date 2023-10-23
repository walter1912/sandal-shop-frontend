"use client"
import * as React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
// import { Imgs } from "../../../assets/assets";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  ContactPage,
  EventAvailable,
  Group,
  MovieSharp,
  Tv,
  WatchOffSharp,
} from "@mui/icons-material";
import { listMenuDialog } from "./data/listMenuDialog";
import { DialogStyled, GridMenu, IconButtonClose, IconGridMenu, LinkStyled, ToolbarStyled } from "./custom-mui/menu-dialog";

const Transition= React.forwardRef(function Transition(props, ref){
  return <Slide direction="down" ref={ref} {...props} />;
});
//
const MenuDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClickOpen}
        style={{ textTransform: "none", color: "var(--black)" }}
      >
        <MenuIcon />
        <span>Menu</span>
      </Button>
      <DialogStyled
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ToolbarStyled>
          <Button autoFocus color="inherit" onClick={handleClose}>
            {/* <Imgs.Logo /> */}
            logo 1
          </Button>

          <IconButtonClose onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButtonClose>
        </ToolbarStyled>
        <Grid2 container direction="row">
          <Grid2 xs={4} direction="column">
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <MovieSharp />
                </IconGridMenu>
                Movies
              </h2>
              {listMenuDialog[0].listaction.map((action, index) => (
                <LinkStyled  key={index}  href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <Group />
                </IconGridMenu>
                Celebs
              </h2>
              {listMenuDialog[1].listaction.map((action, index) => (
                <LinkStyled key={index} href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
          </Grid2>
          <Grid2 xs={4} direction="column">
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <Tv />
                </IconGridMenu>
                TV Show
              </h2>
              {listMenuDialog[2].listaction.map((action, index) => (
                <LinkStyled key={index} href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <WatchOffSharp />
                </IconGridMenu>
                Watch
              </h2>
              {listMenuDialog[3].listaction.map((action, index) => (
                <LinkStyled key={index}  href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
          </Grid2>
          <Grid2 xs={4} direction="column">
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <EventAvailable />
                </IconGridMenu>
                Awards and Events
              </h2>
              {listMenuDialog[4].listaction.map((action,index) => (
                <LinkStyled  key={index} href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
            <GridMenu xs={6}>
              <h2>
                <IconGridMenu>
                  <ContactPage />
                </IconGridMenu>
                Community
              </h2>
              {listMenuDialog[5].listaction.map((action, index) => (
                <LinkStyled key={index}  href={action.route}>{action.name}</LinkStyled>
              ))}
            </GridMenu>
          </Grid2>
        </Grid2>
      </DialogStyled>
    </div>
  );
};
MenuDialog.propTypes = {};
export default MenuDialog;
