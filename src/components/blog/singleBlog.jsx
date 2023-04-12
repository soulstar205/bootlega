import React, { useState, useEffect } from 'react'
import { useParams  } from "react-router-dom";
import TimeAgo from 'react-timeago'
import './blog.css'
import axios from 'axios';

const SingleBlog =()=>{
    const { slug } = useParams();
    const [post, setPost] = useState({})

    const url = `https://bootlega-blog.vercel.app/blogs/${slug}`

    useEffect(() => {
        
        const fetch = async () =>{
            const res = await axios.get(url)
            console.log(res.data)
            setPost(res.data)
        }
        fetch()
      }, [slug]);


    return(
        <div className="blog-container">
            <div className="blog-side">
                <div className="post">
                    <div className={post.image? "post-image": ""}>
                       {post.image && <img src={URL.createObjectURL(new Blob([`https://bootlega-blog.vercel.app/uploads/${post.image}`], { type: post.image.contentType }))} alt={post.title} />}
                    </div>
                    <div className="post-title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="date-time">
                        <small><TimeAgo date={post.updatedAt}/></small>
                    </div>
                    <div className="blog-post-body">
                        <text style={{ whiteSpace: "pre-line"}} className="post-body-text">{post.content}</text>
                    </div>
                    <div className="post-footer">
                        <small>{`To download ${"Blade runner"}, click here.`}</small>
                    </div>
                </div>
            </div>
            <div className="ad-side">

            </div>
        </div> 
    )
}
export default SingleBlog