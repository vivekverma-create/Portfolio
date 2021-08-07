import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Vivek.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+61481152128">+61 481 152 128</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:vivekverma326@gmail.com">vivekverma326@gmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
