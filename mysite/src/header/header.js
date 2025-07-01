import React from "react";
import ProgImg from "./assets/programmer.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", padding: "2%" }}>
        <img
          src={ProgImg}
          className="Logo"
          alt="logo"
          style={{ marginLeft: "5%", width: "25%" }}
        />
        <span className="headSpan">
          <div className="headTitle">
            <p>Fabrizio Gigli</p>
          </div>
          <div className="headSubtitle">
            <p>Artista - Sviluppatore</p>
          </div>
        </span>
      </div>
      <div className="headButtonContainer">
        <div className="headButton">Portfolio</div>
        <div className="headButton">Pirografia</div>
      </div>
    </div>
  );
};

export { Header };
