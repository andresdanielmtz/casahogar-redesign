import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Linkedin from "./assets/icons/linkedin.png";
import Youtube from "./assets/icons/youtube.png";
import Mail from "./assets/icons/mail.png";
import Facebook from "./assets/icons/facebook.png";

import HowToHelp from "./how-to-help/how-to-help";
import AboutUs from "./donate/about-us";
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
              <img src={Facebook} alt="Facebook" id="header-facebook" />
              <img src={Linkedin} alt="Linkedin" id="header-linkedin" />
            </div>
            <nav>
              <ul>
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
                  <Link to="/contact" id = "header-contact"> CONTACTO </Link>
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
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/how-to-help" element={<HowToHelp />}></Route>
            <Route path="/about-us" element={<AboutUs />}>
              {" "}
            </Route>
            <Route path = "/contact" element = {<Contact />}></Route>
          </Routes>
        </body>
      </div>
    </Router>
  );
}

export default App;
