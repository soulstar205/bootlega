import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
// const Home = React.lazy(() => import('./pages/homePage/home'))
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Blogs from '../components/blog/blogList'
import SingleBlog from '../components/blog/singleBlog'
import Blogpost from '../components/blogPost/blogPost'
import Login from '../components/blogPost/login'
import FloatingAd from '../components/ads/floater'
// import { ProtectedRoute } from './protectedRoute'

const BlogPage = () => {
    return(
        <div>
            <Header notHome/>
            <Routes>
                <Route path="/" element={<Blogs/>}/>
                <Route path="/:slug" element={<SingleBlog/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/post" element={< Blogpost/>}/>  
            </Routes>
            <FloatingAd/>
            <Footer/>
        </div>
    )
}
export default BlogPage

