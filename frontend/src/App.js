import React, { useState, useEffect } from "react";
import PublicDashboard from "./components/PublicDashboard";
import CustomNavbar from "./components/CustomNavbar";
import Wave2 from "./components/TopWave";
import AttentionGetter from "./components/AttentionGetter";
import MidWave from "./components/MidWave.js";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div>
      <AttentionGetter />
      <Wave2 />
      <PublicDashboard />
      {/* <CustomFooter /> */}
    </div>
  );
}

export default App;
