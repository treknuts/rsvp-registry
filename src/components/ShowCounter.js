const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
      <h1 className='mb-2'>Almost there!</h1>
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
