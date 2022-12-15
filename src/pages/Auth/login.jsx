import React from 'react';
import './login.css';
import Logo from '../../image/logo.png';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

const API = 'http://localhost:5005';

export default function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };

    axios
      .post(`${API}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/home');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <div className='Auth'>
      <div className='a-left'>
        <img src={Logo} alt='logoImage' />
        <div className='WebName'>
          <h1>Week</h1>
          <h4>Share you todos every week with your friends!</h4>
        </div>
      </div>
      <div className='a-right'>
        <form className='infoForm authForm' onSubmit={handleLoginSubmit}>
          <h1>Log In</h1>
          <div>
            <input
              type='text'
              placeholder='Username'
              className='infoInput'
              name='username'
              onChange={handleUsername}
            />
          </div>
          <div>
            <input
              type='password'
              className='infoInput'
              placeholder='Password'
              name='password'
              onChange={handlePassword}
            />
          </div>
          <div>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '15px', cursor: 'pointer' }}>
                Don't have an account?
              </span>
            </Link>
          </div>
          <button className='button infoButton' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
