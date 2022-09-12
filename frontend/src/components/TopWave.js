import React from "react";
function Waves() {
  return (
    <div
      style={{
        position: "fixed",
        top: "90px",
        left: "0",
        right: "0",
        zIndex: "99997",
        pointerEvents: "none",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#212529"
          fillOpacity="1"
          d="M0,64L80,64C160,64,320,64,480,74.7C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Waves;
