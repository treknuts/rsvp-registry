import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faLocationArrow,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import "./info.css";

const Info = () => {
  const [oneCollapsed, set1Collapsed] = useState(true);
  const [twoCollapsed, set2Collapsed] = useState(true);
  const [threeCollapsed, set3Collapsed] = useState(true);
  const [fourCollapsed, set4Collapsed] = useState(true);

  const handleOneClick = () => {
    set1Collapsed(!oneCollapsed);
  };
  const handleTwoClick = () => {
    set2Collapsed(!twoCollapsed);
  };
  const handleThreeclick = () => {
    set3Collapsed(!threeCollapsed);
  };
  const handleFourclick = () => {
    set4Collapsed(!fourCollapsed);
  };
  return (
    <div className='main-content mt-4 mt-md-0 p-2 p-md-5 rounded shadow bg-light'>
      <ul className='list-group mx-auto'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <FontAwesomeIcon
            className='text-warning'
            icon={faLocationArrow}
            size='lg'
          />
          <a
            href='https://www.hilton.com/en/hotels/fargigi-hilton-garden-inn-fargo/'
            rel='noreferrer'
            target='_blank'
          >
            Hilton Garden Inn, Fargo
          </a>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          <FontAwesomeIcon className='text-warning' icon={faBed} size='lg' />
          <a
            href='https://nam10.safelinks.protection.outlook.com/?url=http%3A%2F%2Fl.h4.hilton.com%2Frts%2Fgo2.aspx%3Fh%3D1993650%26tp%3Di-16D9-Ak-QW4-9wJEYq-24-izWDC-1c-l7ANqpGmcr-1SIfdV%26x%3Dwww.my-event.hilton.com%2Ffargigi-fkr-c4db70d0-f2de-428d-934e-1182e789a6a0%2F&data=04%7C01%7Cneedham%40raymondteam.com%7C1dc37134e3664acaea4808d9f303b268%7C2d6d69e47c344f719340836656af8d60%7C0%7C1%7C637808019495867655%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=yDTts5rh%2BLQ1vVloB6nnebuAY0tlqxsFVzAXaK1sCS4%3D&reserved=0'
            rel='noreferrer'
            target='_blank'
          >
            Book your room!
          </a>
        </li>
        <li className='list-group-item d-flex align-items-center justify-content-between'>
          <FontAwesomeIcon
            className='text-warning'
            icon={faCalendar}
            size='lg'
          />
          <p>
            June 17<sup>th</sup>, 2022
          </p>
        </li>
        <li className='list-group-item d-flex align-items-center justify-content-between'>
          <FontAwesomeIcon className='text-warning' icon={faClock} size='lg' />
          <p>5:00 p.m.</p>
        </li>
      </ul>
      <div className='mt-4'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                id='q1'
                className={`accordion-button ${
                  oneCollapsed ? "collapsed" : ""
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded={!oneCollapsed ? true : false}
                aria-controls='collapseOne'
                onClick={handleOneClick}
              >
                <em>
                  <strong>Q:</strong>&nbsp;What time does the event start?
                </em>
              </button>
            </h2>
            <div
              id='collapseOne'
              className={`accordion-collapse collapse ${
                !oneCollapsed ? "show" : ""
              }`}
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <strong>A:</strong>&nbsp;The reception starts at{" "}
                <code>5:00pm</code> with a social hour followed by dinner at{" "}
                <code>6:00pm</code>. Last, but not least, the dance will start
                at <code>7:00pm</code> and concludes at <code>11:00pm</code>.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingTwo'>
              <button
                className={`accordion-button ${
                  twoCollapsed ? "collapsed" : ""
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded={!twoCollapsed ? true : false}
                aria-controls='collapseTwo'
                onClick={handleTwoClick}
              >
                <em>
                  <strong>Q:</strong>&nbsp;What's for dinner?
                </em>
              </button>
            </h2>
            <div
              id='collapseTwo'
              className={`accordion-collapse collapse ${
                !twoCollapsed ? "show" : ""
              }`}
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <strong>A:</strong>&nbsp;We are offering a plated dinner with a
                couple options:
                <ul>
                  <li>
                    Chicken with fire-roasted red pepper sauce served with
                    rosemary mashed potatoes and honey roasted carrots
                  </li>
                  <li>
                    Pork Loin with chipotle raspberry sauce served alongside
                    rosemary mashed potatoes and honey roasted carrots
                  </li>
                  <li>
                    <strong>Kids:&nbsp;</strong>Chicken nuggets with a fruit
                    cup, corn, and mac 'n' cheese
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingThree'>
              <button
                className={`accordion-button ${
                  threeCollapsed ? "collapsed" : ""
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded={!threeCollapsed ? true : false}
                aria-controls='collapseThree'
                onClick={handleThreeclick}
              >
                <em>
                  <strong>Q:</strong>&nbsp;Will there be anything to keep my
                  children entertained?
                </em>
              </button>
            </h2>
            <div
              id='collapseThree'
              className={`accordion-collapse collapse ${
                !threeCollapsed ? "show" : ""
              }`}
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <strong>A:</strong>&nbsp;There will be a <em>Kids Corner</em>{" "}
                set up right outside the reception hall. Your kiddos will have a
                dedicated space to play and socialize. Kids are more than
                welcome, and we can't wait to see them cut a rug out on the
                dance floor.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingThree'>
              <button
                className={`accordion-button ${
                  fourCollapsed ? "collapsed" : ""
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded={!fourCollapsed ? true : false}
                aria-controls='collapseThree'
                onClick={handleFourclick}
              >
                <em>
                  <strong>Q:</strong>&nbsp;Are there rooms blocked off for
                  guests?
                </em>
              </button>
            </h2>
            <div
              id='collapseThree'
              className={`accordion-collapse collapse ${
                !fourCollapsed ? "show" : ""
              }`}
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <strong>A:</strong>&nbsp;Yes! There are rooms blocked off for
                guests. You can book{" "}
                <a
                  href='https://nam10.safelinks.protection.outlook.com/?url=http%3A%2F%2Fl.h4.hilton.com%2Frts%2Fgo2.aspx%3Fh%3D1993650%26tp%3Di-16D9-Ak-QW4-9wJEYq-24-izWDC-1c-l7ANqpGmcr-1SIfdV%26x%3Dwww.my-event.hilton.com%2Ffargigi-fkr-c4db70d0-f2de-428d-934e-1182e789a6a0%2F&data=04%7C01%7Cneedham%40raymondteam.com%7C1dc37134e3664acaea4808d9f303b268%7C2d6d69e47c344f719340836656af8d60%7C0%7C1%7C637808019495867655%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&sdata=yDTts5rh%2BLQ1vVloB6nnebuAY0tlqxsFVzAXaK1sCS4%3D&reserved=0'
                  rel='noreferrer'
                  target='_blank'
                >
                  here
                </a>
                . Rooms will be blocked off until{" "}
                <code>
                  May 17<sup>th</sup>, 2022
                </code>{" "}
                at which point you will need to make a normal reservation
                through the hotel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
