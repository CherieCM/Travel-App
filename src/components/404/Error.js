import React from 'react';
const Error = () => {
  return (
    <div
      className="agency"
      style={{
        height: '650px',
        display: 'flex',
        alignItems: 'center',
        color: '#1e427c',
        fontSize: '30px',
        testAlign: 'center',
      }}
    >
      <div className="overlay">
        <h1>404 - Wait a Second...this page doesn't exist</h1>
      </div>
    </div>
  );
};

export default Error;
