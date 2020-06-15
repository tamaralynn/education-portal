import React from "react";
/*import logo from './logo.svg';
import './App.css';
import { useFirebaseAuth } from 'use-firebase-auth';
import SignUp from "./components/SignUp";
function App() {
  const { user, loading, error, signInWithProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } = useFirebaseAuth();
  console.log(user, loading, error, signInWithProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword);
  return (
    < div className="App">
      {user && 
        <header className="App-header"><p>Hello! {user.displayName}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      }
      {!user && <SignUp />}``
    </div>
  );
}
export default App; */

import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useFirebaseAuth } from "use-firebase-auth";

// core components
import Admin from "./layouts/Admin";
import RTL from "./layouts/RTL";
import SignUp from "./components/SignUp";

import "./assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();

function App() {
  const {
    user,
    loading,
    error,
    signInWithProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } = useFirebaseAuth();
  console.log(
    user,
    loading,
    error,
    signInWithProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  );
  return (
    <Router history={hist}>
      {user && (
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      )}
      {!user && <SignUp />}``
    </Router>
  );
}

export default App;
