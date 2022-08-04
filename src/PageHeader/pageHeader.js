import React from "react";
import "./pageHeader.css";
import sfcity from "../images/sfcity.png";

function PageHeader() {
  return (
    <div className="header">
      <div>
        <img src={sfcity} alt="San Francisco Seal" />
      </div>
    </div>
  );
}

export default PageHeader;
