import { useState, useEffect } from "react";
import "./awards.scss";

const Awards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/vivekverma-create/assets/contents/awards.json"
        );
        const jsonData = await response.json();
        const content = atob(jsonData.content);
        const parsedData = JSON.parse(content);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : data.length - 1))
      : setCurrentSlide((prevSlide) => (prevSlide < data.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <div className="awards" id="awards">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
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
};

export default Awards;
