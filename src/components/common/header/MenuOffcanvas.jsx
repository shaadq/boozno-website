import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.scss";
import { GlobeIconDark } from "../../../assets/img/svg";

const MenuOffcanvas = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <div className="">
      <Offcanvas className="header-menu-offcanvas" placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>{/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}</Offcanvas.Header>
        <Offcanvas.Body>
          <div className="header-offcanvas-body-wrappper">
            <div className="header-menu-offcanvaslist">
              <div className="list-item">Home</div>
              <div className="list-item">Product</div>
              <div className="list-item">Pricing</div>
              <div className="list-item">Blog</div>
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
