import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, handleSubmit, show, children }) => {
  const showModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showModal}>
      <div className="overflow-x-scroll md:overflow-auto absolute grid grid-cols-1 gap-2 lg:grid-cols-2 bg-pink-200 rounded-xl p-6 md:w-1/2 w-11/12 h-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        {children}
        <div className="flex flex-wrap justify-center">
          <button
            className="bg-blue w-24 m-1 md:m-2 hover:bg-green text-lg md:text-xl mx-auto text-pink-200 px-3 py-1 rounded-md"
            onClick={handleSubmit}
          >
            Confirm!
          </button>
          <button className="bg-blue w-24 m-1 md:m-2 hover:bg-green text-lg md:text-xl mx-auto text-pink-200 px-3 py-1 rounded-md" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
