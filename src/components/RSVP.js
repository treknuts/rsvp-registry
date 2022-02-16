import React, { useState } from "react";
import Modal from "./Modal";
import addRsvp from "../services/rsvpService";
import states from "../states";

const RSVP = (props) => {
  const [familyName, setFamilyName] = useState("");
  const [members, setMembers] = useState(1);
  const [show, setShow] = useState(false);

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

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
    props.history.push("/rsvp");
  };

  return (
    <div>
      <form className="font-normal w-full max-w-lg">
        <Modal show={show} handleClose={hideModal} handleSubmit={handleForm}>
          <p className="text-center md:col-span-2 text-xl md:text-3xl font-light text-blue md:m-8">
            Please confirm the following is correct
          </p>
          <p className="font-semibold text-lg md:text-xl">Family Name:</p>
          <p className="text-lg md:text-xl">{familyName}</p>
          <p className="font-semibold text-lg md:text-xl">Members attending:</p>
          <p className="text-lg md:text-xl">{members}</p>
        </Modal>
        <h1 className="lg:text-2xl text-lg font-light mb-12">
          Let us know you're coming!
        </h1>
        <div className="md:grid text-base lg:text-lg md:grid-cols-2 gap-2">
          <div>
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="first-name"
            >
              Family Name
            </label>
          </div>
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
              id="first-name"
              type="text"
              value={familyName}
              onChange={handleChange}
            />
          </div>

          <div className="md:flex md:items-center mb-6 col-span-2">
            <div>
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="members"
              >
                Number Attending
              </label>
            </div>
            <div className="md:w-1/3 md:ml-auto">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue text-center"
                id="members"
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
          <div className="md:flex md:items-center">
            <div>
              <button
                className="shadow bg-blue hover:bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={showModal}
              >
                RSVP!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RSVP;
