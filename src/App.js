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
  //const [_lineUser, _setLineUser] = useState([])
  liff.init({
    liffId: '1657105643-G6zMezJg', // Use own liffId
  })
    .then(() => {
      // start to use LIFF's api
    })
    .catch((err) => {
      console.log(err);
    });
  const user = liff.getProfile()
  //_setLineUser(user);
  console.log("userProfile :", user)

  return (
    <BrowserRouter>
      {user.length === 0 ?
        <span>尚無資料</span> :
        <div>
          <span>userId:  {user.userId}</span>
          <span>displayName:  {user.displayName}</span>
          <span>pictureUrl:  {user.pictureUrl}</span>
        </div>
      }

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
