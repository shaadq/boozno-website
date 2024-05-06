import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { GlobeIcon, GlobeIconGrey, HeadphoneIcon, HeadphoneIconGrey, ListIcon, ListIconGrey, Logo, LogoPurple } from "../../../assets/img/svg";
import "./Header.scss";
import MenuOffcanvas from "./MenuOffcanvas";

const Header = ({ homepage }) => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsScrolledToTop(isAtTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [headerList, setHeaderList] = useState([
    {
      text: "Home",
      path: "/",
      active: true,
    },
    {
      text: "Solutions",
      path: "/solution",
      active: false,
    },
    {
      text: "Pricing",
      path: "/pricing",
      active: false,
    },
    {
      text: "Blog",
      path: "",
      active: false,
    },
  ]);

  const location = useLocation();
  const updateActiveHeader = () => {
    // Update headerList to mark the correct path as active
    setHeaderList((prevList) =>
      prevList.map((item) => ({
        ...item,
        active: item.path === location.pathname, // Mark as active if the path matches
      }))
    );
  };
  // Call updateActiveHeader when the route changes
  useEffect(() => {
    updateActiveHeader();
  }, [location.pathname]); // Effect runs whenever the pathname changes

  return (
    <header>
      <MenuOffcanvas show={show} setShow={setShow} headerList={headerList} setHeaderList={setHeaderList} />
      <Navbar expand="lg" className={`py-2 py-md-4 custom-header ${!isScrolledToTop ? "custom-bg-header" : ""}  ${homepage ? "homepage" : ""}`}>
        <div className="container d-flex justify-content-center">
          <div className="row w-100">
            <div className="col-6 col-lg-3 ps-0">
              {" "}
              <Link to={"/"}>
                <div className="logo-wrapper">{homepage ? <Logo /> : <LogoPurple />}</div>
              </Link>
            </div>
            <div className="d-none d-lg-block col-md-4">
              <div className={`header-items d-none d-md-flex ${!homepage ? "homepage-header-items" : ""}`}>
                {headerList.map((d, i) => (
                  <Link to={d.path} key={i}>
                    <div className={`item ${d.active ? "active" : ""}`}>{d.text}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-6 col-lg-5 pe-0">
              <div className="header-components">
                <div className="header-component-item talk-to-sales-wrapper">
                  {homepage ? <HeadphoneIcon /> : <HeadphoneIconGrey />}

                  <div className={`${homepage ? "text-white" : "text-greyheader"} ms-2 whitespace-nowrap`}>Talk to Sales</div>
                </div>
                <div className="d-none d-lg-block header-component-item">{homepage ? <GlobeIcon /> : <GlobeIconGrey />}</div>

                <div className="d-none d-lg-block header-component-item">
                  <div className={`${homepage ? "text-white" : "text-greyheader"}`}>Login</div>
                </div>

                <div className="d-none d-lg-block header-component-item">
                  <button className={`btn ${homepage ? "btn-outline-light" : "btn-outline-primary"} border-rad-45 px-4`}>Sign Up</button>
                </div>

                <div className="header-component-item d-block d-lg-none cursor-pointer">
                  <div onClick={() => setShow(true)}>{homepage ? <ListIcon /> : <ListIconGrey />}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
