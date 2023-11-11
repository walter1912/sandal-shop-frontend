"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "~/lib/store/hook";
import { Bill } from "~/models/bill";
import BillItem from "~/modules/bills/components/BillItem";
import { billsRequest } from "~/services/bills/billsRequest";

function page({ params }: { params: { id: string } }) {
  const bills = useAppSelector((state) => state.bills);
  let bill = bills.listBill.find((bill: Bill) => bill._id == params.id);
  return (
    <div>
      <BillItem bill={bill} />
    </div>
  );
}

export default page;
