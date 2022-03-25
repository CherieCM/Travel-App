import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import './login.css';
// import AuthBtn from '../authbtn/AuthBtn';

const Login = () => {
  //state variables
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [successMsg, setSuccessMsg] = useState('');

  const handleEmailChange = (e) => {
    setSuccessMsg('');
    setEmailError('');
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //check if email is empty
    if (email !== '') {
      // check other condition
      const emailRegex = /^[a-zA-Z0-9. !#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(email)) {
        setEmailError('');
        if (email === 'admin@admin.com' || email === 'che@email.com') {
          setEmailError('');
          if (password === 'admin' || password === 'cheche') {
            // successMsg
            setSuccessMsg('You are successfully logged in');
          } else {
            setPasswordError('Password does not match with the email address ');
          }
        } else {
          setEmailError('email does not match with our database');
        }
      } else {
        setEmailError('Invalid Email');
      }
    } else {
      setEmailError('Email Required');
    }
    //check if password is empty
    if (password !== '') {
      //do something here
    } else {
      setPasswordError('Password Required');
    }
  };

  const AuthBtn = (props) => {
    let { isLoggedIn } = props;

    if (isLoggedIn) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  };
  //context for passing greetings value
  const msg = useContext(UserContext);

  return (
    //set up message layout for successMsg
    <>
      {successMsg ? (
        <section className="agency login">
          <div className="overlay">
            <h2 className="overlay-title">{msg}</h2>
            {successMsg && <div className="success-msg">{successMsg}</div>}
            <br />
            <p>
              <Link className="link" to="/">
                Go to Home
              </Link>
            </p>
          </div>
        </section>
      ) : (
        <section className="agency login">
          <div className="overlay">
            <h2 className="overlay-title1">Login</h2>
            <form className="form" autocomplete="off" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email address"
                onChange={handleEmailChange}
                value={email}
              />
              {emailError && <div className="error-msg">{emailError}</div>}

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                value={password}
              />
              {passwordError && <div className="error-msg">{passwordError}</div>}
              {/* direct login and logout buttons to corresponding page */}
              <button type="submit">LOGIN</button>
              {/* <button>LOGOUT</button> */}
              {AuthBtn}
              {/* <Link to="/">
            <button type="submit">LOGIN</button>
            <button>LOGOUT</button>
          </Link>
          <div className="sign-link">
            <Link className="link" to="/signup">
              <li>Signup Now</li>
            </Link> */}
              {/* </div> */}
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                <Link className="link" to="/signup">
                  <p className="sign-up">Sign Up</p>
                </Link>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
