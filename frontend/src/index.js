import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import userReducer from "./features/user";
import FrontRouter from "./FrontRouter";
import authReducer from "./features/authState";
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
      {/* <App /> */}
      <BrowserRouter>
        <FrontRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
