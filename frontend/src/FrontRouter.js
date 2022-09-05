import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CreateEvent from "./components/CreateEvent";

function FrontRouter() {
  return (
    <div className="Routes">
      <>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/create_event" element={<CreateEvent />} />
        </Routes>
      </>
    </div>
  );
}

export default FrontRouter;
