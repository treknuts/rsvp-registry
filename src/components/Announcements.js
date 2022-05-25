import { Countdown } from "./Countdown";

const Announcements = () => {
  const deadline = new Date("05/25/2022");
  return (
    <div className='col-12 col-md-6 mb-4 text-center d-flex flex-column justify-content-center order-first order-md-second'>
      <Countdown targetDate={deadline} />
    </div>
  );
};

export default Announcements;
