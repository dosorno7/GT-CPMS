import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RequestPage from './containers/RequestPage/RequestPage';
import LogIn from './containers/LogIn';
import App from './containers/App/App';
import HomePage from './containers/HomePage';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage';
import AuthenticationPage from './containers/AuthenticationPage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import ClientPage from './containers/ClientPage';
import RejectionPage from './containers/RejectionPage';

//const [token, setToken] = useState() 
console.log(localStorage.getItem('valid_token'))
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function RequireAuth({ children }:{children:any}) {
  let location = useLocation();
  if (localStorage.getItem('valid_token') != 'true') {
    // Redirect to the /login page y
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

root.render(
  <Router>
    <Routes>
    <Route path="/" element={<LogIn />}/>
    <Route path="/LogIn" element={<LogIn />}/>
    <Route path="/HomePage/" element={<RequireAuth> <HomePage /> </RequireAuth>}/>
    <Route path="/ProjectsPage/" element={ <RequireAuth> <ProjectsPage /> </RequireAuth>}/>
    <Route path="/RequestPage/" element={ <RequestPage /> }/>
    <Route path="/ClientPage/" element={<RequireAuth> <ClientPage /> </RequireAuth>} />
    <Route path="/AuthenticationPage/" element={ <AuthenticationPage /> }/>
    <Route path="/RejectionPage/" element={ <RejectionPage /> }/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
