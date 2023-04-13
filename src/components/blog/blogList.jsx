import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import './blog.css'
import axios from 'axios'
import { Meyo } from '../ads/meyo'

const Blogs = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetch= async()=>{
            const res = await axios.get('https://bootlega-blog.vercel.app/blogs')
            setPosts([...res.data])
            console.log(posts)
        }
        fetch()
    },[])

    return(
        <div className="blog-container">
            <div className="blog-inner">
                <div className="blog-side">
                    <h2>Film Review And Recommendation</h2>
                    <section className='ads'>
                        <Meyo />
                    </section>

                    { posts.map((post)=>{
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

                </div>
            </div>
        </div>
    )
}
export default Blogs