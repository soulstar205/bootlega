import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
// import {Buffer} from 'buffer';
import axios from 'axios'
import { Meyo } from '../ads/meyo'
import { Verticals, AdsterraVertical } from '../ads/verticals'
import {AdsHorizontal} from '../ads/ads'
import ClipLoader from "react-spinners/ClipLoader";
import './blog.css'

const Blogs = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] =useState(false)

    useEffect(()=>{
        setLoading(true)
        const fetch= async()=>{
            const res = await axios.get('https://bootlega-blog.vercel.app/blogs')
            setPosts([...res.data])
            setLoading(false)
        }
        fetch()
    },[])


    return(
        <div className="blog-container">
            <div className="blog-inner">
                <div className="blog-side">
                    <div className="blog-heading">
                        <h2>Bootlega Film Review</h2>
                    </div>
                    <section className='ads'>
                        <AdsHorizontal/>
                        <Meyo />
                        <div id="container-980ab69f0c912037141d7af1fddee000"></div>
                    </section> 
                    {
                        loading && 
                        <div className='loading'>
                        <span className="movie-result">Loading blog posts... Please wait.</span>
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
                    {
                    // posts.map((post, index) => renderContent(post, index))
                    posts.sort((a, b)=> new Date(b.updatedAt) - new Date(a.updatedAt) ).map((post)=>{
                        return(
                    <Link to={`/blog/${post._id}`} state={{ slug: post._id, id: post._id }}>
                    <div className="each-blog" key={post._id}> 
                        <div className="blog-card" key=''>
                            <div className="card-image">
                            {/* {post.image && <img src={`data:${post.image.contentType};base64, ${Buffer.from(post.image).toString('base64')}`} alt={post.title} />} */}
                            {post.image && <img loading='lazy' src={post.image} data-lazy-src={post.image} alt={post.title} />}
                            </div>
                            <div className="card-text">
                                <div className="blog-card-text">
                                    <h4 className="blog-card-title">{post.title}</h4>
                                    <p className="blog-card-description">{post.content}</p>
                                </div>
                                <div className="blog-card-footer">
                                    <small className="date"> <TimeAgo date={post.updatedAt}/></small>
                                    <span className='read'>Read More</span>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                    </Link>
                        )
                    })
                    }
                </div>
                <div className="ad-side">
                    <Verticals/>
                    <AdsterraVertical/>
                </div>
            </div>
        </div>
    )
}
export default Blogs