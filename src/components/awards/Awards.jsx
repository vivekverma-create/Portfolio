import { useState } from "react";
import "./awards.scss";

export default function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "8",
      icon: "./assets/globe.png",
      title: "Insta Award - 4",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/insta%20award%204.png",
    },
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Insta Award - 3",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/insta%20award%203.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Insta Award - 2",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/insta%20award%202.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Team Award",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/Team%20Award.jpg",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Insta Award - 1",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/InstaAward.png",
    },
    {
      id: "5",
      icon: "./assets/mobile.png",
      title: "Gov Hack 2021",
      desc:
        " ",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/GovHack2021.jpg",
    },
    {
      id: "6",
      icon: "./assets/writing.png",
      title: "Certificate",
      desc:
        "New Relic Programmability",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/New_Relic_Programmability.jpg",
    },
    {
      id: "7",
      icon: "./assets/writing.png",
      title: "Certificate",
      desc:
        "New Relic Observability",
      img:
        "https://raw.githubusercontent.com/vivekverma-create/images/main/New_Relic_Fullstack.jpg",
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="awards" id="awards">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://raw.githubusercontent.com/vivekverma-create/images/main/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://raw.githubusercontent.com/vivekverma-create/images/main/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
