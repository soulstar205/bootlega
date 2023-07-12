import React from 'react'
import './ads.css'


const AdsHorizontal = () =>{
    return(
        <div className='horizontal-ads-container'>
            <div className="ad-container-mobile">
                <iframe
                    title="Ad"
                    src="https://files.webmoney.ru/files/fD7JVtEB/inline"
                    width={468}
                    height={60}
                ></iframe>
                <a href='https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19'></a>
            </div>

            <div className="ad-container-desktop">
                <iframe
                    title="Ad"
                    src="https://files.webmoney.ru/files/dKdpetsg/inline"
                    width={720}
                    height={90}
                ></iframe>
                <a href='https://cashbox.money/r/ac0d1d9d65c34c069cc64dcc67d86c19'></a>
            </div>
        </div>
    )
}
export default AdsHorizontal