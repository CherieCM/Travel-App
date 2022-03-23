import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './signup.css';
// import Login from './components/login/Login';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const LOCAL_STORAGE_KEY = 'Info';

  const [Info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setInfo(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info));
  }, [Info]);

  let signup = (e) => {
    e.preventDefault();

    if (!Info.name || !Info.email || !Info.password || !Info.password2) {
      alert('Complete all the fields!');
      return;
    }
  };
  const msg = useContext(UserContext);
  return (
    <section className="agency login">
      <div className="overlay">
        <form className="form" onSubmit={signup}>
          <div>
            <h2 className="greet">{msg}</h2>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={Info.name}
            onChange={(e) => setInfo({ ...Info, name: e.target.value })}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={Info.email}
            onChange={(e) => setInfo({ ...Info, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={Info.password}
            onChange={(e) => setInfo({ ...Info, password: e.target.value })}
            required
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Your Password"
            required
            value={Info.password2}
            onChange={(e) => setInfo({ ...Info, password2: e.target.value })}
          />
          <div className="reg-btn">
            <Link to="/">
              <button type="submit">Create Your Account</button>
            </Link>
          </div>
          <div className="reg-link">
            <p>If Account exist then</p>
            <Link className="link" to="/login">
              <li className="login-sign">Login</li>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
