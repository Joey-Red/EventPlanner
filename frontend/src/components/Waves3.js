import React from "react";
function Waves() {
  return (
    <div
      style={{
        position: "fixed",
        top: "56px",
        left: "0",
        right: "0",
        zIndex: "99999",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#edf2f4"
          fill-opacity="1"
          d="M0,64L60,106.7C120,149,240,235,360,224C480,213,600,107,720,58.7C840,11,960,21,1080,26.7C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Waves;
