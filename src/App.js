import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { faBook, faCheck, faGifts } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'

function App() {
  const [isRSVP, setIsRSVP] = useState(true);
  const [isRegistry, setIsRegistry] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const handleClick = (e) => {
    if (e.target.id === "rsvp") {
      setIsRSVP(true);
      setIsRegistry(false);
      setIsAbout(false);
    } else if (e.target.id === "registry") {
      setIsRSVP(false);
      setIsRegistry(true);
      setIsAbout(false);
    } else if (e.target.id === "about") {
      setIsRSVP(false);
      setIsRegistry(false);
      setIsAbout(true);
    }
    e.preventDefault()
  } 

  return (
    <div className="lg:flex flex-col h-screen w-screen font-sans">
      <div className="absolute flex flex-row justify-center text-blue font-bold bottom-0 h-12 w-screen lg:my-8 shadow-2xl lg:flex-col lg:inset-y-0 lg:left-0 lg:h-full lg:w-64 lg:shadow-2xl lg:rounded-2xl bg-pink-200 lg:transition lg:ease-in-out lg:transform lg:hover:translate-x-3">
      <div id="rsvp" onClick={handleClick} className="relative hover:animate-bounce hover:cursor-pointer lg:hover:animate-none flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-24 lg:pl-8 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <p className="relative hidden lg:contents lg:mx-auto" href="#">
          RSVP
        </p>
        <FontAwesomeIcon className="color-blue lg:mx-auto" icon={faCheck} />
      </div>
      <div id="registry" onClick={handleClick} className="relative hover:animate-bounce hover:cursor-pointer lg:hover:animate-none flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-24 lg:pl-8 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <p className="hidden lg:contents lg:mx-auto" href="#">
          Registry
        </p>
        <FontAwesomeIcon className="my-auto lg:mx-auto" icon={faGifts} />
      </div>
      <div id="about" onClick={handleClick} className="relative hover:animate-bounce lg:hover:animate-none hover:cursor-pointer flex items-center justify-center lg:justify-evenly rounded-2xl lg:w-full lg:pl-8 w-8 lg:my-24 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <p className="hidden lg:contents sm:mx-auto" href="#">
          Our Story
        </p>
        <FontAwesomeIcon className="color-blue my-auto lg:mx-auto" icon={faBook} />
      </div>
    </div>
      <Main isRSVP={isRSVP} isRegistry={isRegistry} isAbout={isAbout}/>
    </div>
  );
}

export default App;
