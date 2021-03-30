import { faBook, faCheck, faGifts } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute flex flex-row justify-center shadow-2xl lg:flex-col lg:inset-y-0 lg:left-0 bottom-0 h-12 w-screen lg:h-screen lg:w-64 lg:shadow-2xl lg:rounded-2xl bg-pink-200 lg:transition lg:ease-in-out lg:transform lg:hover:translate-x-3">
      <div className="relative flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-24 lg:pl-8 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <a className="relative hidden lg:contents lg:mx-auto" href="#">
          RSVP
        </a>
        <FontAwesomeIcon className="lg:mx-auto" icon={faCheck} />
      </div>
      <div className="relative flex items-center justify-center rounded-2xl lg:w-full w-8 lg:my-24 lg:pl-8 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <a className="hidden lg:contents lg:mx-auto" href="#">
          Registry
        </a>
        <FontAwesomeIcon className="my-auto lg:mx-auto" icon={faGifts} />
      </div>
      <div className="relative flex items-center justify-center lg:justify-evenly rounded-2xl lg:w-full lg:pl-8 w-8 lg:my-24 lg:h-12 mx-auto hover:bg-blue hover:text-pink-200">
        <a className="hidden lg:contents sm:mx-auto" href="#">
          Our Story
        </a>
        <FontAwesomeIcon className="my-auto lg:mx-auto" icon={faBook} />
      </div>
    </div>
  );
};

export default Navbar;
