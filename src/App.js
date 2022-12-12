import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
