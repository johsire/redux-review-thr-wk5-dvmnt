import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import ToDo from './components/ToDo/ToDo';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/todo' component={ ToDo } />
          <Dashboard />
        </Switch>
      </HashRouter>
   

    );
  }
}

export default App;
