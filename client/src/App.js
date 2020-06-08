import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFirebaseAuth } from 'use-firebase-auth';
function App() {
  const { user, loading, error, signInWithProvider } = useFirebaseAuth();
  console.log(user, loading, error, signInWithProvider);
  useEffect(() => {
    signInWithProvider('google');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {user && <p>Hello! {user.displayName}</p>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;