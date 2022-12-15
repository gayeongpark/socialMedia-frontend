import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../image/logo.png';

import axios from 'axios';
const API = 'http://localhost:5005';

export default function SignupPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { username, password, firstname, lastname };
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
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
        <form className='infoForm authForm' onSubmit={handleSignupSubmit}>
          <h1>Sign up</h1>
          <div>
            <input
              type='text'
              placeholder='firstname'
              className='infoInput'
              name='firstname'
              onChange={handleFirstName}
            />
            <input
              type='text'
              placeholder='lastname'
              className='infoInput'
              name='lastname'
              onChange={handleLastName}
            />
          </div>
          <div>
            <input
              type='text'
              name='username'
              className='infoInput'
              placeholder='username'
              onChange={handleUsername}
            />
          </div>
          <div>
            <input
              type='password'
              className='infoInput'
              name='password'
              placeholder='password'
              onChange={handlePassword}
            />
            <input
              type='password'
              className='infoInput'
              name='confirmpassword'
              placeholder='confirm password'
              onChange={handleConfirmPassword}
            ></input>
          </div>
          <div>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '15px', cursor: 'pointer' }}>
                Already have an account?
              </span>
            </Link>
          </div>
          <button className='button infoButton' type='submit'>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
