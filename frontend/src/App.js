import React from "react";
import PublicDashboard from "./components/PublicDashboard";
import Wave2 from "./components/TopWave";
import AttentionGetter from "./components/AttentionGetter";

function App() {
  return (
    <div className="appContainer">
      <AttentionGetter />
      <Wave2 />
      <PublicDashboard />
    </div>
  );
}

export default App;
