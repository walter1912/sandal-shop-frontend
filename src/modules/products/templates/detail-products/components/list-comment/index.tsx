"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Review } from "~/models/review";

export default function ListComment() {
  let review: Review = {
    idCustomer: "",
    idProduct: "",
    content: "Sản phẩm rất đẹp",
    username: "thaiho1912",
  };
  let listReviews = [review, review, review];
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {listReviews.map((review: Review, index: number) => (
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={review.username} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={review.username}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {review.content}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{width:'50%'}} />
        </div>
      ))}
    </List>
  );
}
