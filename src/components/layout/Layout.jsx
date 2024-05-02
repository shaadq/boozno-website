import React, { useEffect, useState } from "react";
import "./Layout.scss";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const [homepage, setHomepage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is "/"
    if (location.pathname === "/") {
      setHomepage(true);
    } else {
      setHomepage(false);
    }
  }, [location.pathname]); // The effect depends on the pathname

  return (
    <div className="parent-container">
      <Header homepage={homepage} />
      <div className="main-container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
