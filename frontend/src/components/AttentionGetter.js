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
function AttentionGetter() {
  let noBackground = {
    background: "none",
  };
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "255px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eb8276"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,250.7C672,288,768,288,864,288C960,288,1056,288,1152,277.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container>
        <h1>Plan Your Event Today</h1>
        <Container>
          <Container
            className="mb-3"
            style={{
              fontSize: "1.9rem",
              background: "none",
            }}
          >
            <Form style={noBackground}>
              <Card style={noBackground}>
                <Card.Body style={noBackground}>
                  <Row style={noBackground}>
                    <Card.Text style={noBackground}>
                      Let us help you plan your events, whether they are online
                      or in person!
                    </Card.Text>
                  </Row>
                  <Row style={noBackground}>
                    <Card.Text style={noBackground}>
                      It's fast and simple.{" "}
                    </Card.Text>
                    <ListGroup as="ol" numbered style={noBackground}>
                      <ListGroup.Item as="li" style={noBackground}>
                        Sign in
                      </ListGroup.Item>
                      <ListGroup.Item as="li" style={noBackground}>
                        Tell us about your event
                      </ListGroup.Item>
                      <ListGroup.Item as="li" style={noBackground}>
                        Have fun at your event! Are you ready to{" "}
                        <Button variant="dark">Get Started</Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Row>
                </Card.Body>
              </Card>
            </Form>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default AttentionGetter;
