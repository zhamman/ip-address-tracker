import React from "react";
import "./Info.scss";

const Info = info => {
  // console.log(info)
  return (
    <div className="container">
      <div className="section">
        <div className="header">IP ADDRESS</div>
        <div className="text">{info.ip}</div>
      </div>
      <div className="section">
        <div className="header">LOCATION</div>
        <div className="text">{info.location}</div>
      </div>

      <div className="section">
        <div className="header">TIME ZONE</div>
        <div className="text">{info.timezone}</div>
      </div>
      <div className="section">
        <div className="header">ISP</div>
        <div className="text last">{info.isp}</div>
      </div>
    </div>
  );
};

export default Info;
<div></div>;
