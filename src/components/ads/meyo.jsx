import React from 'react'
import Card from './card/card'
import meyo from '../images/Banner.gif'
import control from '../images/control-her.png'
import gravity from '../images/gravity.png'
import './ads.css'



export const Meyo =()=>{

    const adsmap = [
         {
             id: 1,
             name: "Meyo",
             url: "https://cashrequestonline.com/?cguid=04c1006e-133a-4f0b-a407-be61297d45f5",
             pic: meyo,
             hide: false

         },
         {
            id: 2,
            name: "Gravity",
            url: "https://www.lovense.com/r/x26or3",
            pic: gravity,
            hide: false
        },
        {
            id: 3,
            name: "control",
            url: "https://www.lovense.com/r/bt2zz8",
            pic: control,
            hide: true
        },

    ]
    // const title = "Do You Need A Fast And Easy Payday Loan?"
    // const desc = "You can a loan with no stress today. We offer anything up to $1000 loans, and its fast and easy. Click here to apply. "
    // const video = "https://ap-cy.meyo.one/www_static/video/video2.mov"
    // const url = "https://cashrequestonline.com/?cguid=04c1006e-133a-4f0b-a407-be61297d45f5"

    
    return(
        <div className="meyo-container">
            {adsmap.map((ad)=>{
                return(
                    <a href={ad.url} target="blank" className={ad.hide}>
                        <Card poster={ad.pic}/>
                    </a>
                )
            })}
        </div>
    )
}
