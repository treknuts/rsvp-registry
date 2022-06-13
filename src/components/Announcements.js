import { Countdown } from "./Countdown";

const Announcements = () => {
  const deadline = new Date("06/17/2022");
  return (
    <div className='col-12 col-md-6 mb-4 text-center d-flex flex-column justify-content-center order-first order-md-second'>
      <Countdown targetDate={deadline} />
      <p>
        We can't wait for you to join us on our big day. If you have not RSVP'd
        we cannot guarantee you will get a meal, but we can guarantee you'll
        have a great time!
      </p>
    </div>
  );
};

export default Announcements;
