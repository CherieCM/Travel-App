import { useState, useEffect } from 'react';

import './profile.css';

const Profile = () => {
  const url = 'https://randomuser.me/api/';
  const defaultImage = 'https://randomuser.me/api/portraits/men/23.jpg';

  // common conventions - setting up the state variables
  const [isLoading, setIsLoading] = useState(true);
  const [randomPerson, setRandomPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');
  //async and await syntax
  const fetchRandomPerson = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // let's have a look at the API
    const person = data.results[0];
    // destructure values
    const {
      phone,
      email,
      login: { password },
      name: { first, last },
      dob: { age },
      picture: { large: image },
      location: {
        street: { number, name },
      },
    } = person;
    // es6 feature
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    };

    setRandomPerson(newPerson);
    setIsLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };
  //use hook to trigger the empty dependency run once
  useEffect(() => {
    fetchRandomPerson();
  }, []);

  //create an event listener so that the value changes when hovered over
  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.id;
      setTitle(newValue);
      setValue(randomPerson[newValue]);
    }
  };

  return (
    <main>
      <div className="block bcg-black">
        <h1 className="overlay-title1">Travel Community</h1>
      </div>
      <div className="block">
        <div className="container">
          <img
            src={(randomPerson && randomPerson.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-id="name" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37746/preview.svg"
                alt="user-icon"
              />
            </button>
            <button className="icon" data-id="email" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84642/preview.svg"
                alt="envelope"
              />
            </button>
            <button className="icon" data-id="age" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37807/preview.svg"
                alt="calendar-icon"
              />
            </button>
            <button className="icon" data-id="street" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49230/preview.svg"
                alt="map-icon"
              />
            </button>
            <button className="icon" data-id="phone" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84625/preview.svg"
                alt="phone"
              />
            </button>
            <button className="icon" data-id="password" onMouseOver={handleValue}>
              <img
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37722/preview.svg"
                alt="envelope"
              />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchRandomPerson}>
            {isLoading ? 'loading...' : 'User Details'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
