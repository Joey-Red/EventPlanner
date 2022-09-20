import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EventPlaceholder from "./EventPlaceholder";
import { Container, Spinner } from "react-bootstrap";
import EventPlaceholderEmpty from "./EventPlaceholderEmpty";
import TopWave from "./TopWave";
function ViewAllEvents() {
  const [listOfPosts, setListOfPosts] = useState([{}]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [placeholders, setPlaceholders] = useState([]);
  const [verifiedPosts, setVerifiedPosts] = useState([]);
  let [postsFiltered, setPostsFiltered] = useState(false);
  let [fillPlaceHolders, setFillPlaceHolders] = useState(false);
  let [todaysDate, setTodaysDate] = useState("");
  let [filteredPost, setFilteredPost] = useState(1);
  // Fetch Posts
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
    Axios.get("https://eventplanner-api.herokuapp.com/retrieve_posts")
      .then((res) => {
        setListOfPosts(res.data);
        setPostsLoaded(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const updatedState = [];
  const placeholderCount = [];
  useEffect(() => {
    listOfPosts.forEach((post) => {
      let testDate = "2000-01-01";
      if (post.eventDate > todaysDate) {
        updatedState.push(post);
      }
    });
    setVerifiedPosts(updatedState);
    setPostsFiltered(true);
    if (updatedState.length < 7) {
      let desiredLength = 7 - updatedState.length;
      for (let i = 1; i < desiredLength; i++) {
        placeholderCount.push({ key: "value" });
      }
    }
    setPlaceholders(placeholderCount);
    setFillPlaceHolders(true);
  }, [listOfPosts]);

  return (
    <div style={{ position: "relative", zIndex: "9996" }}>
      {" "}
      <TopWave />
      <div className="vaeImage"></div>
      <Container
        className="pubEventFullContainer"
        style={{ position: "relative", zIndex: "0" }}
      >
        <div
          className="publicEventInfo"
          style={{ position: "relative", paddingTop: "255px" }}
        >
          <Container>
            <h2 className="peHeader">Here are the upcoming public events!</h2>
          </Container>
        </div>
        {postsLoaded ? (
          <div>
            <Container fluid className="allPubEventContainer">
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
                            eventDate={post.eventDate}
                            eventTime={post.eventTime}
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
              {fillPlaceHolders ? (
                <>
                  {placeholders.map((post) => {
                    return (
                      <div className="postContainerContainer" key={uuidv4()}>
                        <div className="singlePost">
                          <EventPlaceholderEmpty />;
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </Container>
          </div>
        ) : (
          <Container>
            <Spinner animation="border" />
          </Container>
        )}
      </Container>
    </div>
  );
}

export default ViewAllEvents;
