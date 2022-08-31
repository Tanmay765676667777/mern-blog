import React from 'react'
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./Login.css";
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState(false);


  const userRef = useRef();
  const passwordRef = useRef();
  const  { dispatch, isFetching} = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true)
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className='login'>
        <span className="logintitle">Login</span>
        <form action="" className="loginform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            className='logininput' 
            type="text" 
            placeholder="Enter your username" 
            ref={userRef}/>
            <label>Password</label>
            <input 
            className='logininput' 
            type="password" 
            placeholder="Enter your password"
             ref={passwordRef}/>
            <button 
            className="loginbutton" 
            type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className="loginregisterbutton">
          <Link className='link' to='/register'>REGISTER</Link>
        </button>
        {error && <span style={{color: "red", marginTop:"10px"}}>Something West Wrong!</span>}
    </div>
  )
}
