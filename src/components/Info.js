import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="grid items-center gap-4 grid-cols-2 grid-rows-2 text-xl font-light mx-md-10">
      <FontAwesomeIcon icon={faLocationArrow} size="3x" />
      <div>
        <p>Hilton Garden Inn</p>
        <p>4351 17th Ave S</p>
        <p>Fargo, ND 58103</p>
      </div>
      <FontAwesomeIcon icon={faClock} size="3x" />
      <div>
        <p>
          June 17<sup>th</sup>, 2022
        </p>
        <p>Festivities begin at 5:00p.m.</p>
      </div>
    </div>
  );
};

export default Info;
