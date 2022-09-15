import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LogIn from "./LogIn";
import LogInAlt from "./LogInAlt";
import logo from "../img/FEPHoriz.png";
import { useSelector } from "react-redux";

function CustomNavbar() {
  let stingyStyles = {
    color: "#ffffff",
    fontSize: "1rem",
    // alignSelf: "end",
  };
  let soloStyles = {
    color: "#ffffff",
    fontSize: "1rem",
    backgroundColor: "#2125297e",
  };
  const authState = useSelector((auth) => auth.authState.value);

  return (
    <Navbar
      className="navBar"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "9999",
      }}
    >
      <Container>
        <Navbar.Brand>
          <a href="https://joey-red.github.io/EventPlanner/">
            <img
              src={logo}
              alt="Free Event Planner Logo"
              style={{ maxHeight: "150px" }}
            />
          </a>
        </Navbar.Brand>
        <div className="navItemContainer">
          <NavDropdown
            title="More Options"
            id="basic-nav-dropdown"
            style={soloStyles}
            className="navBarOption"
          >
            <NavDropdown.Item href="/create_event">
              Plan Your next Event
            </NavDropdown.Item>
            <NavDropdown.Item href="/view_all_events">
              View Public Events
            </NavDropdown.Item>
            <NavDropdown.Item style={stingyStyles} href="#">
              <LogIn />
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="navItemContainer">
          <Nav.Link
            href="/view_all_events"
            style={stingyStyles}
            className="navBarOption"
          >
            View Public Events
          </Nav.Link>
        </div>
        <div className="navItemContainer">
          <Nav.Link
            href="https://joey-red.github.io/EventPlanner/"
            style={stingyStyles}
            className="navBarOption"
          >
            Home
          </Nav.Link>
        </div>
        <div className="navItemContainer special">
          {authState === true ? (
            <Nav.Link
              href="/create_event"
              style={stingyStyles}
              className="navBarOption"
            >
              Create Event
            </Nav.Link>
          ) : (
            <LogInAlt />
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
