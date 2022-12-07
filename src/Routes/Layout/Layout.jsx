import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Navbaralt from "../../components/Navbar/Navbaralt";
function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbaralt />
      <Outlet />
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

export default Layout;
