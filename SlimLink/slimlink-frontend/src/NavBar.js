import React from 'react';
import logo from './IMG_6350.PNG'; // Import the logo image

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Insert the logo and apply the navbar-logo class */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="SlimLink Logo" style={{ width: '150px', height: '50px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#plans">
                Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;