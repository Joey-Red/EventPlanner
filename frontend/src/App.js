import React, { useState, useEffect } from "react";
import PublicDashboard from "./components/PublicDashboard";
import CustomNavbar from "./components/CustomNavbar";
import Wave2 from "./components/TopWave";
import AttentionGetter from "./components/AttentionGetter";
import MidWave from "./components/MidWave.js";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div
      className="appContainer"
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // width: "100%",
          // left: "0",
          // right: "0",
          // backgroundSize: "cover",
          // minWidth: "100vw",
          // width: "100vw",
          // position: "relative",
        }
      }
    >
      <AttentionGetter />
      <Wave2 />
      <PublicDashboard />
    </div>
  );
}

export default App;
