import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.scss";

const MenuOffcanvas = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <div className="">
      <Offcanvas
        className="header-menu-offcanvas"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MenuOffcanvas;
