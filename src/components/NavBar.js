import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </>
        ) : (
          <li><Link to="/">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
