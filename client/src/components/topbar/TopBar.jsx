import React from 'react'
import "./TopBar.css";
import { FaFacebookSquare, FaTwitterSquare, FaGlobe, FaLinkedin, FaSearch } from 'react-icons/fa';
import {  Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

    const handleLogout =()=>{
        dispatch({type: "LOGOUT"})
    }
  return (
    <div className='top'>
        <div className="topleft">
            <FaFacebookSquare className='topicon'/>
            <FaTwitterSquare className='topicon'/>
            <FaGlobe className='topicon'/>
            <FaLinkedin className='topicon'/>
        </div>
        <div className="topcentre">
            <ul className="toplist">
                <li className="toplistitem">
                    <Link className='link' to="/">HOME</Link>
                </li>
                <li className="toplistitem">
                <Link className='link' to="/about">ABOUT</Link>
                </li>
                <li className="toplistitem">
                <Link className='link' to="/">CONTACT</Link>
                </li>
                <li className="toplistitem">
                <Link className='link' to="/write">WRITE</Link>
                </li>
                <li className="toplistitem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topright">
            {
                user ? (
                    <Link to="/settings">
                        <img className='topimage' src={PF+user.profilePic} alt=''/>
                    </Link> 
                ) :(
                <ul className='toplist'>
                    <li className='toplistitem'>
                        <Link className='link' to="/login">LOGIN</Link>
                    </li>
                    <li className='toplistitem'>
                        <Link className='link' to="/register">REGISTER</Link>
                    </li>
                </ul>
                )
            }
            <FaSearch className='topsearchicon'/>
        </div>
    </div>
  )
}
