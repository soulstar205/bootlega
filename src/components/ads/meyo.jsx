import React from 'react'
import Card from './card/card'
import cover from '../ai/images/cover.png'
import banner from '../images/Banner.gif'



export const Meyo =()=>{
    const title = "Do You Need A Fast And Easy Payday Loan?"
    const desc = "You can a loan with no stress today. We offer anything up to $1000 loans, and its fast and easy. Click here to apply. "
    const video = "https://ap-cy.meyo.one/www_static/video/video2.mov"

    return(
        <div className="meyo-container">
            <a href={process.env.REACT_APP_URL} target="blank">
                <Card topic={title} desc={desc} poster={banner}/>
            </a>
        </div>
    )
}
