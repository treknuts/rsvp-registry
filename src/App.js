import Main from "./components/Main";
import {
  faCheck,
  faBook,
  faGifts,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isRSVP, setIsRSVP] = useState(true);
  const [isRegistry, setIsRegistry] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isInfo, setIsInfo] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === "rsvp") {
      setIsRSVP(true);
      setIsInfo(false);
      setIsRegistry(false);
      setIsAbout(false);
    } else if (e.target.id === "registry") {
      setIsRSVP(false);
      setIsInfo(false);
      setIsRegistry(true);
      setIsAbout(false);
    } else if (e.target.id === "about") {
      setIsRSVP(false);
      setIsInfo(false);
      setIsRegistry(false);
      setIsAbout(true);
    } else if (e.target.id === "info") {
      setIsRSVP(false);
      setIsInfo(true);
      setIsRegistry(false);
      setIsAbout(false);
    }
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-scroll">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="rsvp" onClick={handleClick} href="#" className="nav-link">
              <span className="icon">
                <i class="fas fa-check"></i>
              </span>
              <span className="link-text">RSVP</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="info" onClick={handleClick} href="#" className="nav-link">
              <span className="icon">
                <i class="fas fa-info-circle"></i>
              </span>
              <span className="link-text">Info</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="registry"
              onClick={handleClick}
              href="#"
              className="nav-link"
            >
              <span className="icon">
                <i class="fas fa-gifts"></i>
              </span>
              <span className="link-text">Registry</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="about" onClick={handleClick} href="#" className="nav-link">
              <span className="icon">
                <i class="fas fa-book"></i>
              </span>
              <span className="link-text">About</span>
            </a>
          </li>
        </ul>
      </div>
      <Main
        isRSVP={isRSVP}
        isInfo={isInfo}
        isRegistry={isRegistry}
        isAbout={isAbout}
      />
    </div>
  );
}

export default App;
