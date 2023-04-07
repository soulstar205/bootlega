import React from 'react'
import './card.css'

const Card =({img, topic, desc, video, poster})=>{
    return(
        <div className="card-container">
            <div className="card-holder">
                <div className="left">
                    {/* <img src={img} alt="" className="pic" /> */}
                    <video width="100%" height="100%" autoPlay loop playsInline muted
                    poster={poster}>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <div className="right">
                    <div className="top-text">
                        <h3>
                            {topic}
                        </h3>
                    </div>
                    <div className="desc">
                        <p>
                        {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card