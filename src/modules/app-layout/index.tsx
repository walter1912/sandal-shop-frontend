"use client"
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
