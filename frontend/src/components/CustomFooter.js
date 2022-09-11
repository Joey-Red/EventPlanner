import React from "react";
import logo from "../img/FEPCircle.png";
import CustomModal from "./CustomModal";
import PrivacyModal from "./PrivacyModal";
import TermsOfUseModal from "./TermsOfUseModal";
import ContactModal from "./ContactModal";
import NavigationModal from "./NavigationModal";
import SocialsModal from "./SocialsModal";

import { Row, Col, Navbar } from "react-bootstrap";

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
                <CustomModal />
              </section>
            </Row>
            <Row>
              <section>
                {" "}
                <PrivacyModal />
              </section>
            </Row>
            <Row>
              <section>
                <TermsOfUseModal />
              </section>
            </Row>
          </Col>
          <Col style={stackLinks}>
            <Row>
              <section>
                <ContactModal />
              </section>
            </Row>
            <Row>
              <section>
                <NavigationModal />
              </section>
            </Row>
            <Row>
              <section>
                <SocialsModal />
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
                  Please don't click this
                </a>
              </section>
            </Row>
            <Row>
              <section>
                <>
                  <a href="/create_event">Get Started</a>
                </>
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
    </>
  );
}

export default CustomFooter;
