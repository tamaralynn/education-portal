import React from 'react';
import logo from './logo.svg';
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
export default App;