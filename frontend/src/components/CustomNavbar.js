import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import LogIn from "./LogIn";
import LogInAlt from "./LogInAlt";
import logo from "../img/FEPHoriz.png";
import { useSelector } from "react-redux";

function CustomNavbar() {
  let [displayLogin, setDisplayLogin] = useState(false);
  let rerout = (e) => {
    e.preventDefault();
    if (authState === true) {
      window.location =
        "https://joey-red.github.io/EventPlanner/#/create_event";
    } else {
      e.stopPropagation();
      setDisplayLogin(true);
      timer();
    }
  };
  let timer = () => {
    setTimeout(() => {
      setDisplayLogin(false);
    }, 3000);
  };
  let stingyStyles = {
    color: "#ffffff",
    fontSize: "1rem",
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
      <Container className="actNavContainer">
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
            <NavDropdown.Item onClick={(e) => rerout(e)}>
              Plan Your next Event
            </NavDropdown.Item>
            {displayLogin ? (
              <NavDropdown.Item>
                <>
                  <div
                    variant="danger"
                    style={{
                      display: "flex",
                      borderRadius: "0.375rem",
                      padding: "2px",
                      marginLeft: "0.5ch",
                      color: "rgb(143,61,75)",
                      backgroundColor: "rgb(248,215,218)",
                      justifyContent: "center",
                    }}
                  >
                    You must log in first.
                  </div>
                </>
              </NavDropdown.Item>
            ) : (
              <></>
            )}
            <NavDropdown.Item href="https://joey-red.github.io/EventPlanner/#/view_all_events">
              View Public Events
            </NavDropdown.Item>
            <NavDropdown.Item style={stingyStyles} href="#">
              <div style={{ paddingBottom: "4px" }}>
                <LogIn />
              </div>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
        <div className="navItemContainer eventItem">
          <Nav.Link
            href="https://joey-red.github.io/EventPlanner/#/view_all_events"
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
        <div className="navItemContainer special hide">
          {authState === true ? (
            <Nav.Link
              href="https://joey-red.github.io/EventPlanner/#/create_event"
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
