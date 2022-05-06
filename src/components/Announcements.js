import { Countdown } from "./Countdown";
import { Link } from "react-router-dom";

const Announcements = () => {
  const deadline = new Date("05/25/2022");
  return (
    <div className='col-12 col-md-6 mb-4 text-center d-flex flex-column justify-content-center order-first order-md-second'>
      <h3 className='mb-0 mb-md-4'>Heads up!</h3>
      <p className='bigger-text mb-4'>
        Keep an eye out for a physical RSVP we are mailing out. Please provide
        an updated head count and meal selections. Send it back by{" "}
        <code>May 25th</code> so you're guaranteed the meal you want. You can
        see meal options <Link to='/info'>here</Link>.
      </p>
      <Countdown targetDate={deadline} />
    </div>
  );
};

export default Announcements;
