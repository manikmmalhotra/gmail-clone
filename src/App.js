import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import './App.css';
// import { Router } from '@material-ui/icons';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />


      <div className="app_body">
      <Sidebar />

      <Switch>
        <Route path="/mail">
            <Mail />
        </Route>
        <Route path="/">
            <EmailList />
        </Route>
      </Switch>
      </div>
    </div> 
    </Router>
  );
}

export default App;
