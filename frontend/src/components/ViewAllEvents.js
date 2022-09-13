import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EventPlaceholder from "./EventPlaceholder";
import { Container, Spinner } from "react-bootstrap";
import EventPlaceholderEmpty from "./EventPlaceholderEmpty";

function ViewAllEvents() {
  const [listOfPosts, setListOfPosts] = useState([{}]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [remainingPosts, setRemainingPosts] = useState(0);
  const [placeholders, setPlaceholders] = useState([]);
  // let [filteredPost, setFilteredPost] = useState(3);
  let [verifiedPost, setVerifiedPost] = useState([]);
  let [postsFiltered, setPostsFiltered] = useState(false);
  let [fillPlaceHolders, setFillPlaceHolders] = useState(false);
  let [todaysDate, setTodaysDate] = useState("");
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
    Axios.get("http://localhost:8080/retrieve_posts")
      .then((res) => {
        setListOfPosts(res.data);
        setPostsLoaded(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Base 4 placeholders (0 index)
    let filteredPost = 4;
    listOfPosts.forEach((post) => {
      console.log(post);
      // check each post, compare date to todays date
      let testDateString = "2023-09-20";
      if (post.eventDate > todaysDate) {
        verifiedPost.push(post);
        // setVerifiedPost({ ...verifiedPost, post });
        // console.log(verifiedPost);
        // date good? add to array
        filteredPost--;
        //reduce number of placeholders
        // console.log(filteredPost);
      }
    });
    // Good posts found, show on screen
    setPostsFiltered(true);
    // if (filteredPost > 0) {
    // If placeholders needed, add them to array
    for (let i = 0; i < filteredPost; i++) {
      // console.log(filteredPost);
      // placeholders.push({ key: "value" });
      setPlaceholders([...placeholders, { key: "value" }]);
      // console.log(placeholders);
    }
    // # placeholders set, fill them
    setFillPlaceHolders(true);
    // }
  }, [todaysDate, listOfPosts]);

  return (
    <div style={{ position: "relative", zIndex: "9997" }}>
      {" "}
      <div className="vaeImage"></div>
      <Container
        className="pubEventFullContainer"
        style={{ position: "relative" }}
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
