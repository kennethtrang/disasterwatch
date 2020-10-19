import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home';
import DisasterPage from './pages/Disaster';
import { disasterTitles } from './data/disasterTypes';
import './styles/main.css';
import logo from './assets/dw.png';

const App = () => {
  const history = useHistory();
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState(false);

  return (
    <>
      <Navbar logo={logo} />
      <div className="h-screen w-screen flex justify-center bg-gray-200">
        <Switch>
          <Route path="/wildfire">
            <DisasterPage disaster={disasterTitles.wildfire} location={location} />
          </Route>
          <Route path="/earthquake">
            <DisasterPage disaster={disasterTitles.earthquake} location={location} />
          </Route>
          <Route path="/tornado">
            <DisasterPage disaster={disasterTitles.tornado} location={location} />
          </Route>
          <Route path="/hurricane">
            <DisasterPage disaster={disasterTitles.hurricane} location={location} />
          </Route>
          <Route path="/">
            <HomePage
              logo={logo}
              history={history}
              location={location}
              setLocation={setLocation}
              locationError={locationError}
              setLocationError={setLocationError}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
