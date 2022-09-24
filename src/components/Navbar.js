import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <header>
      <nav>
        <h1 className="first">Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
        <div className="user-container">
          <FaUserAlt />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
