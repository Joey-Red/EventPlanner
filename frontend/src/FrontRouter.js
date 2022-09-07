import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CreateEvent from "./components/CreateEvent";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
function FrontRouter() {
  return (
    <div className="routes">
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/create_event" element={<CreateEvent />} />
      </Routes>
      <CustomFooter />
    </div>
  );
}

export default FrontRouter;
