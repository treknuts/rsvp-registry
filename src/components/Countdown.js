import { useCountdown } from "../hooks/useCountdown";
import ShowCounter from "./ShowCounter";
import ExpiredNotice from "./ExpiredNotice";

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export { Countdown };
