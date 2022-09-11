import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EventPlaceholder from "./EventPlaceholder";
import TopWave from "./TopWave";
import logo from "../img/FEPCircle.png";

// import MidWave from "./MidWave";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
function ViewEvent() {
  let [post, setPost] = useState({});
  let [postLoaded, setPostLoaded] = useState(false);
  let [eventId, setEventId] = useState("");
  let centerEverything = {
    display: "flex",
    margin: "0px auto 0px auto",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    justifyContent: "center",
    alignItems: "center",
    background: "#212529cc",
    borderRadius: "0.375rem",
  };
  let centerEverythingContainer = {
    display: "flex",
    margin: "0px auto 0px auto",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    alignItems: "center",
    background: "none",
    fontSize: "1.3rem",
    color: "#ffffff",
  };
  useEffect(() => {
    let windowLoc = window.location.href;
    let juice = windowLoc.split("/");
    // let eventId = juice[4];
    setEventId(juice[4]);
    console.log("eventId: ", eventId);
    if (eventId !== "") {
      fetch();
    }
  }, [eventId]);
  let fetch = () => {
    Axios.get(`http://localhost:8080/retrieve_post/${eventId}`, {
      headers: { eventId: eventId },
    })

      // Get url from url bar
      // check if it exists
      // if not, 404 event not found :(
      .then((res) => {
        setPost(res.data);
        setPostLoaded(true);
        console.log("res.data: ", res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="veFullContainer" style={{ paddingBottom: "150px" }}>
      <div className="veBgImg"></div>
      <TopWave />
      {postLoaded ? (
        <>
          return (
          <div style={{ marginTop: "267px" }}>
            <Container style={centerEverythingContainer}>
              <Card style={{ minHeight: "50vh", background: "none" }}>
                <Card.Body style={centerEverything}>
                  <Card.Text
                    className="eViteHeader"
                    style={{ fontSize: "2rem" }}
                  >
                    You're invited!
                  </Card.Text>
                  <Card.Text className="eVite">
                    {post.eventCreator} warmly welcomes you to {post.eventTitle}
                  </Card.Text>
                  <Card.Text className="eVite">
                    {post.eventDescription}
                  </Card.Text>
                  <Card.Text className="eVite">
                    {post.eventTitle} will be held on {post.eventDate} at{" "}
                    {post.eventTime}
                  </Card.Text>
                  {post.eventUpdatePosts.length > 0 ? (
                    <>{post.eventUpdatePosts}</>
                  ) : (
                    <></>
                  )}
                  <Card.Text className="eVite">
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
    </div>
  );
}

export default ViewEvent;
