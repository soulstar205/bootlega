import React, {useEffect, useState} from 'react'
import Card from './card/card'
import meyo from '../images/Banner2.gif'
import './ads.css'



export const Verticals =()=>{

    return(
        <div className="vertical-container">
            <a href='https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19'>

            <img src="https://files.webmoney.ru/files/bSpSsZsr/inline"
                    alt=""
                    style={{height: "400px", width : "240px"}} />
                {/* <iframe
                    title="Ad"
                    src="https://files.webmoney.ru/files/bSpSsZsr/inline"
                    width={240}
                    height={400}
                ></iframe> */}
            </a>
         
        </div>
    )
}

export const AdsterraVertical =()=>{

    const [adURL, setAdURL] = useState('');
    
    useEffect(() => {
        // Fetch the ad URL from the server when the component mounts
        fetch('https://bootlega-blog.vercel.app/bannerAdURL')
        .then((response) => response.text())
        .then((data) => setAdURL(data))
        .catch((error) => console.error('Failed to fetch ad URL', error));
    }, []);
    console.log(adURL)

    return(
         <div>
            {adURL ? (
                <iframe title="AdFrame" src={adURL} height="600" width="160" />
            ) : (
                <p>Loading ad...</p>
            )}
        </div>
    )
}


