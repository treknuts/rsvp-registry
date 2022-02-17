import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className="container-fluid p-4 w-25 rounded shadow bg-light">
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-baseline justify-content-between">
          <FontAwesomeIcon className="text-warning" icon={faLocationArrow} size="2x" />
          <p>Hilton Garden Inn, Fargo</p>
        </li>
        <li className="list-group-item d-flex align-items-center justify-content-between">
          <FontAwesomeIcon className="text-warning" icon={faCalendar} size="2x" />
          <p>June 17<sup>th</sup>, 2022</p>
        </li>
        <li className="list-group-item d-flex align-items-center justify-content-between">
          <FontAwesomeIcon className="text-warning" icon={faClock} size="2x" />
          <p>5:00 p.m.</p>
        </li>
      </ul>
      <div className="text-left mt-4">
        <p className="mb-2">
          Reception entrance is located at the South-west corner of the building.
        </p>
        <p className="mb-2">
          Festivities begin at 5:00pm with dinner beginning at 6:00pm and the dance from 7:00pm-11:00pm
        </p>
        <p className="mb-2">
          The dinner logistics are yet to be determined. It will either be a buffet of plated meal. 
        </p>
        <p className="mb-2">
          There will be a cash bar in the event hall and the main hallway East of the event hall. 
        </p>
      </div>
    </div>
  );
};

export default Info;
