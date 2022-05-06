const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='mx-auto'>
      <h6>Time remaining</h6>
      <div className='d-flex'>
        <div className='border p-1'>
          <p>days</p>
          <code>{days}</code>
        </div>
        <div className='border p-1'>
          <p>hours</p>
          <code>{hours}</code>
        </div>
        <div className='border p-1'>
          <p>min</p>
          <code>{minutes}</code>
        </div>
        <div className='border p-1'>
          <p>sec</p>
          <code>{seconds}</code>
        </div>
      </div>
    </div>
  );
};

export default ShowCounter;
