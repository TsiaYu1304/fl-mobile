import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Redirect

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

//liff
import { useLiff } from 'react-liff';

function App() {
  const [displayName, setDisplayName] = useState('');
  const { error, liff, isLoggedIn, ready } = useLiff();
  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      setDisplayName(profile.displayName);
    })();
  }, [liff, isLoggedIn]);
  


  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!ready) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <button className="App-button" onClick={liff.login}>
          Login
        </button>
      );
    }
    return (
      <>
        <p>Welcome to the react-liff demo app, {displayName}!</p>
        <button className="App-button" onClick={liff.logout}>
          Logout
        </button>
      </>
    );
  };


  return (
    <div>
      <header className="App-header">{showDisplayName()}</header>
    <BrowserRouter>
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
    </div>
  );
}

export default App;
