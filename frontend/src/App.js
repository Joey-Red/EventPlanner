import React, { useState, useEffect } from "react";
import PublicDashboard from "./components/PublicDashboard";
import CustomNavbar from "./components/CustomNavbar";
import Waves from "./components/Waves";
import Wave2 from "./components/Waves2";
import AttentionGetter from "./components/AttentionGetter";
import AttentionSecond from "./components/AttentionSecond.js";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div>
      <CustomNavbar />
      <AttentionGetter />
      <AttentionSecond />
      <Wave2 />
      <PublicDashboard />
      <CustomFooter />
    </div>
  );
}

export default App;
