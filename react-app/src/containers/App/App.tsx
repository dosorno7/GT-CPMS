import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LogIn from '../LogIn';
import HomePage from '../HomePage';
import RequestPage from '../RequestPage/RequestPage';
import AuthenticationPage from '../AuthenticationPage/';
import ClientPage from '../ClientPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/LogIn" element={<LogIn />}/>
        <Route path="/HomePage/" element={<HomePage />}/>
        <Route path="/RequestPage/" element={<RequestPage />}/>
        <Route path="/AuthenticationPage/" element={<AuthenticationPage />} />
        <Route path="/ClientPage" element={<ClientPage />}/>
        <Route path="/TeamPage" element={<HomePage />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
