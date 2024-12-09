import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">JobQuest</Link>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/JobListingsPage" className="nav-link">Job Lists</Link></li>
        <li><Link to="/EmployerDashboard" className="nav-link">Employer Dashboard</Link></li>
        <li><Link to="/CandidateDashboard" className="nav-link">Candidate Dashboard</Link></li>
        <li><Link to="/Register" className="nav-link">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;