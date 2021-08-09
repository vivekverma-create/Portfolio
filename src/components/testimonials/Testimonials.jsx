import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom",
      title: "Senior Developer",
      img:
        "assets/tom.jpeg",
      icon: "assets/twitter.png",
      desc:
        "Writing.....",
    },
    {
      id: 2,
      name: "Alex",
      title: "Co-Founder XYZ",
      img:
        "assets/alex.jpeg",
      icon: "assets/youtube.png",
      desc:
        "Writing...... ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin",
      title: "CEO",
      img:
        "assets/martin.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "Writing...... ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
