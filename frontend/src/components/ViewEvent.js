import React, { useState, useEffect } from "react";
import Axios from "axios";
import TopWave from "./TopWave";
import logo from "../img/FEPCircle.png";
import jwt_decode from "jwt-decode";
import { Button, Card, Container, Row, Badge, Spinner } from "react-bootstrap";
function ViewEvent() {
  let [post, setPost] = useState({});
  let [postLoaded, setPostLoaded] = useState(false);
  let [eventId, setEventId] = useState("");
  let [currUser, setCurrUser] = useState({});
  let [showLink, setShowLink] = useState(true);
  let [showCopied, setShowCopied] = useState(false);
  let [noEventFound, setNoEventFound] = useState(false);
  let centerEverything = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    justifyContent: "center",
    alignItems: "center",
    background: "#212529cc",
    borderRadius: "0.375rem",
  };
  let centerEverythingContainer = {
    color: "#ffffff",
  };
  useEffect(() => {
    let userObject = jwt_decode(localStorage.getItem("user"));
    setCurrUser(userObject);
    let windowLoc = window.location.href;
    let juice = windowLoc.split("/");
    let eidTemp = juice[5];
    let eid = eidTemp.slice(10);
    setEventId(eid);
    if (eventId !== "") {
      fetch();
    }
  }, [eventId]);
  let copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    timer();
  };
  let timer = () => {
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };
  let fetch = () => {
    Axios.get(
      `https://eventplanner-api.herokuapp.com/retrieve_post/${eventId}`,
      {
        headers: { eventId: eventId },
      }
    )
      .then((res) => {
        if (res.data.name === "CastError") {
          setNoEventFound(true);
          // console.log(noEventFound);
        } else {
          setPost(res.data);
          setPostLoaded(true);
          setNoEventFound(false);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  let close = () => {
    setShowLink(false);
  };

  return (
    <div
      className="veFullContainer"
      style={{
        //  paddingBottom: "250px",
        padding: "25vh 20px",
      }}
    >
      <div className="veBgImg"></div>
      <TopWave />
      {!postLoaded ? (
        <>
          <>
            return (
            <div>
              <Container
                style={centerEverythingContainer}
                className="gutterContainer"
              >
                <Card
                  style={{
                    minHeight: "50vh",
                    background: "none",
                  }}
                >
                  <Card.Body style={centerEverything}>
                    <Container
                      style={{
                        color: "black",
                        background: "none",
                      }}
                    ></Container>
                    <Card.Text
                      className="eViteHeader"
                      style={{ fontSize: "2rem" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Card.Text>
                    <Card.Text className="eVite">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Card.Text>
                    <Card.Text
                      className="eVite"
                      style={{ textAlign: "center" }}
                    >
                      {post.eventDescription}
                    </Card.Text>
                    <Card.Text
                      className="eVite"
                      style={{ textAlign: "center" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Card.Text>
                    <Card.Text
                      className="eVite"
                      style={{ zIndex: "1", textAlign: "center" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Card.Text>
                    <img
                      src={logo}
                      alt="Free Event Planner Logo"
                      style={{
                        maxHeight: "90px",
                        maxWidth: "93px",
                        minHeight: "90px",
                        minWidth: "93px",
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        zIndex: "0",
                      }}
                    />
                  </Card.Body>
                </Card>
              </Container>
            </div>
          </>
        </>
      ) : (
        <></>
      )}
      {postLoaded && !noEventFound ? (
        <>
          return (
          <div
          // style={{ marginTop: "267px" }}
          >
            <Container
              style={centerEverythingContainer}
              className="gutterContainer"
            >
              <Card
                style={{
                  minHeight: "50vh",
                  background: "none",
                }}
              >
                <Card.Body style={centerEverything}>
                  <Container
                    style={{
                      color: "black",
                      background: "none",
                    }}
                  >
                    <Card
                      style={{
                        backgroundColor: "rgba(108, 122, 137, 0.4)",
                        color: "#ffffff",
                      }}
                    >
                      <Card.Body>
                        <button
                          style={{
                            position: "absolute",
                            top: "4px",
                            right: "4px",
                            border: "none",
                            background: "none",
                          }}
                          onClick={() => close()}
                        >
                          &#10006;
                        </button>
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#FF6961",
                          }}
                        >
                          Shareable Link!
                        </Row>
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            color: "#FF6961",
                          }}
                        >
                          <div
                            className="clipLink"
                            style={{ textAlign: "center" }}
                          >
                            {window.location.href}
                          </div>
                          <Button
                            style={{
                              maxWidth: "fit-content",
                              marginLeft: "8px",
                            }}
                            variant="dark"
                            onClick={() => copy()}
                          >
                            Copy to Clipboard
                          </Button>
                          {showCopied ? (
                            <>
                              <Badge
                                bg="secondary"
                                style={{
                                  maxWidth: "fit-content",
                                  margin: "6px",
                                }}
                              >
                                Copied!
                              </Badge>
                            </>
                          ) : (
                            <></>
                          )}
                        </Row>
                      </Card.Body>
                    </Card>
                  </Container>
                  <Card.Text
                    className="eViteHeader"
                    style={{ fontSize: "2rem" }}
                  >
                    You're invited!
                  </Card.Text>
                  <Card.Text className="eVite">
                    {post.eventCreator} warmly welcomes you to {post.eventTitle}
                  </Card.Text>
                  <Card.Text className="eVite" style={{ textAlign: "center" }}>
                    {post.eventDescription}
                  </Card.Text>
                  <Card.Text className="eVite" style={{ textAlign: "center" }}>
                    {post.eventTitle} will be held on {post.eventDate} at{" "}
                    {post.eventTime}
                  </Card.Text>
                  <Card.Text
                    className="eVite"
                    style={{ zIndex: "1", textAlign: "center" }}
                  >
                    For further information, contact {post.eventCreator} at{" "}
                    {post.hostEmail}
                  </Card.Text>
                  <img
                    src={logo}
                    alt="Free Event Planner Logo"
                    style={{
                      maxHeight: "90px",
                      maxWidth: "93px",
                      minHeight: "90px",
                      minWidth: "93px",
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      zIndex: "0",
                    }}
                  />
                </Card.Body>
              </Card>
            </Container>
          </div>
        </>
      ) : (
        <></>
      )}
      {noEventFound ? (
        <div>
          <Container
            style={centerEverythingContainer}
            className="gutterContainer"
          >
            <Card
              style={{
                minHeight: "50vh",
                background: "none",
                marginTop: "50px",
                marginBottom: "18vh",
              }}
            >
              <Card.Body style={centerEverything}>
                <Card.Text className="eViteHeader" style={{ fontSize: "2rem" }}>
                  We couldn't find that event.
                </Card.Text>
                <Card.Text className="eVite" style={{ textAlign: "center" }}>
                  Why don't you check out some others?
                </Card.Text>
                <Card.Text className="eVite">{post.eventDescription}</Card.Text>
                <Card.Text className="eVite">
                  <a
                    href="https://joey-red.github.io/EventPlanner/#/view_all_events"
                    className="otherEvents"
                  >
                    Follow me!
                  </a>
                </Card.Text>
                <img
                  src={logo}
                  alt="Free Event Planner Logo"
                  style={{
                    maxHeight: "90px",
                    maxWidth: "93px",
                    minHeight: "90px",
                    minWidth: "93px",
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                  }}
                />
              </Card.Body>
            </Card>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewEvent;
