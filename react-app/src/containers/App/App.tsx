import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import HomePage from '../HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;
