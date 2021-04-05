import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="bg-pink-200 text-center h-full w-full">
      <p className="text-3xl mb-4 w-full font-semibold">When & Where!</p>
      <div className="md:flex-col text-base w-full m-auto">
        <div className="h-full md:mr-8 md:w-full">
          <p className="my-2 text-left">The Ceremony</p>
          <div className="bg-green h-full text-white rounded-lg p-8 shadow-xl">
            <ul className="text-left md:text-center">
              <li>Dean & Lori Knutson's</li>
              <br />
              <li>Friday, June 10th 2022</li>
              <li className="text-center mt-8">
                <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full md:w-full">
          <p className="my-2 text-left">The Reception</p>
          <div className="bg-blue h-full text-white rounded-lg p-8 shadow-xl">
            <ul className="text-left md:text-center">
              <li>Radisson Hotel</li>
              <br />
              <li>Friday, June 10th 2022</li>
              <li className="mt-8">
                <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
