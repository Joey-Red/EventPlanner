import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
function EventPlaceholder(props) {
  let {
    eventDescription,
    eventTitle,
    eventCreator,
    hostEmail,
    postId,
    eventDate,
    eventTime,
  } = props;
  let rerout = (e) => {
    window.location = `https://joey-red.github.io/EventPlanner/#/view_event${postId}`;
  };
  return (
    <Container>
      <Card
        className="mb-3"
        id="singleCard"
        style={{ minHeight: "328px", maxHeight: "328px", zIndex: "99999" }}
      >
        <Card.Body>
          <Card.Title className="eventTitle">{eventTitle}</Card.Title>
          <Col>
            <Card.Text>{eventDescription}</Card.Text>
            <Card.Text>{eventDate}</Card.Text>
            <Card.Text>{eventTime}</Card.Text>
            <Row>
              <Card.Text>Hosted By: {eventCreator}</Card.Text>
            </Row>
            <Row>
              <Card.Text>Contact Email: {hostEmail}</Card.Text>
            </Row>
          </Col>
        </Card.Body>
        <Card.Body
          style={{
            marginBottom: "0",
            color: "#CBEAC0",
          }}
        >
          This event is open to the public!
        </Card.Body>
        <Button variant="dark" onClick={() => rerout()}>
          Check out this event
        </Button>
      </Card>
    </Container>
  );
}

export default EventPlaceholder;
