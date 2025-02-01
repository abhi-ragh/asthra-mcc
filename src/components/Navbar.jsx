import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={styles.navbar}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logos/logo.png" alt="Fest Logo" width="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/day1">Day 1</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/day2">Day 2</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/day3">Day 3</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'absolute', // Positions the navbar on top of the video
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2, // Ensures the navbar is above the logo and video
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
};

export default Navbar;