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
import LogIn from "./LogIn";
import logo from "../img/FEPHoriz.png";

function CustomNavbar() {
  let stingyStyles = {
    color: "#ffffff",
    fontSize: "1rem",
    // alignSelf: "end",
  };
  // let moreStyles = {
  //   fontFamily: "lemon_milkregular",
  //   textTransform: "uppercase",
  //   color: "#ffffff",
  //   fontSize: "1rem",
  // };
  return (
    <Navbar
      className="navBar"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "99999",
      }}
    >
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="Free Event Planner Logo"
            style={{ maxHeight: "150px" }}
          />
        </Navbar.Brand>
        <div className="navItemContainer">
          <NavDropdown
            title="More Options"
            id="basic-nav-dropdown"
            style={stingyStyles}
            className="navBarOption"
          >
            <NavDropdown.Item href="http://localhost:3001/create_event">
              Plan Your next Event
            </NavDropdown.Item>
            <NavDropdown.Item href="#">View Public Events</NavDropdown.Item>
            <NavDropdown.Item style={stingyStyles} href="#">
              <LogIn />
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="navItemContainer">
          <Nav.Link href="#" style={stingyStyles} className="navBarOption">
            Home
          </Nav.Link>
        </div>
        <div className="navItemContainer">
          <Nav.Link
            href="http://localhost:3001/create_event"
            style={stingyStyles}
            className="navBarOption"
          >
            Create Event
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
