import Main from "./components/Main";
import {
  faCheck,
  faBook,
  faGifts,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

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
      <div className="bg-pink-200 text-blue font-semibold rounded-2xl fixed flex bottom-0 h-12 w-screen md:h-26 justify-center bg-cyan-400 lg:flex-col lg:justify-evenly lg:left-0 lg:h-screen lg:w-48 z-10">
        <ul className="flex justify-center md:justify-center items-center md:flex-col">
          <li
            id="rsvp"
            onClick={handleClick}
            className="flex md:pl-8 p-3 font-bold rounded-full md:rounded-lg w-full cursor-pointer mx-4 md:my-12 hover:bg-blue hover:text-pink-200 items-center focus:outline-black"
          >
            <span className="hidden md:contents">RSVP</span>
            <FontAwesomeIcon
              id="rsvp"
              onClick={handleClick}
              className="color-blue lg:mx-auto"
              icon={faCheck}
              pull="left"
            />
          </li>
          <li
            id="info"
            onClick={handleClick}
            className="flex md:pl-8 p-3 font-bold rounded-full md:rounded-lg w-full cursor-pointer mx-4 md:my-12 hover:bg-blue hover:text-pink-200 focus:outline-none"
          >
            <span className="hidden md:contents">Info</span>
            <FontAwesomeIcon
              id="info"
              onClick={handleClick}
              className="my-auto lg:mx-auto"
              icon={faInfoCircle}
              pull="left"
            />
          </li>
          <li
            id="registry"
            onClick={handleClick}
            className="flex md:pl-8 p-3 font-bold rounded-full md:rounded-lg w-full cursor-pointer mx-4 md:my-12 hover:bg-blue hover:text-pink-200 focus:outline-none"
          >
            <span className="hidden md:contents">Registry</span>
            <FontAwesomeIcon
              id="registry"
              onClick={handleClick}
              className="my-auto lg:mx-auto"
              icon={faGifts}
              pull="left"
            />
          </li>
          <li
            id="about"
            onClick={handleClick}
            className="flex md:pl-8 p-3 font-bold rounded-full md:rounded-lg w-full cursor-pointer mx-4 md:my-12 hover:bg-blue hover:text-pink-200 focus:outline-none"
          >
            <span className="hidden md:contents">Our Story</span>
            <FontAwesomeIcon
              id="about"
              className="color-blue my-auto lg:mx-auto"
              onClick={handleClick}
              pull="left"
              icon={faBook}
            />
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
