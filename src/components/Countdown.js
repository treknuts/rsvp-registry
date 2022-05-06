import { useCountdown } from "../hooks/useCountdown";

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className='d-flex justify-content-evenly w-75 m-auto'>
      <div className='border rounded p-1'>
        <p>days</p>
        <code>{days}</code>
      </div>
      <div className='border rounded p-1'>
        <p>hours</p>
        <code>{hours}</code>
      </div>
      <div className='border rounded p-1'>
        <p>min</p>
        <code>{minutes}</code>
      </div>
      <div className='border rounded p-1'>
        <p>sec</p>
        <code>{seconds}</code>
      </div>
    </div>
  );
};

export { Countdown };
