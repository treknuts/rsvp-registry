import Main from "./components/Main";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid min-vh-100 m-0 p-0">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span className="">Trevor & Victoria</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link id="rsvp" to="/rsvp" className="nav-link">
                  <span className="link-text">RSVP</span>
                  <span className="ps-1 text-warning">
                    <i className="fas fa-check"></i>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link id="info" to="/info" className="nav-link">
                  <span className="link-text">Info</span>
                  <span className="ps-1 text-warning">
                    <i className="fas fa-info-circle"></i>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link id="registry" to="/registry" className="nav-link">
                  <span className="link-text">Registry</span>
                  <span className="ps-1 text-warning">
                    <i className="fas fa-gifts"></i>
                  </span>
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <Main />
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
