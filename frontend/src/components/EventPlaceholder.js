import React from "react";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
function EventPlaceholder(props) {
  let {
    emailRegistry,
    eventAdmins,
    eventDescription,
    dateCreated,
    eventTitle,
    eventCreator,
    hostEmail,
    eventUpdatePosts,
    loaded,
  } = props;
  return (
    <Container>
      <Card
        className="mb-3"
        id="singleCard"
        style={{ maxHeight: "234px", minHeight: "282px" }}
      >
        <Card.Body>
          <Card.Title className="eventTitle">{eventTitle}</Card.Title>
          <Col>
            <Row>
              <Card.Text>{eventDescription}</Card.Text>
            </Row>
            {eventAdmins.length > 0 ? (
              <Row>
                <Card.Text>Event Admin(s): {eventAdmins}</Card.Text>
              </Row>
            ) : (
              <></>
            )}
            <Row>
              <Card.Text>Hosted By: {eventCreator}</Card.Text>
            </Row>
            <Row>
              <Card.Text>Contact Email: {hostEmail}</Card.Text>
            </Row>
          </Col>
        </Card.Body>
        <Alert variant="light" style={{ marginBottom: "0" }}>
          This event is open to the public!
        </Alert>
        <Button variant="dark">Check out this event</Button>
      </Card>
    </Container>
  );
}

export default EventPlaceholder;
