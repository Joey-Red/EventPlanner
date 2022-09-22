import React, { useState } from "react";
import { Button, Card, Form, Container, Row, ListGroup } from "react-bootstrap";
import LogInAltMid from "./LogInAltMid";
import { useSelector } from "react-redux";

function AttentionGetter() {
  let [displayLogin, setDisplayLogin] = useState(false);
  const authState = useSelector((auth) => auth.authState.value);
  let noBackground = {
    background: "#F0F0ED",
    padding: "12px",
    display: "flex",
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

  let rerout = (e) => {
    e.preventDefault();
    if (authState === true) {
      window.location =
        "https://joey-red.github.io/EventPlanner/#/create_event";
    } else {
      setDisplayLogin(true);
      timer();
    }
  };
  let timer = () => {
    setTimeout(() => {
      setDisplayLogin(false);
    }, 3000);
  };
  return (
    <div className="agContainerDiv">
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
        <Container className="agBsContainerOutside">
          <Container className="agBsContainer">
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
                          {" "}
                          <div style={{ marginLeft: "1ch" }}>Sign in</div>
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
                          <div style={{ marginLeft: "1ch" }}>
                            Tell us about your event
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" style={noBackground}>
                          <div style={{ marginLeft: "1ch" }}>
                            Have fun at your event, Lets
                          </div>
                          {/* <Button variant="dark" onClick={() => rerout()}>
                            Get Started
                          </Button> */}
                          <button
                            className="getStartedLink"
                            onClick={(e) => rerout(e)}
                            style={{
                              marginLeft: "0.5ch",
                              textDecoration: "underline",
                              background: "none",
                            }}
                          >
                            Get Started!
                          </button>
                          {displayLogin ? (
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
                                }}
                              >
                                You must log in first.
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
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
