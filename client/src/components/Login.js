import React,{useEffect,useState} from 'react';
import { useFirebaseAuth } from 'use-firebase-auth';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const { signInWithEmailAndPassword, signInWithProvider, createUserWithEmailAndPassword } = useFirebaseAuth();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };
  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };
  const handleSubmit = () => {
    signInWithEmailAndPassword(email, password);
  };
  const handleRegisterSubmit = () => {
    createUserWithEmailAndPassword(registerEmail, registerPassword);
  };
  return (
    <div>
        <input id="email" onChange={handleEmailChange}></input>
      <input id="password" onChange={handlePasswordChange}></input>
      <button onClick={handleSubmit}>Signon</button>
      <input id="email" onChange={handleRegisterEmailChange}></input>
      <input id="password" onChange={handleRegisterPasswordChange}></input>
      <button onClick={handleRegisterSubmit}>Register</button>
    </div>
  );
}
export default Login;