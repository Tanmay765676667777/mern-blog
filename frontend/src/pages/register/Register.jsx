import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)
    try {
    const res = await axios.post("/auth/register",{
      username,
      email,
      password
    });
    res.data && window.location.replace("/login")
  } catch (err) {
    setError(true)
  }
  };

  return (
    <div className='Register'>
        <span className="Registertitle">Register</span>
        <form action="" className="Registerform" onSubmit={handleSubmit}>
            <label>UserName</label>
            <input onChange={e=>setUsername(e.target.value)} className='Registerinput' type="text" placeholder="Enter your username"/>
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value)} className='Registerinput' type="text" placeholder="Enter your email"/>
            <label>Password</label>
            <input onChange={e=>setPassword(e.target.value)} className='Registerinput' type="text" placeholder="Enter your password"/>
            <button className="Registerbutton" type='submit'>Register</button>
        </form>
        <button className="Registerloginbutton">
          <Link className='link' to="/login">LOGIN</Link>
        </button>
        {error && <span style={{color: "red", marginTop:"10px"}}>Something West Wrong!</span>}
    </div>
  )
}
