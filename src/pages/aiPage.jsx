import React from 'react' 
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AiList from '../components/ai/aiList'
import FloatingAd from '../components/ads/floater'
import './pages.css'

const AiPage =()=>{
    return (
        <div>
            <Header notHome/>  
                <AiList/>
                <FloatingAd/>
            <Footer/>
        </div>
    )
}
export default AiPage