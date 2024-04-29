import React from "react";
import "./Layout.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="main-container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
