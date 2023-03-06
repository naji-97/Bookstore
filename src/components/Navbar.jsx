import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">My Logo</Link>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
