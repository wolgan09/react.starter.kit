import React from 'react';
import logo from '../assets/logo.svg';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/dashboard';
import Home from './Home/home';




function App() {
  return (
    <Router>
    <div className="">
      <nav className="navbar navbar-light bg-dark">
      <Link to={'/'} className="navbar-brand"><img className="logo-img" src={logo} ></img></Link>
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={'/'} className="nav-link"> Home </Link></li>
        <li className="nav-item"><Link to={'/dashboard'} className="nav-link">Dashboard</Link></li>
      </ul>
      </nav>
      </div>
      <div className="jumbotron">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
      </Switch>
      </div>
 
  </Router>
  );
}

export default App;
