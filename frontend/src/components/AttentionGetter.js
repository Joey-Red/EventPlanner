import React from "react";
import { Button, Card, Form, Container, Row, ListGroup } from "react-bootstrap";
import LogInAltMid from "./LogInAltMid";
function AttentionGetter() {
  let noBackground = {
    background: "#F0F0ED",
    padding: "12px",
  };
  let noBackgroundAlt = {
    background: "#F0F0ED",
    padding: "12px",
    display: "flex",
  };
  let noBackgroundForm = {
    background: "#F0F0ED",
    borderRadius: "0.375rem",
  };
  let noBackgroundBody = {
    background: "#F0F0ED",
  };
  let rerout = () => {
    window.location = "https://joey-red.github.io/EventPlanner/#/create_event";
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="agImage"></div>
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
            bottom: "0px",
            left: "0",
            right: "0",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#212529"
              fillOpacity="1"
              d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,101.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <Container>
          <Container>
            <div className="agHeaderBg">
              <h1 className="agHeader">Plan Your Event Today</h1>
            </div>

            <Container
              className="mb-3"
              style={{
                fontSize: "1.9rem",
                background: "none",
              }}
            >
              <Form style={noBackgroundForm}>
                <Card style={noBackground}>
                  <Card.Body style={noBackgroundBody}>
                    <Row style={noBackground}>
                      <Card.Text style={noBackground}>
                        Let us help you plan your events, whether they are
                        online or in person!
                      </Card.Text>
                    </Row>
                    <Row style={noBackground}>
                      <Card.Text style={noBackground}>
                        It's fast and simple.{" "}
                      </Card.Text>
                      <ListGroup as="ol" numbered style={noBackground}>
                        <ListGroup.Item as="li" style={noBackgroundAlt}>
                          Sign in{" "}
                          <div
                            style={{
                              marginLeft: "3px",
                              display: "flex",
                              alignSelf: "center",
                            }}
                          >
                            <LogInAltMid />
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" style={noBackground}>
                          Tell us about your event
                        </ListGroup.Item>
                        <ListGroup.Item as="li" style={noBackground}>
                          Have fun at your event! Are you ready to{" "}
                          <Button variant="dark" onClick={() => rerout()}>
                            Get Started
                          </Button>
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
    </div>
  );
}

export default AttentionGetter;
