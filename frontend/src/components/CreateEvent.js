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
  Card,
  Form,
  Container,
  Row,
  Col,
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
  let [alert, setAlert] = useState(false);
  let [eventTime, setEventTime] = useState("");
  let [eventDate, setEventDate] = useState("");

  // Field Validation States
  let [titleValid, setTitleValid] = useState(false);
  let [planValid, setPlanValid] = useState(false);
  let [dateValid, setDateValid] = useState(false);
  let [timeValid, setTimeValid] = useState(false);
  let [disableSubmit, setDisableSubmit] = useState(true);

  let [todaysDate, setTodaysDate] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const authState = useSelector((auth) => auth.authState.value);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = yyyy + "-" + mm + "-" + dd;

    setTodaysDate(formattedToday);
    if (eventTitle.length > 0) {
      setTitleValid(true);
    } else if (eventTitle.length <= 0) {
      setTitleValid(false);
    }
    if (eventDescription.length > 0) {
      setPlanValid(true);
    } else if (eventDescription.length <= 0) {
      setPlanValid(false);
    }
    if (eventTime.length > 0) {
      setTimeValid(true);
    } else if (eventTime.length <= 0) {
      setTimeValid(false);
    }

    if (eventDate.length > 0 && formattedToday < eventDate) {
      setDateValid(true);
    } else if (eventDate.length <= 0 || formattedToday > eventDate) {
      setDateValid(false);
    }
    if (
      titleValid === true &&
      planValid === true &&
      dateValid === true &&
      timeValid === true
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [
    dateValid,
    planValid,
    timeValid,
    eventTitle,
    eventTime,
    eventDate,
    eventDescription,
    titleValid,
  ]);

  // Check log in, if bad, send home
  useEffect(
    (res) => {
      const checkUser = localStorage.getItem("user");
      Axios.post(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${checkUser}`
      )
        .then(function (response) {
          if (response.status === 200) {
            const decodedUser = jwt_decode(checkUser);
            dispatch(login(decodedUser));
            dispatch(authUser(true));
            setCurrFirstname(decodedUser.given_name);
            setCurrLastName(decodedUser.family_name);
            setHostEmail(decodedUser.email);
          } else {
            // console.log("triggered");
            dispatch(authUser(false));
            window.location.href = "https://joey-red.github.io/EventPlanner/";
          }
        })
        .catch(function (error) {
          dispatch(authUser(false));
          window.location.href = "https://joey-red.github.io/EventPlanner/";
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
    setAlert(e.target.checked);
  };
  function postEvent(e) {
    if (e.error) {
      console.log("Error :)");
    } else {
      Axios.post("https://eventplanner-api.herokuapp.com/create-event", {
        eventTitle: eventTitle,
        eventDescription: eventDescription,
        eventCreator: `${currFirstName} ${currLastName}`,
        emailRegistry: emailRegistry,
        eventAdmins: eventAdmins,
        eventUpdatePosts: [],
        hostEmail: hostEmail,
        publicStatus: publicStatus,
        eventDate: eventDate,
        eventTime: eventTime,
      }).then((res) => {
        let id = res.data._id;
        window.location =
          "https://joey-red.github.io/EventPlanner/#/view_event/" + id;
      });
    }
    setEventAdmins([]);
    setEmailRegistry([]);
    setEventDescription("");
    setEventTitle("");
  }

  return (
    <div className="ceFullContainer">
      <div className="ceBgImg"></div>
      <TopWave />
      <Container>
        <Container>
          <div
            style={{
              paddingTop: "255px",
              paddingBottom: "209px",
            }}
          >
            <h1 className="ceHeader">Create Event</h1>
            <Form className="ceFormContainer">
              <Card
                style={{
                  background: "none",
                  border: "solid #eb8276 1px",
                }}
              >
                <Card.Body className="ceCardBody" style={{ padding: "30px" }}>
                  <Row className="mb-1">
                    <Card.Text className="ceInsideHeader">
                      Watch how easy this is ..
                    </Card.Text>
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
                        <input
                          className="mb-1"
                          type="date"
                          name="eventDate"
                          id="eventDate"
                          style={{
                            borderRadius: "0.375rem",
                            border: "none",
                            padding: "6px 12px",
                          }}
                          onChange={(e) => setEventDate(e.target.value)}
                        />
                        <Form.Control
                          id="timeInput"
                          type="text"
                          placeholder="8pm"
                          onChange={(e) => {
                            setEventTime(e.target.value);
                          }}
                          value={eventTime}
                        ></Form.Control>
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
                          style={{ border: "solid #eb8276 1px" }}
                          onClick={(e) => addToList(e.preventDefault())}
                        >
                          Add Admin
                        </Button>
                        <Container
                          className="adminContainer"
                          style={{ borderRadius: "0.375rem" }}
                        >
                          <Row>
                            {eventAdmins.map((admin) => {
                              return (
                                <div
                                  style={{ maxWidth: "fit-content" }}
                                  className="admin"
                                  key={uuidv4()}
                                >
                                  {admin}
                                </div>
                              );
                            })}
                          </Row>
                        </Container>
                      </Row>
                      <Row className="mb-1">
                        <InputGroup.Text className="mb-1">
                          Who is invited? Add their email, so we can send this
                          invite to them! You will also get a link to share
                          manually.
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
                        <Button
                          className="mb-1"
                          style={{ border: "solid #eb8276 1px" }}
                          variant="dark"
                          onClick={(e) => addToEmailList(e.preventDefault())}
                        >
                          Add Email
                        </Button>
                        <Container
                          className="adminContainer mb-1"
                          style={{ borderRadius: "0.375rem" }}
                        >
                          <Row>
                            {emailRegistry.map((email) => {
                              return (
                                <div
                                  className="admin"
                                  key={uuidv4()}
                                  style={{ maxWidth: "fit-content" }}
                                >
                                  {email}
                                </div>
                              );
                            })}
                          </Row>
                        </Container>
                      </Row>
                      <Row className="mb-1">
                        <div>
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
                        </div>
                      </Row>
                      <Row>
                        {alert ? (
                          <Alert variant="warning">
                            Checking this box allows anyone to view the details
                            of this event.
                          </Alert>
                        ) : (
                          <></>
                        )}
                      </Row>
                      <Row>
                        <Button
                          variant="dark"
                          onClick={(e) => postEvent(e)}
                          id="submitButton"
                          disabled={disableSubmit}
                        >
                          Thats it!
                        </Button>
                      </Row>
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
