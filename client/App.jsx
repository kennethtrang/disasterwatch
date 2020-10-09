import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import './styles/main.css';
import logo from './assets/dw.png';

const App = () => (
  <>
    <Navbar logo={logo} />
    <div className="h-screen w-screen flex justify-center bg-red-200">
      <HomePage logo={logo} />
    </div>
  </>
);

export default App;
