import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  //click event handler
  function clickHandler() {
    console.log('Button clicked');
  }

  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="/tips">
            <button onClick={clickHandler}>Tips &amp; Tricks</button>
          </Link>
        </li>
        <li>
          <Link to="/posts">
            <button onClick={clickHandler}>Suggestion Box</button>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/info">
            <button onClick={clickHandler}>Company Info</button>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <button onClick={clickHandler}>Blogs</button>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
