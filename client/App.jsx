import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import ContentPage from './pages/Content';
import disasterType from './data/disasterTypes';
import './styles/main.css';
import logo from './assets/dw.png';

const App = () => (
  <>
    <Navbar logo={logo} />
    <div className="h-screen w-screen flex justify-center bg-gray-200">
      <Switch>
        <Route path="/">
          <HomePage logo={logo} />
        </Route>
        <Route path="/fire">
          <ContentPage disaster={disasterType.fire} />
        </Route>
        <Route path="/earthquake">
          <ContentPage disaster={disasterType.earthquake} />
        </Route>
        <Route path="/tornado">
          <ContentPage disaster={disasterType.tornado} />
        </Route>
        <Route path="/hurricane">
          <ContentPage disaster={disasterType.hurricane} />
        </Route>
      </Switch>
    </div>
  </>
);

export default App;
