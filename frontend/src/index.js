import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import userReducer from "./features/user";
import FrontRouter from "./FrontRouter";
import authReducer from "./features/authState";
import "./styles/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* global google */

const store = configureStore({
  reducer: {
    user: userReducer,
    authState: authReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*  basename="/EventPlanner/" */}
      <HashRouter>
        <FrontRouter basename="https://joey-red.github.io/EventPlanner/" />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
