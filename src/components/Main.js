import React, { useState } from "react";
import RSVP from "./RSVP";
import Registry from "./Registry";
import About from "./About";
import Info from "./Info";

const Main = (props) => {
  return (
    <div className="absolute flex-col md:right-60 md:flex-row md:items-center md:top-0 my-auto h-full md:h-screen w-full md:py-24 bg-cyan-400 md:w-6/12">
      <div className="relative py-3 lg:min-w-xl lg:mx-auto">
        <div className="absolute inset-0 shadow-2xl transform bg-gradient-to-r from-blue to-green -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-pink-200 shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-semibold text-blue">
              {props.isRSVP && <RSVP />}
              {props.isInfo && <Info />}
              {props.isRegistry && <Registry />}
              {props.isAbout && <About />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
