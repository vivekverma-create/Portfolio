import "./topbar.scss";
import { Call, Mail, LinkedIn} from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/Portfolio" className="logo">
            Vivek.
          </a>
          <div className="itemContainer">
            <a href="tel:+61481152128">
              <Call className="icon" />
              <span>+61 481 152 128</span></a>
          </div>
          <div className="itemContainer">
            <a href="mailto:vivekverma326@gmail.com">
              <Mail className="icon" />
              <span>vivekverma326@gmail.com</span></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/vivek-au/">
              <LinkedIn className="icon" />
              <span>in/vivek-au</span></a>
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
