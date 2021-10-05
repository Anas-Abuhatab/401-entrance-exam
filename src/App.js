import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import FavWatch from './components/FavWatch';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0
    return (
      <div>

        {/* @todo show login button and hide the list for unauthenticated users */}

        {/* @todo show logout button and show items list components for authenticated users */}

        {/* regarding to wireframe */}

        <Router>
        <Header/>
          <Switch>

            <Route exact path="/FavWatch">
              {isAuthenticated ? <FavWatch /> : <Login />}
            </Route>
            <Route exact path="/">
              {isAuthenticated ? <Home /> : <Login />}
            </Route>
          </Switch>

        </Router>
        <Footer/>
      </div>
    )
  }
}

export default withAuth0(App);
