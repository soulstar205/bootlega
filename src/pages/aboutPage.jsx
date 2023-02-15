import React from 'react'
import Header from '../components/header/header'
import Body from '../components/body/body'
import Footer from '../components/footer/footer'
import About from '../components/about'

const AboutPage =()=>{
    return(
        <>
        <Header notHome/>
        <About/>
        <Footer/>
        </>
    )
}
export default AboutPage