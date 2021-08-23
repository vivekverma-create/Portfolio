import "./Abitha.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Abitha() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["You are amazing","Stay Home, Stay Safe", "Get Vaccinated","Women in STEM"],
    });
  }, []);

  return (
    <div className="abitha" id="Abitha">
      <div className="left">
          <img src="https://www2.deloitte.com/content/dam/Deloitte/au/Images/promo_images/au-profiles/au-abitha-maniyan2-1x1.jpg/_jcr_content/renditions/cq5dam.web.231.231.desktop.jpeg" alt="" />

      </div>
      <div className="right">
        <div className="wrapper">
        <h1>Abitha,</h1>
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
