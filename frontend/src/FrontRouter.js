import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CreateEvent from "./components/CreateEvent";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
import ViewAllEvents from "./components/ViewAllEvents";
import ViewEvent from "./components/ViewEvent";
function FrontRouter() {
  return (
    <div className="routes">
      <CustomNavbar />
      <Routes>
        <Route
          exact
          path="https://joey-red.github.io/EventPlanner/"
          element={<App />}
        />
        <Route
          path="https://joey-red.github.io/EventPlanner/create_event"
          element={<CreateEvent />}
        />
        <Route
          path="https://joey-red.github.io/EventPlanner/view_all_events"
          element={<ViewAllEvents />}
        />
        <Route
          path="https://joey-red.github.io/EventPlanner/view_event/:id"
          element={<ViewEvent />}
        />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default FrontRouter;
