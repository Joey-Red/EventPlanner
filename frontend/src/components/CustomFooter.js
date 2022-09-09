import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import logo from "../img/FEPCircle.png";
function CustomFooter() {
  let stackLinks = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <>
      <Navbar
        style={{
          justifyContent: "normal",
        }}
        className="footer"
      >
        <div className="footerLinks">
          <Col style={stackLinks}>
            <Row>
              <section>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Launch demo modal
                </button>
              </section>
            </Row>
            <Row>
              <section>
                {" "}
                <a href="#">Privacy Policy</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="#">Terms of Use</a>
              </section>
            </Row>
          </Col>
          <Col style={stackLinks}>
            <Row>
              <section>
                <a href="#">Contact</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="#">Navigation</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="#">Socials</a>
              </section>
            </Row>
          </Col>
          <Col style={stackLinks}>
            <Row>
              <section>
                <a href="#">Log In</a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Important Link
                </a>
              </section>
            </Row>
            <Row>
              <section>
                <a href="#">Get Started</a>
              </section>
            </Row>
          </Col>
          <Col style={stackLinks}>
            <Row>
              <section>
                <div className="aboutUs">About Us</div>
                <div className="aboutUsUnder" style={{ maxWidth: "16em" }}>
                  We make it easy to create and share your events with friends
                  and family, for free.
                </div>
              </section>
            </Row>
          </Col>
          <img
            src={logo}
            alt="Free Event Planner Logo"
            style={{
              maxHeight: "90px",
              maxWidth: "93px",
              minHeight: "90px",
              minWidth: "93px",
            }}
          />
        </div>
      </Navbar>
      {/* MODAL ATTEMPT */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL ATTEMPT */}
    </>
  );
}

export default CustomFooter;
