import React from 'react'
import Header from '../components/header/header'
import Body from '../components/body/body'
import Footer from '../components/footer/footer'
import FloatingAd from '../components/ads/floater'
import '../app.css'

const HomePage =()=>{
    return(
        <>
      <Header/>
      {/* <div className="body"> */}
      <Body/>
      {/* </div> */}
      <FloatingAd/>
      <Footer/>
        </>
    )
}
export default HomePage