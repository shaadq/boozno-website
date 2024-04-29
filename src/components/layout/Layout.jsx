import React from "react";
import "./Layout.scss";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Layout = (props) => {
  return (
    <div className="parent-container">
      <Header />
      <div className="main-container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
