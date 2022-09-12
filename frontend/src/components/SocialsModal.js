import React, { useState } from "react";
import { Col, Row, Modal, Button, Container } from "react-bootstrap";
function SocialsModal() {
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
        Socials
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
          <Modal.Title>My Socials</Modal.Title>
        </Modal.Header>
        <Modal.Body className="linkBody">
          <Container className="linkBody">
            <Row>
              <Col className="socialLink">
                <a href="https://www.linkedin.com/in/joey-dalrymple/">
                  LinkedIn
                </a>
              </Col>
              <Col className="socialLink">
                <a href="https://twitter.com/JoeyDalrymple_">Twitter</a>
              </Col>
              <Col className="socialLink">
                <a href="https://github.com/Joey-Red">GitHub</a>
              </Col>
            </Row>
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

export default SocialsModal;
