import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import { Row, Col, Modal, Button } from "react-bootstrap";
function NavigationModal() {
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
        Navigation
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          // marginTop: "calc(50% + 500px)",
          // position: "absolute",
          // bottom: "0",
          zIndex: "999999999999999",
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Website Navigation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Row>
              <section>
                <a href="/">Home</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="/create_event">Create Event</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="/view_all_events">View All Public Events</a>
              </section>
            </Row>
          </Col>
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

export default NavigationModal;
