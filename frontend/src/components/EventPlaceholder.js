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
        style={{ maxHeight: "234px", minHeight: "282px", zIndex: "99999" }}
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
        <Card.Body
          style={{
            marginBottom: "0",
            // color: "#5F7358",
            color: "#CBEAC0",
            // textTransform: "uppercase",
            // "#636464"
          }}
        >
          This event is open to the public!
        </Card.Body>
        <Button variant="dark">Check out this event</Button>
      </Card>
    </Container>
  );
}

export default EventPlaceholder;
