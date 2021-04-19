import db from "../firebase";

const addRsvp = (info) => {
  db.collection("rsvps")
    .add(info)
    .then((docRef) => {
      console.log("Successfully RSVP'd! RSVP ID: ", docRef.id);
    })
    .catch((error) => {
      console.log("Encountered an error RSVPing: ", error);
    });
};

export default addRsvp;
