import React, { useState } from "react";

const RSVP = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState(1);

  const handleChange = (e) => {
    if (e.target.id === "first-name") {
      setFirstName(e.target.value);
    } else if (e.target.id === "last-name") {
      setLastName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "members") {
      setMembers(e.target.value);
    }
  };

  const handleForm = () => {
    alert(
      `Form values are:\n\tFirst Name: ${firstName}\n\tLast Name: ${lastName}\n\tEmail: ${email}\n\Members: ${members}`
    );
  };

  return (
    <div>
      <form className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-12">Let us know you're coming!</h1>
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="first-name"
              >
                First
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="first-name"
                type="text"
                placeholder="Bob"
                value={firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="last-name"
              >
                Last
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="last-name"
                type="text"
                placeholder="Ross"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 col-span-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="email"
                type="email"
                placeholder="youremail@domain.com"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 col-span-2">
            <div className="md:w-2/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="members"
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
                  return <option value={num}>{num}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-blue hover:bg-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleForm}
              >
                Register!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RSVP;
