import React from "react";
import { Button, Card, Container, Col } from "react-bootstrap";
function EventPlaceholderEmpty(props) {
  let rerout = (e) => {
    // window.location = `/view_event/${postId}`;
  };
  return (
    <Container>
      <Card
        className="mb-3"
        id="singleCard"
        style={{ minHeight: "328px", maxHeight: "328px", zIndex: "99999" }}
      >
        <Card.Body>
          <Card.Title className="eventTitle">
            Currently there isnt much going on
          </Card.Title>
          <Col>
            <Card.Text>So, this is just a placeholder.</Card.Text>
            <Card.Text>
              Maybe, you could create an event for others to join!
            </Card.Text>
            <Card.Text>
              The more live events there are, the less of me you will see.
            </Card.Text>
          </Col>
        </Card.Body>
        <Card.Body
          style={{
            marginBottom: "0",
            color: "#CBEAC0",
          }}
        ></Card.Body>
        <Button variant="dark" onClick={() => rerout()} disabled>
          Check out this event
        </Button>
      </Card>
    </Container>
  );
}

export default EventPlaceholderEmpty;
