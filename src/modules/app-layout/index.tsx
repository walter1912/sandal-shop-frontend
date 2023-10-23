"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>{children}</div>
      <Footer />
    </>
  );
}

export default AppLayout;
