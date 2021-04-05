import Main from "./components/Main";
import {
  faBook,
  faCheck,
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
    <div className="lg:flex flex-col h-screen w-screen font-sans">
      <div className="absolute my-8 flex text-xl text-blue font-bold bottom-0 h-12 w-screen shadow-2xl md:flex-col lg:inset-y-0 lg:left-0 lg:h-5/6 lg:w-64 lg:shadow-2xl lg:rounded-2xl bg-pink-200 lg:transition lg:ease-in-out lg:transform lg:hover:translate-x-3">
        <div
          id="rsvp"
          onClick={handleClick}
          className="relative hover:animate-bounce hover:cursor-pointer lg:hover:animate-none flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-auto lg:pl-12 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200"
        >
          <p className="relative hidden lg:contents lg:mx-auto" href="#">
            RSVP
          </p>
          <FontAwesomeIcon className="color-blue lg:mx-auto" icon={faCheck} />
        </div>
        <div
          id="info"
          onClick={handleClick}
          className="relative hover:animate-bounce hover:cursor-pointer lg:hover:animate-none flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-auto lg:pl-12 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200"
        >
          <a className="hidden lg:contents lg:mx-auto" href="#">
            Info
          </a>
          <FontAwesomeIcon className="my-auto lg:mx-auto" icon={faInfoCircle} />
        </div>
        <div
          id="registry"
          onClick={handleClick}
          className="relative hover:animate-bounce hover:cursor-pointer lg:hover:animate-none flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-auto lg:pl-12 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200"
        >
          <p className="hidden lg:contents lg:mx-auto" href="#">
            Registry
          </p>
          <FontAwesomeIcon className="my-auto lg:mx-auto" icon={faGifts} />
        </div>
        <div
          id="about"
          onClick={handleClick}
          className="relative hover:animate-bounce lg:hover:animate-none hover:cursor-pointer flex items-center justify-center lg:justify-evenly rounded-2xl lg:w-full lg:pl-12 w-8 lg:my-auto lg:h-12 mx-auto hover:bg-blue hover:text-pink-200"
        >
          <p className="hidden lg:contents sm:mx-auto" href="#">
            Our Story
          </p>
          <FontAwesomeIcon
            className="color-blue my-auto lg:mx-auto"
            icon={faBook}
          />
        </div>
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
