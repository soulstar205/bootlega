import React from 'react'
import './ads.css'


const AdsHorizontal = () =>{
    return(
        <div className='horizontal-ads-container'>
            <div className="ad-container-mobile">
                <a href="https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19" >
                    
                    <img src="https://files.webmoney.ru/files/fD7JVtEB/inline"
                    alt=""
                    style={{height: "60px", width : "468px"}} />
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
export default AdsHorizontal