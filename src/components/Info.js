import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div class="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 md:text-center">
      <div class="font-extralight md:col-span-2 text-center text-lg md:text-2xl">
        Both the Ceremony and Reception will be held on <br />
        Friday, June 10th 2022
      </div>
      <div class="font-extralight text-lg md:text-2xl">The Ceremony</div>
      <div class="bg-blue text-white font-normal rounded-lg p-3 text-center text-base md:text-xl">
        <ul>
          <li>Hoge Island</li>
          <li>time tbd</li>
          <li>
            <a
              href="https://www.google.com/maps/dir//8520+Burnt+Creek+Island+Rd,+Bismarck,+ND+58503/@46.8980895,-100.9311767,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x52d787065d27c66f:0xb81727576c8b56e2!2m2!1d-100.8960715!2d46.8980362!3e0"
              target="_blank"
              rel="noreferrer"
              >
                <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
              </a>
            </li>
          </ul>
        </div>
        <div class="font-extralight text-lg md:text-2xl">
          The Reception
        </div>
        <div class="bg-green text-white font-normal rounded-lg p-3 text-center text-base md:text-xl">
          <ul>
            <li>Radisson Hotel</li>
            <li>
              <a 
                href="https://www.google.com/maps/dir//605+E+Broadway+Ave,+Bismarck,+ND+58501/@46.8061321,-100.817732,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x52d7831692a9c993:0x4fcd4d8dffed1e2!2m2!1d-100.7826268!2d46.8060787"
                target="_blank"
                rel="noreferrer"
                >
                <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Info;
