import React from 'react'
import "./Header.css"
import Headerimg from "../../Assets/headerimg.jpg";

export default function Header() {
  return (
    <div className='header'>
        <div className="headertitle">
            <span className='headertitlesm'>React & Node</span>
            <span className='headertitlelg'>Blog</span>
        </div>
        <img className='headerimg' src={Headerimg} alt=''/>
    </div>
  )
}
