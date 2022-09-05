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
  return (
    <Navbar>
      <img
        src={logo}
        alt="Free Event Planner Logo"
        style={{
          maxHeight: "150px",
          position: "absolute",
          bottom: "10px",
          right: "10px",
        }}
      />
    </Navbar>
  );
}

export default CustomFooter;
