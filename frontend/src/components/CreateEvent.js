import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { authUser } from "../features/authState";
function CreateEvent() {
  let [eventTitle, setEventTitle] = useState("");
  let [eventDescription, setEventDescription] = useState("");
  let [emailRegistry, setEmailRegistry] = useState([]);
  let [eventAdmins, setEventAdmins] = useState([]);
  let [currEventAdmin, setCurrEventAdmin] = useState("");
  let [currEmail, setCurrEmail] = useState("");
  let [currFirstName, setCurrFirstname] = useState();
  let [currLastName, setCurrLastName] = useState();
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
          const decodedUser = jwt_decode(checkUser);
          dispatch(login(decodedUser));
          dispatch(authUser(true));
          console.log(decodedUser);
          setCurrFirstname(decodedUser.given_name);
          setCurrLastName(decodedUser.family_name);
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
      }).then((res) => {
        console.log(res);
      });
    }
  }

  return (
    <div>
      CreateEvent
      <div>
        <input
          id="eventTitle"
          type="text"
          placeholder="Birthday Bash!"
          onChange={(e) => {
            setEventTitle(e.target.value);
          }}
        />
        <input
          id="eventDescription"
          type="text"
          placeholder="Come to my birthday party and have some cake!"
          onChange={(e) => {
            setEventDescription(e.target.value);
          }}
        />
        <form action="">
          <label htmlFor="currEventAdmin">
            Add the names of your administrators, this will allow them to make
            update posts on your event page.
          </label>
          <input
            id="currEventAdmin"
            type="text"
            value={currEventAdmin}
            placeholder="admin@gmail.com"
            onChange={(e) => {
              setCurrEventAdmin(e.target.value);
            }}
          />
          <button onClick={(e) => addToList(e.preventDefault())}>
            Add Admin
          </button>
          {eventAdmins.map((admin) => {
            return (
              <div className="admin" key={uuidv4()}>
                {admin}
              </div>
            );
          })}
        </form>
        <form action="">
          <label htmlFor="currEmailRegistry">Add emails here</label>
          <input
            id="currEmail"
            type="text"
            value={currEmail}
            placeholder="admin@gmail.com"
            onChange={(e) => {
              setCurrEmail(e.target.value);
            }}
          />
          <button onClick={(e) => addToEmailList(e.preventDefault())}>
            Add Email
          </button>
          {emailRegistry.map((email) => {
            return (
              <div className="admin" key={uuidv4()}>
                {email}
              </div>
            );
          })}
        </form>
        <button onClick={(e) => postEvent(e)}>test</button>
      </div>
    </div>
  );
}

export default CreateEvent;
