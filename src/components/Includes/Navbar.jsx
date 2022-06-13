import { Link } from 'react-router-dom';
import React from 'react';
import Applogo from '../image/cut.ico';

function Navbar() {
  return (
    <div className="header-nav">
      <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
        <div className="container">
          <nav id="menuzord-right" className="menuzord default">
            <a className="mt-15 pull-left flip xs-pull-center " href="/">
              <img src={Applogo} alt="" />
            </a>
            <ul className="menuzord-menu pull-right onepage-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Physiotherapist</Link></li>
              <li><Link to="/diet">Diet Plans</Link></li>
              <li><Link to="/contact">Book Appointment</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
