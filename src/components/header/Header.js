import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="navbar1">
          <ul>
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/search">
                Search
              </Link>
            </li>
          </ul>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link className="links" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="links" to="/profile">
                Profiles
              </Link>
            </li>
            <li>
              <Link className="links" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
