import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { authUser } from "../features/authState";
import TopWave from "./TopWave";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
function CreateEvent() {
  let [eventTitle, setEventTitle] = useState("");
  let [eventDescription, setEventDescription] = useState("");
  let [emailRegistry, setEmailRegistry] = useState([]);
  let [eventAdmins, setEventAdmins] = useState([]);
  let [currEventAdmin, setCurrEventAdmin] = useState("");
  let [currEmail, setCurrEmail] = useState("");
  let [currFirstName, setCurrFirstname] = useState();
  let [currLastName, setCurrLastName] = useState();
  let [hostEmail, setHostEmail] = useState("");
  let [publicStatus, setPublicStatus] = useState(false);
  // const checkUser = localStorage.getItem("user");
  // const decodedUser = jwt_decode(checkUser);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const authState = useSelector((auth) => auth.authState.value);
  // Check log in, if bad, send home
  useEffect(
    (res) => {
      const checkUser = localStorage.getItem("user");
      Axios.post(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${checkUser}`
      )
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            console.log("triggered1");
            const decodedUser = jwt_decode(checkUser);
            dispatch(login(decodedUser));
            dispatch(authUser(true));
            setCurrFirstname(decodedUser.given_name);
            setCurrLastName(decodedUser.family_name);
            setHostEmail(decodedUser.email);
          } else {
            console.log("triggered");
            dispatch(authUser(false));
            window.location.href = "http://localhost:3001/";
          }
        })
        .catch(function (error) {
          dispatch(authUser(false));
          window.location.href = "http://localhost:3001/";
        });
    },
    [authState, dispatch]
  );
  function addToList(e) {
    eventAdmins.push(currEventAdmin);
    setCurrEventAdmin("");
  }
  function addToEmailList(e) {
    emailRegistry.push(currEmail);
    setCurrEmail("");
  }
  const handleChange = (e) => {
    setPublicStatus(e.target.checked);
    console.log(publicStatus);
  };
  function postEvent(e) {
    if (e.error) {
      console.log("Error :)");
    } else {
      Axios.post("http://localhost:8080/create-event", {
        eventTitle: eventTitle,
        eventDescription: eventDescription,
        eventCreator: `${currFirstName} ${currLastName}`,
        emailRegistry: emailRegistry,
        eventAdmins: eventAdmins,
        eventUpdatePosts: [],
        hostEmail: hostEmail,
        publicStatus: publicStatus,
      }).then((res) => {
        console.log(res);
      });
    }
    setEventAdmins([]);
    setEmailRegistry([]);
    setEventDescription("");
    setEventTitle("");
  }

  return (
    <div className="ceFullContainer">
      <TopWave />
      <Container>
        <Container>
          <div style={{ marginTop: "255px" }}>
            <h1 className="ceHeader">Create Event</h1>
            <Form className="ceFormContainer">
              <Card className="mb-4">
                <Card.Body>
                  <Row className="mb-1">
                    <Card.Text>Watch how easy this is ..</Card.Text>
                  </Row>
                  <InputGroup>
                    <Col>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          What is this event?
                        </InputGroup.Text>
                        <Form.Control
                          id="eventTitle"
                          type="text"
                          placeholder="Jennifers 8th birthday party!"
                          onChange={(e) => {
                            setEventTitle(e.target.value);
                          }}
                          value={eventTitle}
                        ></Form.Control>
                      </Row>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          What's the plan?
                        </InputGroup.Text>
                        <Form.Control
                          as="textarea"
                          id="eventDescription"
                          type="text"
                          placeholder="Come to my birthday party at the park and have some cake!"
                          onChange={(e) => {
                            setEventDescription(e.target.value);
                          }}
                          value={eventDescription}
                          maxLength="10000"
                        ></Form.Control>
                      </Row>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          When?
                        </InputGroup.Text>
                        <input type="date" name="eventDate" id="eventDate" />
                      </Row>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          Add the emails of anyone you would like to let make
                          changes to your event, such as update posts.
                        </InputGroup.Text>
                        <Form.Control
                          className="mb-1"
                          type="email"
                          id="currEventAdmin"
                          value={currEventAdmin}
                          placeholder="admin@email.com"
                          onChange={(e) => {
                            setCurrEventAdmin(e.target.value);
                          }}
                        ></Form.Control>
                        <Button
                          variant="dark"
                          onClick={(e) => addToList(e.preventDefault())}
                        >
                          Add Admin
                        </Button>
                        {eventAdmins.map((admin) => {
                          return (
                            <div className="admin" key={uuidv4()}>
                              {admin}
                            </div>
                          );
                        })}
                      </Row>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          Who is invited? Add their email, so we can send this
                          invite to them!
                        </InputGroup.Text>
                        <Form.Control
                          className="mb-1"
                          id="currEmail"
                          type="email"
                          value={currEmail}
                          placeholder="john@doe.com"
                          onChange={(e) => {
                            setCurrEmail(e.target.value);
                          }}
                        ></Form.Control>
                        {eventAdmins.map((admin) => {
                          return (
                            <div className="admin" key={uuidv4()}>
                              {admin}
                            </div>
                          );
                        })}
                        <Button
                          variant="dark"
                          onClick={(e) => addToEmailList(e.preventDefault())}
                        >
                          Add Email
                        </Button>
                        {emailRegistry.map((email) => {
                          return (
                            <div className="admin" key={uuidv4()}>
                              {email}
                            </div>
                          );
                        })}
                      </Row>
                      <Row className="mb-1">
                        <Form>
                          <div key={`default-checkbox`} className="mb-1">
                            <Form.Check
                              type="checkbox"
                              id={`default-checkbox`}
                              label={`Is this event open to the Public?`}
                              className="checkbox"
                              checked={publicStatus}
                              onChange={handleChange}
                            />
                          </div>
                        </Form>
                      </Row>
                      <Button variant="dark" onClick={(e) => postEvent(e)}>
                        Thats it!
                      </Button>
                    </Col>
                  </InputGroup>
                </Card.Body>
              </Card>
            </Form>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default CreateEvent;
