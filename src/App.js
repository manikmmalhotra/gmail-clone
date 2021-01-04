import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import SendMail from './SendMail.js';
import {useSelector} from 'react-redux';
import selectSendMessageIsOpen from './features/mailSlice';
import './App.css';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
      {/* {sendMessageIsOpen && <SendMail />} */}
    </div> 
    </Router>
  );
}

export default App;
