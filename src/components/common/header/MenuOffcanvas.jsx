import { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { GlobeIconDark } from "../../../assets/img/svg";
import "./Header.scss";

const MenuOffcanvas = ({ show, setShow, headerList, setHeaderList }) => {
  const handleClose = () => setShow(false);

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
    <div className="">
      <Offcanvas className="header-menu-offcanvas" placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>{/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}</Offcanvas.Header>
        <Offcanvas.Body>
          <div className="header-offcanvas-body-wrappper">
            <div className="header-menu-offcanvaslist">
              {headerList.map((d, i) => (
                <Link to={d.path} key={i} onClick={handleClose}>
                  <div className={`list-item ${d.active ? "active" : ""}`}>{d.text}</div>
                </Link>
              ))}

              <div className="d-flex mt-4">
                <GlobeIconDark />
                <div className="ms-2 text-grey fs-18">English</div>
              </div>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <div className="me-3 fs-18">Login</div>
              <button className="btn btn-outline-primary border-rad-45 px-4 fs-18">Sign Up</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MenuOffcanvas;
