import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="panel-bg">
      <div className="logo">
        <Link to="/">Bookstore CMS</Link>
      </div>
      <div className="links">
        <ul>
          <li className="books"><Link to="/">Books</Link></li>
          <li className="categories"><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
