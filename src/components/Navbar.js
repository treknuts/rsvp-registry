import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light fixed-top'
      role='navigation'
    >
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <span className=''>Trevor & Victoria</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={!isCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavbar}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link id='rsvp' to='/rsvp' className='nav-link'>
                <span className='link-text'>RSVP</span>
                <span className='ps-1 text-warning'>
                  <i className='fas fa-check'></i>
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link id='info' to='/info' className='nav-link'>
                <span className='link-text'>Info</span>
                <span className='ps-1 text-warning'>
                  <i className='fas fa-info-circle'></i>
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link id='registry' to='/registry' className='nav-link'>
                <span className='link-text'>Registry</span>
                <span className='ps-1 text-warning'>
                  <i className='fas fa-gifts'></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
