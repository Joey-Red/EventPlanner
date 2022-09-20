import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EventPlaceholder from "./EventPlaceholder";
import MidWave from "./MidWave";
import EventPlaceholderEmpty from "./EventPlaceholderEmpty";
import { Button, Container, Spinner } from "react-bootstrap";

function PublicDashboard() {
  const [listOfPosts, setListOfPosts] = useState([{}]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [placeholders, setPlaceholders] = useState([{}]);
  const [todaysDate, setTodaysDate] = useState("");
  let [verifiedPosts, setVerifiedPosts] = useState([]);
  let [postsFiltered, setPostsFiltered] = useState(false);
  let [fillPlaceHolders, setFillPlaceHolders] = useState(false);
  // Fetch Posts
  useEffect(() => {
    Axios.get("https://eventplanner-api.herokuapp.com/retrieve_posts")
      .then((res) => {
        setListOfPosts(res.data);
        setPostsLoaded(true);
      })
      .catch(function (err) {
        console.log("whoops");
      });
  }, []);
  let rerout = () => {
    window.location =
      "https://joey-red.github.io/EventPlanner/#/view_all_events";
  };
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = yyyy + "-" + mm + "-" + dd;
    setTodaysDate(formattedToday);
  }, []);

  const updatedState = [];
  const placeholderCount = [];
  useEffect(() => {
    listOfPosts.forEach((post) => {
      let testDate = "9999-01-01";
      if (post.eventDate > todaysDate) {
        updatedState.push(post);
      }
    });
    setVerifiedPosts(updatedState);
    setPostsFiltered(true);
    if (updatedState.length < 5) {
      let desiredLength = 5 - updatedState.length;
      for (let i = 1; i < desiredLength; i++) {
        placeholderCount.push({ key: "value" });
      }
    }
    setPlaceholders(placeholderCount);
    setFillPlaceHolders(true);
  }, [listOfPosts]);

  return (
    <div style={{ position: "relative", zIndex: "9997" }}>
      {" "}
      <MidWave />
      <div className="peImage"></div>
      <Container
        className="pubEventFullContainer"
        style={{ position: "relative" }}
      >
        <div
          className="publicEventInfo"
          style={{ position: "relative", paddingTop: "255px" }}
        >
          <Container>
            <h2 className="peHeader">
              Don't want to create an Event? Join a public one!
            </h2>
          </Container>
        </div>
        {postsLoaded ? (
          <>
            <Container fluid className="pubEventContainer">
              {postsFiltered ? (
                <>
                  {verifiedPosts.map((post) => {
                    return (
                      <div className="postContainerContainer" key={uuidv4()}>
                        <div className="singlePost">
                          <EventPlaceholder
                            eventTitle={post.eventTitle}
                            eventDescription={post.eventDescription}
                            eventCreator={post.eventCreator}
                            dateCreated={post.dateCreated}
                            emailRegistry={post.emailRegistry}
                            eventAdmins={post.eventAdmins}
                            eventUpdatePosts={post.eventUpdatePosts}
                            hostEmail={post.hostEmail}
                            postId={post._id}
                            eventTime={post.eventTime}
                            eventDate={post.eventDate}
                          />
                        </div>
                      </div>
                    );
                  })}
                  {fillPlaceHolders ? (
                    <>
                      {placeholders.map((post) => {
                        return (
                          <div
                            className="postContainerContainer"
                            key={uuidv4()}
                          >
                            <div className="singlePost">
                              <EventPlaceholderEmpty />;
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </>
              )}
            </Container>
            <Container>
              <Container>
                <Button
                  variant="dark"
                  className="mb-3 mt-3"
                  style={{ width: "100%" }}
                  onClick={() => rerout()}
                >
                  View More Public Events
                </Button>
              </Container>
            </Container>
          </>
        ) : (
          <Container>
            <Spinner animation="border" />
          </Container>
        )}
      </Container>
    </div>
  );
}

export default PublicDashboard;
