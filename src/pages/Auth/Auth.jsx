import React from 'react';
import './Auth.css';
import Logo from '../../image/logo.png';

export default function Auth() {
  return (
    <div className='Auth'>
      <div className='a-left'>
        <img src={Logo} alt='logoImage' />
        <div className='WebName'>
          <h1>Week</h1>
          <h4>Share you todos every week with your friends!</h4>
        </div>
      </div>
      <LogIn />
    </div>
  );
}

function LogIn() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Log In</h3>

        <div>
          <input
            type='text'
            placeholder='Username'
            className='infoInput'
            name='username'
          />
        </div>

        <div>
          <input
            type='password'
            className='infoInput'
            placeholder='Password'
            name='password'
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>Don't have an account?</span>
          <button className='button infoButton'>Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h1>Sign up</h1>
        <div>
          <input
            type='text'
            placeholder='First Name'
            className='infoInput'
            name='firstname'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='infoInput'
            name='lastname'
          />
        </div>
        <div>
          <input
            type='text'
            name='username'
            className='infoInput'
            placeholder='usernames'
          />
        </div>
        <div>
          <input
            type='text'
            className='infoInput'
            name='password'
            placeholder='password'
          />
          <input
            type='text'
            className='infoInput'
            name='confirmpassword'
            placeholder='Confirm password'
          ></input>
        </div>
        <div>
          <span style={{ fontSize: '18px' }}>Already have an account?</span>
          <button className='button' type='submit'>
            Login
          </button>
        </div>
        <button className='button infoButton' type='submit'>
          Signup
        </button>
      </form>
    </div>
  );
}
