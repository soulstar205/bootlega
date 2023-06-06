import React, { useState, useEffect } from 'react'
import { useParams  } from "react-router-dom";
import TimeAgo from 'react-timeago'
// import {Buffer} from 'buffer';
import { Meyo } from '../ads/meyo';
import './blog.css'
import axios from 'axios';
import { Verticals } from '../ads/verticals';
import ClipLoader from "react-spinners/ClipLoader";


const SingleBlog =()=>{
    const { slug } = useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    const url = `https://bootlega-blog.vercel.app/blogs/${slug}`

    useEffect(() => {
        setLoading(true)
        const fetch = async () =>{
            const res = await axios.get(url)
            setPost(res.data)
            setLoading(false)
        }
        fetch()
      }, [slug]);

        // const blob = new Blob([Int8Array.from(post.image.data )], {type: post.image.contentType });

        // const imageUrl = window.URL.createObjectURL(blob);


    return(
        <div className="blog-container">
            <div className="blog-side">
            {
                        loading && 
                        <div className='loading'>
                        <span className="movie-result">Loading blog post... Please wait.</span>
                          <ClipLoader
                            color={"blue"}
                            loading={loading}
                            cssOverride={""}
                            size={150}
                            aria-label="Please wait..."
                            data-testid="loader"
                          />
                        </div> 
                    }
                <div className="post">
                    <div className={post.image? "post-image": ""}>
                       {/* {post.image && <img src={`data:${post.image.contentType};base64, ${Buffer.from(post.image).toString('base64')}`} alt={post.title} />} */}
                       {post.image && <img src={post.image} alt={post.title} />}
                    </div>
                    <div className="post-title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="date-time">
                        <small><TimeAgo date={post.updatedAt}/></small>
                    </div>
                    <div className="blog-post-body">
                    <section className='ads'>
                        <Meyo />
                        <div id="container-980ab69f0c912037141d7af1fddee000"></div>
                    </section>
                        <text style={{ whiteSpace: "pre-line"}} className="post-body-text">{post.content}</text>
                    </div>
                    <div className="post-footer">
                        {/* <small>{`To download ${"Blade runner"}, click here.`}</small> */}
                    </div>
                    <div id="container-980ab69f0c912037141d7af1fddee000"></div>
                </div>
            </div>
            <div className="ad-side">
                <Verticals/>
            </div>
        </div> 
    )
}
export default SingleBlog