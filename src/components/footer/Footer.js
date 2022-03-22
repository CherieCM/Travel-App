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
          <button onClick={clickHandler}>Home</button>
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
