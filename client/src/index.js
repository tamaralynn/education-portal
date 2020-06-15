/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAuthProvider } from "use-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";

// core components
/* import Admin from "./layouts/Admin";
import RTL from "./layouts/RTL"; */

import "./assets/css/material-dashboard-react.css";

const firebaseConfig = {
  apiKey: "AIzaSyDlLjahz_iA_ZhGLWW0srOSu-8RYuAAkvU",
  authDomain: "education-portal-e3e8e.firebaseapp.com",
  databaseURL: "https://education-portal-e3e8e.firebaseio.com",
  projectId: "education-portal-e3e8e",
  storageBucket: "education-portal-e3e8e.appspot.com",
  messagingSenderId: "555412787696",
  appId: "1:555412787696:web:9e6714fff0d1ab81004d35",
  measurementId: "G-EK29DLNKLB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </FirebaseAuthProvider>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
