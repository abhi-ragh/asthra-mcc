import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logos/logo.png" alt="Fest Logo" width="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/day1">Day 1</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/day2">Day 2</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/day3">Day 3</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sponsors">Sponsors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;