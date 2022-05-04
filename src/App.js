import React, { useState } from 'react';
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Redirect

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
//liff
import liff from '@line/liff';


function App() {
  const [_userId, _setUserId] = useState('');
  const [_displayName, _setDisplayName] = useState('');

  function initializeLiff() {
    liff.init({
      liffId: '1657105643-d6PDzPYb'
    })
      .then(() => {
        // start to use LIFF's api
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          liff.getProfile()
            .then(profile => {
              _setUserId(profile.userId);
              _setDisplayName(profile.displayName);
            })
            .catch((err) => {
              console.log('error', err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  initializeLiff();

  return (
    <BrowserRouter>
        <div>
          <span>userId:  {_userId}</span>
          <br/>
          <span>displayName:  {_displayName}</span>
        </div>

      <Switch>
        <Route exact path="/">
          <Header />
          {/* <Home /> */}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
