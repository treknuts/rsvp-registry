import React, { useState } from "react";
import { Link } from "react-router-dom";
import addRsvp from "../services/rsvpService";
import { Countdown } from "./Countdown";

const RSVP = (props) => {
  const [familyName, setFamilyName] = useState("");
  const [members, setMembers] = useState(1);
  const deadline = new Date("05/25/2022");

  const handleChange = (e) => {
    if (e.target.id === "first-name") {
      setFamilyName(e.target.value);
    } else if (e.target.id === "members") {
      setMembers(e.target.value);
    }
  };

  const handleForm = async () => {
    props.history.push("/info");
    const info = {
      name: `${familyName}`,
      members: members,
    };
    addRsvp(info);
  };

  // add Boostrap Modal to confirm
  return (
    <div className='main-content p-2 p-md-4 rounded shadow bg-light'>
      <div className='row'>
        <form className='col-12 col-md-6 order-second order-md-first'>
          <h3 className='text-center'>RSVP</h3>
          <label className='text-muted' htmlFor='first-name'>
            Family Name
          </label>
          <div className='input-group mb-3'>
            <input
              className='form-control'
              id='first-name'
              type='text'
              value={familyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='text-muted' htmlFor='members'>
              Number Attending
            </label>
            <div className='input-group mb-3'>
              <select
                id='members'
                className='form-select'
                aria-label='Default select example'
                value={members}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5].map((num) => {
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <div>
              <button
                className='btn btn-warning'
                type='button'
                onClick={handleForm}
              >
                RSVP!
              </button>
            </div>
          </div>
        </form>
        <div className='col-12 col-md-6 mb-4 text-center d-flex flex-column justify-content-center order-first order-md-second'>
          <h3 className='mb-0 mb-md-4'>Attention</h3>
          <p className='bigger-text mb-4'>
            Keep an eye out for a physical RSVP we are mailing out. Please
            provide an updated head count and meal selections. Send it back by{" "}
            <code>May 25th</code> so you're guaranteed the meal you want. You
            can see meal options <Link to='/info'>here</Link>.
          </p>
          <Countdown targetDate={deadline} />
        </div>
      </div>
    </div>
  );
};

export default RSVP;
