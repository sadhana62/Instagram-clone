import React,{useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../firebase';
import "./Signup.css"
function Signup() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signup"> 
    <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="insta-icon"></img>
   <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' value={email}></input>
   <input  onChange={e => setUsername(e.target.value)} type="text" placeholder='Username' value={username}></input>
   <input  onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password}></input>
   <button onClick={handleSignUp}>Sign Up</button>
  </div>
  )
}

export default Signup
