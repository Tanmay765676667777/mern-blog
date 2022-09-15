import React, { useEffect, useContext } from 'react';
import "./SideBar.css";
import Profile from "../../Assets/profile.jpeg";
import { FaFacebookSquare, FaTwitterSquare, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';



export default function SideBar() {
  const [cats, setCats] = useState([]);
  const {user} = useContext(Context);
  const PF = "http://localhost:5000/images/";



  useEffect(()=>{
    const getCats = async()=>{
      const res= await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            <span className='sidebartitle'>ABOUT ME</span>
            <img src={user? PF+user.profilePic : Profile} alt=''/>
            <p>
            My Name is {user? user.username : "Tanmay Nath"}. I am from Howrah. I have completed my Bachelor of Technology from Guru Nanak Institute of Technology, Kolkata. My strength is sincerely hardworking and self motivated. During college I learn technology like Java, C, C++, Python, JavaScript. Then I got One job opportunity from CBNITS Where I am working as a React JavaScript Developer. Currently, I am working at Tata Consultancy Service as a IoTDE Developer. Where I am working with Technology like Python, ArcGIS, GIS, Magik Programming, Smallworld.
            </p>
        </div>
        <div className="sidebaritem">
        <span className='sidebartitle'>CATEGORIES</span> 
        <ul className="sidebarlist">
            {cats.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarlistitem">{c.name}</li>
            </Link>
            ))}
        </ul>
        </div>
        <div className="sidebaritem">
            <span className='sidebartitle'>FOLLOW US</span>
            <div className="sidebarsocial">
            <FaFacebookSquare className='sidebarcon'/>
            <FaTwitterSquare className='sidebaricon'/>
            <FaGlobe className='sidebaricon'/>
            <FaLinkedin className='sidebaricon'/>
            </div>
        </div>
    </div>
  )
}
