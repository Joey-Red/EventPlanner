import React, { useState } from "react";
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
                <a href="https://joey-red.github.io/EventPlanner/">Home</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="https://joey-red.github.io/EventPlanner/#/create_event">
                  Create Event
                </a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="https://joey-red.github.io/EventPlanner/#/view_all_events">
                  View All Public Events
                </a>
              </section>
            </Row>
            <Row>
              <a
                href="https://www.flaticon.com/free-icons/planner"
                title="planner icons"
              >
                Planner icons created by Smashicons - Flaticon
              </a>
              <a href="https://unsplash.com/">
                Photos Courtesy of The awesome Photographers on Unsplash
              </a>
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
