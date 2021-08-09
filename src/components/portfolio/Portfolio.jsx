import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  programmingPortfolio,
  aeromodellingPortfolio,
  electronicsPortfolio,
  roboticsPortfolio,
  researchPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "aeromodelling",
      title: "Aeromodelling",
    },
    {
      id: "electronics",
      title: "Electronics",
    },
    {
      id: "robotics",
      title: "Robotics",
    },
    {
      id: "research",
      title: "Research",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "programming":
        setData(programmingPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "aeromodelling":
        setData(aeromodellingPortfolio);
        break;
      case "electronics":
        setData(electronicsPortfolio);
        break;
      case "robotics":
        setData(roboticsPortfolio);
        break;
      case "research":
        setData(researchPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
            <div className="item">

              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div></a>
        ))}
      </div>
    </div>
  );
}
