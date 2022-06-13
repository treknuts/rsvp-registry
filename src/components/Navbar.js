const Navbar = () => {
  return (
    <nav
      className='mw-100 d-flex p-2 align-items-center fixed-top'
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <img
        src='https://treknuts-image-bucket.s3.us-east-2.amazonaws.com/projects-images/wedding+favicon.png'
        width='45'
        height='45'
        alt='doves'
        className='m-2'
      />
      <span className='h2'>Victoria & Trevor</span>
    </nav>
  );
};

export default Navbar;
