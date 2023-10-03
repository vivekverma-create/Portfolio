import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Awards from "./components/awards/Awards"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Parents from "./components/Parents/Parents"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";




function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Router>
        <Switch>
          <Route path="/">
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
              <Intro />
              <Portfolio />
              <Awards />
              {/* <Testimonials/> */}
              <Contact />
            </div>
          </Route>

          <Route path="/contact">
          <div className="sections">
            <Contact />
            </div>
          </Route>

          <Route path="/testimonial">
          <div className="sections">
            <Testimonials />
            </div>
          </Route>

          {/* <Route path="/Abitha">
          <div className="sections">
            < Abitha/>
            </div>
          </Route> */}

          
          <Route path="/Parents">
          <div className="sections">
            < Parents/>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
