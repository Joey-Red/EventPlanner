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
  let [verifiedPost, setVerifiedPost] = useState([]);
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

  useEffect(() => {
    // Base 4 placeholders (0 index)
    let filteredPost = 4;
    listOfPosts.forEach((post) => {
      // console.log(post);
      // check each post, compare date to todays date
      let testDateString = "2023-09-08";
      console.log("line before push");
      console.log(todaysDate);
      if (post.eventDate > todaysDate) {
        verifiedPost.push(post);
        console.log("pushed");
        // setVerifiedPost({ ...verifiedPost, post });
        // console.log(verifiedPost);
        // date good? add to array
        filteredPost--;
        //reduce number of placeholders
        // console.log(filteredPost);
      }
    });
    // Good posts found, show on screen
    setPostsLoaded(true);
    setPostsFiltered(true);
    // if (filteredPost > 0) {
    // If placeholders needed, add them to array
    for (let i = 0; i < filteredPost; i++) {
      // console.log(filteredPost);
      // placeholders.push({ key: "value" });
      setPlaceholders([...placeholders, { key: "value" }]);
      // console.log(placeholders);
    }
    // ## placeholders set, fill them
    setFillPlaceHolders(true);
    // }
  }, [todaysDate, listOfPosts]);

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
                  {verifiedPost.map((post) => {
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
                  className="mb-3"
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
