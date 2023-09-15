import React, {useState, useEffect} from 'react'
import './ads.css'
import mobile from '../images/Animated-300-2.gif'
import horizontal from '../images/horizontal.gif'


export const AdsHorizontal = () =>{
    return(
        <div className='horizontal-ads-container'>
            <div className="ad-container-mobile">
                <a href='https://chaturbate.com/in/?tour=LQps&campaign=xvBLi&track=default&room=soulstar205'>
                    
                    <img src={mobile}
                    alt=""
                    style={{height: "300px", width : "300px"}} />
                </a>
               
            </div>

            <div className="ad-container-desktop">
                <a href="https://chaturbate.com/in/?tour=LQps&campaign=xvBLi&track=default&room=soulstar205">
                    <img src={horizontal} 
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

