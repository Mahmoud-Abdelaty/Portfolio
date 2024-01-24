import React from "react";
import "./topbar.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen ? "active" : null}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mahmoud
          </a>
          <div className="itemContainer">
            <PersonRoundedIcon className="icon" />
            <span>01126113863</span>
          </div>
          <div className="itemContainer">
            <EmailRoundedIcon className="icon" />
            <span>mahmoudabdelaty2002@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
