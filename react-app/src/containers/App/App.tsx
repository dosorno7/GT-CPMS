import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LogIn from '../LogIn';
//import HomePage from '../HomePage';
import ClientPage from '../ClientPage';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/ClientPage" element={<ClientPage />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
