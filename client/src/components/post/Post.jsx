import React from 'react'
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <Link className='link post' to={`/post/${post._id}`}>
       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postinfo">
            <div className="postcats">
              {post.categories.map((c)=>(
                <span className="postcat">{c.name}</span>
              ))}
            </div>
            <span className="posttitle">{post.title}</span>
            <hr/>
            <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='postdescription'>{post.desc}</p>
    </Link>
  )
}
