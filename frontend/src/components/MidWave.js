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
  ListGroup,
} from "react-bootstrap";
function MidWave() {
  return (
    <div
      style={{
        position: "relative",
        // paddingTop: "255px",
        // paddingBottom: "50px",
      }}
    >
      <div
        style={{
          position: "absolute",
          // top: "-75px",
          top: "0px",
          // bottom: "0",
          left: "0",
          right: "0",
          zIndex: "9998",
        }}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,250.7C672,288,768,288,864,288C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212529"
            fillOpacity="1"
            d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,101.3C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default MidWave;
