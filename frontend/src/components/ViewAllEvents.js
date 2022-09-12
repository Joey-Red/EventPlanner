import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import EventPlaceholder from "./EventPlaceholder";
import { Container, Spinner } from "react-bootstrap";

function ViewAllEvents() {
  const [listOfPosts, setListOfPosts] = useState([{}]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  // Fetch Posts
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
          <>
            <Container fluid className="allPubEventContainer">
              {listOfPosts.map((post) => {
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

export default ViewAllEvents;
