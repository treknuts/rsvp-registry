import Main from "./components/Main";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-scroll">
      <BrowserRouter>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link id="rsvp" to="/rsvp" className="nav-link">
                <span className="icon">
                  <i class="fas fa-check"></i>
                </span>
                <span className="link-text">RSVP</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id="info" to="/info" className="nav-link">
                <span className="icon">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span className="link-text">Info</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id="registry" to="/registry" className="nav-link">
                <span className="icon">
                  <i class="fas fa-gifts"></i>
                </span>
                <span className="link-text">Registry</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id="about" to="/about" className="nav-link">
                <span className="icon">
                  <i class="fas fa-book"></i>
                </span>
                <span className="link-text">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
