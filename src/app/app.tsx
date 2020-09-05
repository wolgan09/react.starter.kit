import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import './app.css';
import { weather } from './Weather/weather';
import Home from './Home/home';
import NoMatch from './NoMatch/Error_404';
import { Icon } from '@material-ui/core';

export class app extends Component {

  render() {
    return (
      <Router>
        <div className="">
          <nav className="navbar navbar-light bg-dark">
            <Link to={'/'} className="navbar-brand"><img className="logo-img" alt="logo" src={logo} ></img></Link>
            <ul className="nav nav-pills">
              <li className="nav-item"><Link to={'/'} className="nav-link">
                <Icon>home</Icon>
              </Link></li>
              <li className="nav-item"><Link to={'/weather'} className="nav-link">
                <Icon>cloud_circle</Icon>
              </Link></li>
            </ul>
          </nav>
        </div>
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/weather' component={weather}  />
            <Route component={NoMatch}/>
          </Switch>
        </div>

      </Router>

    );
  }
}

export default app


