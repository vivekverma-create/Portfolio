import "./Parents.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Parents() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["You are amazing","You are the best"],
    });
  }, []);

  return (
    <div className="parents" id="parents">
      <div className="left">
          <img src="assets/MomandDad.jpg"/>

      </div>
      <div className="right">
        <div className="wrapper">
        <h1>Mom and Dad,</h1>
          <h2>Be strong now, </h2><h2>because things will get better.</h2>
          <h2>It might be stormy now,</h2><h2> but it can't rain forever.</h2>
          
          <br></br>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
