"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "~/lib/store/hook";
import ChatUI from "../chat";

function AppLayout({ children }: { children: React.ReactNode }) {
  const auth = useAppSelector(state => state.auth);

  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>{children}</div>
      {auth.access_token && <ChatUI />}
      <Footer />
    </>
  );
}

export default AppLayout;
