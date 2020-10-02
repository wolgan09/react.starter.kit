import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './shared/Header/Header';
import Weather from './Weather/Weather';
import { Route, Switch } from 'react-router-dom';
import WeatherReport from './Weather/WeatherReport';
function App() {
  return (
    <div >
    <Header />
    <Switch>
      <Route path="/" exact component={Weather}></Route>
      <Route path="/report/:id" component={WeatherReport} />
    </Switch> 
    </div>   
  );
}

export default App;
