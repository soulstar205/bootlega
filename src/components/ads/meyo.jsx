import React from 'react'
import Card from './card/card'
import cover from '../ai/images/cover.png'



export const Meyo =()=>{
    const title = "Meyo is a very popular social dating app that pays you to interract with people"
    const desc = "MeYo helps you break ice by quickly start chatting; as intimacy rises, it unlocks more and all interactive & interesting features. \
    With the MeYo app, you can video call, chat with a friend, or group chat. If you don’t have friends on the lists, the app automatically suggests users that is closer to your location. To provide some suggestions, you need to activate your GPS location. \
    JOIN Meyo, CLICK HERE"
    const video = "https://ap-cy.meyo.one/www_static/video/video2.mov"

    return(
        <div className="meyo-container">
            <a href="https://s.meyo.one/TCt3dM" target="blank">
                <Card topic={title} desc={desc} video={video} poster={cover}/>
            </a>
        </div>
    )
}
