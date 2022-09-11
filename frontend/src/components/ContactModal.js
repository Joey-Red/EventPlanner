import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import { Row, Col, Modal, Button, Container } from "react-bootstrap";
function TermsOfUseModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        style={{
          background: "none",
          border: "none",
          textDecoration: "underline",
          color: "#ffffff",
        }}
        onClick={handleShow}
      >
        Contact
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          zIndex: "999999999999999",
        }}
        aria-labelledby="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>Joey Dalrymple</Row>
            <Row>Email: xjoey96@gmail</Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TermsOfUseModal;
