import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">This is Left</a>
        </div>
        <h1>Hello</h1>
        <div className="right">This is Right</div>
      </div>
    </div>
  );
}
