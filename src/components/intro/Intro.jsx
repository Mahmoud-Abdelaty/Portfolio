import React from "react";
import "./intro.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
  const [typeEffect] = useTypewriter({
    words: ["Mobile Developer .", "React js Developer ."],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 90,
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mahmoud Abdelaty</h1>
          <h3>
            I'm a <span>{typeEffect}</span>
            <span>
              <Cursor />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
