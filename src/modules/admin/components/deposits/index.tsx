"use client";
import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import moment from "moment";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Tổng doanh thu trong tháng</Title>
      <Typography component="p" variant="h4">
        20,000,000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Tính tới thời điểm
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {moment(new Date()).format("DD-MM-YYYY, HH:mm")}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Xem chi tiết
        </Link>
      </div>
    </React.Fragment>
  );
}
