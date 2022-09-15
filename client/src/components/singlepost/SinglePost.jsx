import React from 'react'
import "./SinglePost.css";
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost()
    },[path]);

    const handleDelete = async () =>{
        try {
        await axios.delete(`/posts/${post._id}`, {
            data: {username: user.username}});
        window.location.replace("/");
        } catch (err) {
            
        }
    };

    const handleUpdate= async() =>{
        try {
            await axios.put(`/posts/${post._id}`, 
                {username: user.username, title, desc});
            setUpdateMode(false);
            } catch (err) {
                
            }
    }
  return (
    <div className='singlepost'>
        <div className="singlepostwrapper">
            {post.photo && (
            <img src={PF + post.photo} alt="" className="singlepostimg" />
            )}

            {
                updateMode ? <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="singleposttitleinput"/> : (

                
            <h1 className="singleposttitle">
                {title}
                {post.username === user?.username && (
                    <div className="singlepostedit">
                    <FaRegEdit className='singleposticon' onClick={()=> setUpdateMode(true)}/>
                    <FaRegTrashAlt className='singleposticon' onClick={handleDelete}/>
                </div>
                )}
                
            </h1>
            )
        }
            <div className="singlepostinfo">
                <span className="singlepostauthor">Author: 
                <Link className='link' to={`/?user=${post.username}`}>
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className='singlepostdescriptioninput'/>: (
            <p className='singlepostdescription'>{desc}</p>
            )}
            {updateMode && 
            <button className="singlepostbutton" onClick={handleUpdate}>Update</button>
            }
        </div>
    </div>
  )
}
