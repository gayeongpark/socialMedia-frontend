import React, { useState , useContext} from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../image/logo.png';
import { useEffect } from 'react';
import axios from "axios"
import { AuthContext } from "./../../context/auth.context";
const API = "http://localhost:5005"

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(undefined)
  const [isLogin, setLogIn] = useState(false)
  const [confirmPass, setConfirmPass] = useState(true);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmpass: '',
  });
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${API}/auth/login`, data)
    .then((response) => {
      console.log("JWT token", response.data.authToken);
      
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/");
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
    }) 
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false);
      }
    }
    console.log("send request")
    axios.post(`${API}/auth/signup`, data)
    .then(response=> {
      if(response.data.message){
        setMessage(response.data.message)
        resetForm()
      }
    })
    .catch(err => console.log(err))
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmpass: '',
    });
  };

  return (
    <div className='Auth'>
      {/* Left Side with logo */}
      <div className='a-left'>
        <img src={Logo} alt='logoImage' />
        <div className='WebName'>
          <h1>Week</h1>
          <h4>Share you todos every week with your friends!</h4>
        </div>
      </div>

      {/* Right Side */}
      <div className='a-right'>
        <form className='infoForm authForm' >
          <h1>{isSignup ? 'Sign up' : 'Log in'}</h1>
          {isSignup && (
            <div>
              <input
                type='text'
                placeholder='First Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type='text'
                placeholder='Last Name'
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type='text'
              name='username'
              className='infoInput'
              placeholder='username'
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type='password'
              className='infoInput'
              name='password'
              placeholder='password'
              value={data.password}
              onChange={handleChange}
            />
            {isSignup && (
              <input
                required
                type='password'
                className='infoInput'
                name='confirmpass'
                placeholder='Confirm password'
                value={data.confirmpass}
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              color: 'red',
              fontSize: '12px',
              alignSelf: 'flex-end',
              marginRight: '5px',
              display: confirmPass ? 'none' : 'block',
            }}
          >
            *Please check out password
          </span>
          <div>
            <span
              style={{ fontSize: '18px', cursor: 'pointer' }}
              onClick={() => {
                setIsSignup((prev) => !prev);
                resetForm();
              }}
            >
              {isSignup
                ? 'Already have an account?'
                : "Don't have an account? Signup"}
            </span>
            {/* <button className='button' type='submit'>
            {isSignup ? 'Login' : 'Signup'}
            </button> */}
          </div>
          <button
            className='button infoButton'
            type='submit'
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              (isSignup ? 
              handleSubmit(e) : 
              handleLogin(e))
              setIsSignup((prev) => !prev)}}
          >
            {isSignup ? 'Signup' : 'Login'}
            {message && message}
          </button>
        </form>
      </div>
    </div>
  );
}
