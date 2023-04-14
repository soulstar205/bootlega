import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import './blog.css'
import axios from 'axios'
import { Meyo } from '../ads/meyo'
import { Verticals } from '../ads/verticals'
import ClipLoader from "react-spinners/ClipLoader";

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
                        <Meyo />
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
                         
                    
                    posts.map((post)=>{
                        return(
                    <Link to={`/blog/${post._id}`} state={{ slug: post._id, id: post._id }}>
                    <div className="each-blog" key={post._id}> 
                        <div className="blog-card" key=''>
                            <div className="card-image">
                            {  post.image &&  <img src={`http://localhost:3001/${post.image}`} alt="" />}
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
                </div>
            </div>
        </div>
    )
}
export default Blogs