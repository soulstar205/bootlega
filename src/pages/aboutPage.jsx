import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import About from '../components/about'
import ExternalLink from '../components/ads/smartlink'

const AboutPage =()=>{
    return(
        <>
        <Header notHome/>
        {/* <ExternalLink/> */}
        <About/>
        <Footer/>
        </>
    )
}
export default AboutPage