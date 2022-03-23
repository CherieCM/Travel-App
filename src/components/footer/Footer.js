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
          <Link to="/">
            <button onClick={clickHandler}>Home</button>
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
          <button onClick={clickHandler}>Travel Tours</button>
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
