import React from 'react'
import Card from './card/card'
import meyo from '../images/Banner2.gif'
import './ads.css'



export const Verticals =()=>{

    const adsmap = [
         {
             id: 1,
             name: "Meyo",
             url: "https://cashrequestonline.com/?cguid=04c1006e-133a-4f0b-a407-be61297d45f5",
             pic: meyo,
             hide: false
         },

    ]

    return(
        <div className="vertical-container">
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
