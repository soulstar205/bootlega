import React, {useState, useEffect} from 'react'
import './ads.css'


export const AdsHorizontal = () =>{
    return(
        <div className='horizontal-ads-container'>
            <div className="ad-container-mobile">
                <a href='https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19'>
                    
                    <img src='https://files.webmoney.ru/files/a7ozSLv5/inline'
                    alt=""
                    style={{height: "200px", width : "200px"}} />
                </a>
               
            </div>

            <div className="ad-container-desktop">
                <a href="https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19">
                    <img src="https://files.webmoney.ru/files/dKdpetsg/inline" a
                    alt="" 
                    style={{height: "90px", width : "720px"}}/>
                </a>
            </div>
        </div>
    )
}

export const AdsterraHorizontal =()=>{

    const [adURL, setAdURL] = useState('');
    
    useEffect(() => {
        // Fetch the ad URL from the server when the component mounts
        fetch('http://localhost:3001/bannerHori')
        .then((response) => response.text())
        .then((data) => setAdURL(data))
        .catch((error) => console.error('Failed to fetch ad URL', error));
    }, []);
    console.log(adURL)

    return(
         <div>
            {adURL ? (
                <iframe title="AdFrame" src={adURL} height="90" width="720" />
                // <img alt="ads" src={adURL} srcset="" height="90" width="720"/>
            ) : (
                <p>Loading ad...</p>
            )}
        </div>
    )
}

