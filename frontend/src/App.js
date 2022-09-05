import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/user";
import { authUser } from "./features/authState";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const authState = useSelector((auth) => auth.authState.value);
  // console.log(user);

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID Token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    dispatch(login(userObject));
    dispatch(authUser(true));
    document.getElementById("signInDiv").hidden = true;
    // for persistence
    localStorage.setItem("user", response.credential);

    // Backend Part
    if (response.error) {
      console.log("Error :)");
    } else {
      Axios.post("http://localhost:8080/log-in", {
        firstName: userObject.given_name,
        lastName: userObject.family_name,
        email: userObject.email,
      }).then((res) => {
        console.log(res);
      });
    }
  }

  function handleSignOut(e) {
    document.getElementById("signInDiv").hidden = false;
    dispatch(logout({}));
    dispatch(authUser(false));
    localStorage.removeItem("user");
  }

  useEffect(
    (response) => {
      const checkUser = localStorage.getItem("user");
      Axios.post(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${checkUser}`,
        {}
      ).then((res) => {
        if (res.status === 200) {
          const decodedUser = jwt_decode(checkUser);
          dispatch(login(decodedUser));
          dispatch(authUser(true));
          document.getElementById("signInDiv").hidden = true;
        } else {
          dispatch(authUser(false));
          console.log(authState);
        }
      });
    },
    [authState, dispatch]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // if (authUser !== true) {
    google.accounts.id.prompt();
    // }
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>

      {authState === true ? (
        <>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>{" "}
          {/* <img src={user.picture} alt="User profile img" /> */}
          <h3>{user.name}</h3>
          <div className="testAPICalls">
            <button onClick={() => navigate("/create_event")}>
              Create event!
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
