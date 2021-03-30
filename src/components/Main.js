import React, { useState } from "react";
import RSVP from "./RSVP";

const Main = () => {
  const [isRSVP, setIsRSVP] = useState(true);
  const [isRegistry, setIsRegistry] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  return (
    <div className="min-h-screen w-full py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 lg:min-w-xl lg:mx-auto">
        <div className="absolute inset-0 shadow-2xl transform bg-gradient-to-r from-blue to-green -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-pink-200 shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-semibold text-blue">
              {isRSVP && <RSVP />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
