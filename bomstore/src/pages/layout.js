import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../assets/css/layout.css";
const Layout = () => {
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="outer-row">
            <div className="col-md-12">
              <Header />
              <Outlet />

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
