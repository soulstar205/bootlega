import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import About from '../components/about'
import Contact from '../components/contact'

const ContactPage =()=>{
    return(
        <>
        <Header notHome/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default ContactPage