import { Modal, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import addRsvp from "../services/rsvpService";

const RSVP = ({ history }) => {
  const [familyName, setFamilyName] = useState("");
  const [members, setMembers] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleCloseConfirm = () => {
    history.push("/info");
    addRsvp({ name: familyName, members: members });
    setShowModal(false);
  };

  const handleCloseCancel = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    if (e.target.id === "first-name") {
      setFamilyName(e.target.value);
    } else if (e.target.id === "members") {
      setMembers(e.target.value);
    }
  };

  // add Boostrap Modal to confirm
  return (
    <>
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
        <div className='d-flex justify-content-end'>
          <button
            className='btn btn-warning'
            type='button'
            data-toggle='modal'
            data-target='#rsvpModal'
            onClick={handleOpen}
          >
            RSVP!
          </button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleCloseCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <p>Please double-check the info below:</p>
            <ul>
              <li>Name: {familyName}</li>
              <li>Members attending: {members}</li>
            </ul>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseCancel}>
            Cancel
          </Button>
          <Button variant='warning' onClick={handleCloseConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RSVP;
