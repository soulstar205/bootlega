import React from 'react'
import logo from '../images/new-logo.png'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar =()=>{
    return (
        <div className="nav-container">
            <div className="inner-nav-container">
                <div className="nav-logo">
                  <Link to="/">
                   <img src={logo} alt="" className="logo" />
                  </Link>  
                </div>
                <div className="nav-links">
                <div className="nav-link">
                    <Link to="/ai">
                        <p>A.I</p>
                    </Link>
                    </div>
                    <div className="nav-link">
                    <Link to="/blog">
                        <p>Blog</p>
                    </Link>
                    </div>
                    <div className="nav-link">
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                    </div>
                    <div className="nav-link">
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar