import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import DisasterPage from './pages/Disaster';
import { disasterTitles } from './data/disasterTypes';
import './styles/main.css';
import logo from './assets/dw.png';

const App = () => {
  const history = useHistory();

  return (
    <>
      <Navbar logo={logo} />
      <div className="h-screen w-screen flex justify-center bg-gray-200">
        <Switch>
          <Route path="/wildfire">
            <DisasterPage disaster={disasterTitles.wildfire} />
          </Route>
          <Route path="/earthquake">
            <DisasterPage disaster={disasterTitles.earthquake} />
          </Route>
          <Route path="/tornado">
            <DisasterPage disaster={disasterTitles.tornado} />
          </Route>
          <Route path="/hurricane">
            <DisasterPage disaster={disasterTitles.hurricane} />
          </Route>
          <Route path="/">
            <HomePage logo={logo} history={history} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
