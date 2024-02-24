// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar"
import Footer from "./Components/Home/FooterSection"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
