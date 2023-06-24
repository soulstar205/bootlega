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
            {/* {adsmap.map((ad)=>{
                return(
                    <a href={ad.url} target="blank" key={ad.id}>
                        <Card poster={ad.pic}/>
                    </a>
                )
            })} */}
            <iframe
                title="Ad"
                src="http://www.profitabledisplaynetwork.com/d29fd60cbf0d2b4bc7e71083250dd2a9"
                width={160}
                height={600}
            ></iframe>
        </div>
    )
}
