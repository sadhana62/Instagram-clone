import React ,{useState}from 'react'
import './Authentication.css';
import Login from './Login';
import Signup from './Signup';
function Authentication() {
  const [active,setActive] = useState("login");
  const handelChange = ()=> {
   setActive(active === "login" ? "singup" : "login")
  }
  return (
    <div className="authentication">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="img"/>
      </div>
      <div className='auth__right'>
        {active === "login" ? (<Login/>):(<Signup/>)}
        <div className="auth__more">
        
          <span>
          {active === "login" ? ( <>Dont Have an account? <button onClick={handelChange}>Sign up</button></>):
          <>Have an account? <button onClick={handelChange}>Log In</button></>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Authentication
