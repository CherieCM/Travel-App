import { useRef, useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import './login.css';
// import './login1.css';
// import AuthContext from '../../contexts/AuthProvider';

// import axios from '../../api/axios';
// const LOGIN_URL = '/auth/';

const Login1 = () => {
  //successfully authenticate will set new Auth state
  // const { setAuth } = useContext(AuthContext);
  //set focus on userRef and errRef to catch user and errors
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  //replace success state later and route to user page
  const [success, setSuccess] = useState(false);
  const msg = useContext(UserContext);

  //apply useEffect to set the focus on the input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //apply useEffect to empty out any err message if the user changes the infoMain
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  //async function receive event to prevent default event of form reloading page
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>{msg}</h1>
          <h3> You are logged in!</h3>
          <br />
          <p>
            <Link className="link" to="/">
              Go to Home
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              //can also be added to register form
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              //can also be added to register form
              value={pwd}
              required
            />
            <button>LOGIN</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link className="link" to="/signup">
                <p>Sign Up</p>
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};
export default Login1;
