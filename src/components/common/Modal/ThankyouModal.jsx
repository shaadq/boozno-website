import React from "react";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";
import img from "../../../assets/img/modal-img.svg";

const ThankyouModal = ({ show, setShow }) => {
  //   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal className="custom-modal-wrapper" show={show} size="" onHide={handleClose} centered>
        <Modal.Header closeButton>{/* <Modal.Title>Modal heading</Modal.Title> */}</Modal.Header>
        <Modal.Body>
          <div className="custom-modal-body">
            <img src={img} alt="" className="mb-3" />
            <h1 className="section-title text-dark-blue">Thank You</h1>
            <p className="section-subtitle">Thank you for your request and interest in collaboration with us. We will get back to you as quickly as we can.</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ThankyouModal;
