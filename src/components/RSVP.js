import React, { useState } from "react";

const RSVP = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState(1);
  const [addrLine1, setAddrLine1] = useState("");
  const [addrLine2, setAddrLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleChange = (e) => {
    if (e.target.id === "first-name") {
      setFirstName(e.target.value);
    } else if (e.target.id === "last-name") {
      setLastName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "members") {
      setMembers(e.target.value);
    } else if (e.target.id === "addrLine1") {
      setAddrLine1(e.target.value);
    } else if (e.target.id === "addrLine2") {
      setAddrLine2(e.target.value);
    } else if (e.target.id === "city") {
      setCity(e.target.value);
    } else if (e.target.id === "state") {
      setState(e.target.value);
    } else if (e.target.id === "zip") {
      setZip(e.target.value);
    }
  };

  const handleForm = () => {
    alert(
      `Form values are:\n
      \tFirst Name: ${firstName}\n
      \tLast Name: ${lastName}\n
      \tEmail: ${email}\n
      \tMembers: ${members}\n
      \tAddress: \n
      \t\t${addrLine1}, ${addrLine2}\n
      \t\t${city}, ${state} ${zip}`
    );
  };

  return (
    <div>
      <form className="w-full max-w-lg">
        <h1 className="lg:text-2xl text-lg font-bold mb-12">
          Let us know you're coming!
        </h1>
        <div className="md:grid text-base lg:text-lg md:grid-cols-2 gap-2">
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
          <div className="md:flex md:items-center mb-6 col-span-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="addrLine1"
              >
                Address Line 1
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="addrLine1"
                type="text"
                value={addrLine1}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 col-span-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="addrLine2"
              >
                Address Line 2
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="addrLine2"
                type="text"
                placeholder="Apt/Suite"
                value={addrLine2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="city"
              >
                City
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="city"
                type="text"
                value={city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="state"
              >
                State
              </label>
            </div>
            <div className="md:w-2/3 md:ml-auto">
              <select
                className="bg-gray-200 overflow-ellipsis appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue text-center"
                id="state"
                value={state}
                onChange={handleChange}
              >
                {states.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6 col-span-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="zip"
              >
                Zip
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue"
                id="zip"
                type="text"
                value={zip}
                onChange={handleChange}
              />
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
