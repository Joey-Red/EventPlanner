import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { authUser } from "../features/authState";

function LogIn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const authState = useSelector((auth) => auth.authState.value);
  useEffect(() => {
    /* global google */
    if (google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDivFooter"),
        {
          type: "button",
          text: "signinwithgoogle",
          size: "medium",
        }
      );
    }
  }, []);

  function handleCallbackResponse(response) {
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
      Axios.post("https://eventplanner-api.herokuapp.com/log-in", {
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
          document.getElementById("signInDivFooter").hidden = true;
        } else {
          dispatch(authUser(false));
          console.log(authState);
        }
      });
    },
    [authState, dispatch]
  );

  return (
    <>
      <div id="signInDivFooter" style={{ marginTop: "-3px" }}></div>
      {authState === true ? (
        <>
          <div
            className="signOutLink"
            onClick={(e) => handleSignOut(e)}
            style={{ color: "#ffffff", textDecoration: "underline" }}
          >
            Sign Out
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default LogIn;
