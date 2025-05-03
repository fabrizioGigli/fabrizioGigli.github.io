import React from "react";
import WorkInProgress from "./assets/work-in-progress.png";

import "./body.css";

const Body = () => {
  return (
    <div
      className="main"
    >
      <img
        src={WorkInProgress}
        className="Logo"
        alt="logo"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export { Body };
