import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";

import Youtube from "./assets/icons/youtube.png";
import Mail from "./assets/icons/mail.png";

import HowToHelp from "./how-to-help/how-to-help";
import AboutUs from "./about-us/about-us";
import Contact from "./contact/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div id="header-elements">
            <div id="header-advise">
              {" "}
              <i>
                Casa Esperanza para Niños es una fundación 501C3, todas las
                donaciones son deducibles a impuestos.
              </i>
            </div>
            <div id="header-socialmedia">
              <img src={Mail} alt="Mail" id="header-mail" />
              <img src={Youtube} alt="Youtube" id="header-youtube" />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
                id="header-facebook"
                alt="header-facebook"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                id="header-linkedin"
                alt="header-linkedin"
              />
            </div>

            <div className="navigation-list">
              <nav>
                <ul>
                  <li>
                    <Link to = "/">
                      {window.location.pathname === "/about-us" ? ":D": "D:"}
                      {console.log(window.location.pathnames)}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">
                      {" "}
                      SOBRE <br />
                      NOSOTROS{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-to-help">
                      {" "}
                      COMO PUEDES <br /> AYUDAR{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" id="header-contact">
                      {" "}
                      CONTACTO{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" id="header-donation">
                      {" "}
                      DONAR{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/how-to-help" element={<HowToHelp />}></Route>
            <Route path="/about-us" element={<AboutUs />}>
              {" "}
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
