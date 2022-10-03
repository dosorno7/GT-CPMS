import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import RequestPage from './containers/RequestPage/RequestPage';
import LogIn from './containers/LogIn';
import App from './containers/App/App';
import HomePage from './containers/HomePage';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage';
import AuthenticationPage from './containers/AuthenticationPage/';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClientPage from './containers/ClientPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
    <Route path="/" element={<LogIn />}/>
    <Route path="/LogIn" element={<LogIn />}/>
    <Route path="/HomePage/" element={<HomePage />}/>
    <Route path="/ProjectsPage/" element={<ProjectsPage />}/>
    <Route path="/RequestPage/" element={<RequestPage />}/>
    <Route path="/AuthenticationPage/" element={<AuthenticationPage />}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
