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
import { Product } from "~/models/product";

export default function ListComment({
  currentProduct,
}: {
  currentProduct: Product;
}) {
  let review: Review = {
    idCustomer: "",
    idProduct: "",
    content: "Sản phẩm rất đẹp",
    username: "thaiho1912",
  };
  let listReviews: Review[] = currentProduct.reviews ?? [review];
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {listReviews.map((review: Review, index: number) => (
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={review.idCustomer}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={review.idCustomer}
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
          <Divider variant="inset" component="li" sx={{ width: "50%" }} />
        </div>
      ))}
    </List>
  );
}
