import React from 'react';
import './App.css';
import IsAnon from './component/IsAnon/IsAnon';
import SignupPage from './pages/Auth/signup';
import LoginPage from './pages/Auth/login';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route
          path='/login'
          element={
            <IsAnon>
              {' '}
              <LoginPage />{' '}
            </IsAnon>
          }
        />
        <Route
          path='/signup'
          element={
            <IsAnon>
              {' '}
              <SignupPage />{' '}
            </IsAnon>
          }
        />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
