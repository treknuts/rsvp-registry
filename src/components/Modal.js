import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, handleSubmit, show, children }) => {
  const showModal = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showModal}>
      <section className="fixed bg-pink-200 rounded-xl p-12 w-1/2 h-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        {children}
        <button
          className="bg-blue hover:bg-green text-pink-200 px-3 py-1 rounded-md"
          onClick={handleSubmit}
        >
          Confirm!
        </button>
        <button className="absolute right-0 top-0 m-3" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
      </section>
    </div>
  );
};

export default Modal;
