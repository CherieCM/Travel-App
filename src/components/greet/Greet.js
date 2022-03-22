import React from 'react';

const Greet = (props) => {
  console.log(props);
  //Greeting for user that has logged in
  //needs to be imported in App
  return <h1>Welcome {props.username}</h1>;
};

export default Greet;
