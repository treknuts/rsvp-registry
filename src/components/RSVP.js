import React, { useState } from "react";
import addRsvp from "../services/rsvpService";

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


  // add Boostrap Modal to confirm
  return (
    <div className="p-4 rounded shadow bg-light">
      <form>
        <h1>
          Let us know you're coming!
        </h1>
            <label
              className="text-muted"
              htmlFor="first-name"
            >
              Family Name
            </label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              id="first-name"
              type="text"
              value={familyName}
              onChange={handleChange}
            />
          </div>
            <div>
              <label
                className=" text-muted"
                htmlFor="members"
              >
                Number Attending
              </label>
            <div className="input-group mb-3">
              <select id="members" className="form-select" aria-label="Default select example" value={members} onChange={handleChange}>
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
                className="btn btn-primary"
                type="button"
                onClick={handleForm}
              >
                RSVP!
              </button>
            </div>
          </div>
      </form>
      </div>
  );
};

export default RSVP;
