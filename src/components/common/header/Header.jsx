import "./Header.scss";
import Navbar from "react-bootstrap/Navbar";
import { GlobeIcon, HeadphoneIcon, ListIcon, Logo } from "../../../assets/img/svg";
import MenuOffcanvas from "./MenuOffcanvas";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the top
      const isAtTop = window.scrollY === 0;
      setIsScrolledToTop(isAtTop); // Update the state
    };
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on component mount
  return (
    <header>
      <MenuOffcanvas show={show} setShow={setShow} />
      <Navbar expand="lg" className={`py-2 py-md-4 custom-header ${!isScrolledToTop ? "bg-custom-black" : ""}`}>
        <div className="container d-flex justify-content-center">
          <div className="row w-100">
            <div className="col-6 col-lg-3">
              {" "}
              <div className="logo-wrapper">
                <Logo />
              </div>
            </div>
            <div className="d-none d-lg-block col-md-4">
              <div className="header-items d-none d-md-flex">
                <div className="item">Home</div>
                <div className="item">Solutions</div>
                <div className="item">Pricing</div>
                <div className="item">Blog</div>
              </div>
            </div>
            <div className="col-6 col-lg-5 pe-0">
              <div className="header-components">
                <div className="header-component-item talk-to-sales-wrapper">
                  <HeadphoneIcon />
                  <div className="text-white ms-2 whitespace-nowrap">Talk to Sales</div>
                </div>
                <div className="d-none d-lg-block header-component-item">
                  <GlobeIcon />
                </div>

                <div className="d-none d-lg-block header-component-item">
                  <div className="text-white">Login</div>
                </div>

                <div className="d-none d-lg-block header-component-item">
                  <button className="btn btn-outline-light border-rad-45 px-4">Sign Up</button>
                </div>

                <div className="header-component-item d-block d-lg-none cursor-pointer">
                  <div onClick={() => setShow(true)}>
                    <ListIcon />
                  </div>
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