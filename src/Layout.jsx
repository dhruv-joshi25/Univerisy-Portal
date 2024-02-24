import React from "react";
// import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Outlet />
      <Footer /> */}
    </>
  );
}
