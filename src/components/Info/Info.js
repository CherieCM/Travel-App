import React from 'react';
import './info.css';

const Info = () => {
  return (
    <div className="back">
      <h1 className="infoMain">A-Plus Travel Agency</h1>
      <div className="contact">
        <h3>Main Contact Information</h3>
        <p>Address: 1234 Main Street, Suite 204</p>
        <p>Manhattan, New York 10001 </p>
        <p>USA</p>
        <br />
        <p>Telephone: 347-432-6798</p>
        <p>Telephone2: 347-586-4200</p>
        <br />
        <p>Established: 2022</p>
      </div>
    </div>
  );
};

export default Info;
