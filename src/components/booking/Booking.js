import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <section className="agency login">
      <div className="overlay">
        <br />
        <br />
        <h1> Your Booking Package </h1>
        <p> We will follow up with you shortly to confirm your package! </p> <br />
        Wanna check out or add other packages? <br />
        <Link style={{ textDecoration: 'none' }} to="/search">
          <strong> Click Here</strong>
        </Link>
      </div>
    </section>
  );
};

export default Booking;
