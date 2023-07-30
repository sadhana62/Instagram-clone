import React, { useState } from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase';
import "./Login.css";
function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handlLogin = ()=>{
    signInWithEmailAndPassword(auth,email,password);
  }
  return (
    <div className="login"> 
      <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="insta-icon"></img>
     <input onChange={ e => setEmail(e.target.value)} type="email" placeholder='Email' value={email}></input>
     <input  onChange={ e => setPassword(e.target.value)} type="password" placeholder='Password' value={password}></input>
     <button onClick={handlLogin}>Log In</button>
    </div>
  )
}

export default Login
