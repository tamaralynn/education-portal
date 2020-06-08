import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAuthProvider } from "use-firebase-auth"
import firebase from "firebase/app"
import "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDlLjahz_iA_ZhGLWW0srOSu-8RYuAAkvU",
  authDomain: "education-portal-e3e8e.firebaseapp.com",
  databaseURL: "https://education-portal-e3e8e.firebaseio.com",
  projectId: "education-portal-e3e8e",
  storageBucket: "education-portal-e3e8e.appspot.com",
  messagingSenderId: "555412787696",
  appId: "1:555412787696:web:9e6714fff0d1ab81004d35",
  measurementId: "G-EK29DLNKLB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAuthProvider>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
