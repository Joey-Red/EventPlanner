import React from "react";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import logo from "../img/FEPCircle.png";
function CustomFooter() {
  let stackLinks = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <Navbar
      style={{
        // position: "absolute",
        // bottom: "0",
        // left: "0",
        // right: "0",
        // height: "50px",
        justifyContent: "normal",
      }}
      className="footer"
    >
      <div className="footerLinks">
        <Col style={stackLinks}>
          <Row>
            <section>
              <a href="#">Sitemap</a>
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
              <a href="#">Sitemap</a>
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
                We make it easy to create and share your events with friends and
                family, for free.
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
  );
}

export default CustomFooter;
