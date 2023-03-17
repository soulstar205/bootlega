import React, { useState } from 'react'
import down from './images/down.svg'
import up from './images/up.svg'
import openai from './images/openai.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { aiData } from './aiData';
import {Link} from 'react-router-dom'
import './ai.css'



const AiList = () => {
    const [isOpen, setOpen] = useState(false)
    const [show, setShow] = useState(false);

    return(
        <div className="ai">
            <div className="ai-body">
                <section className="ai-header">
                    <h2 className="ai-topic">All The A.I Tools In One Application</h2>
                    <div className="intro">
                        <p>Welcome to Bootlega A.I that brings together multiple AI tools in one single application! This platform offers a powerful suite of AI functionalities that can transform the way you work and make decisions. Imagine being able to harness the power of natural language processing, speech recognition, and computer vision all in one place. With our platform, you can streamline your workflow, automate complex tasks, and gain valuable insights from your data. This is especially relevant given the increasing importance of AI in various industries. Stay ahead of the curve with our cutting-edge platform and unlock the full potential of AI.</p>
                    </div>
                </section>
                <section className='ai-segment'>
                    {
                        aiData.map((data)=>{
                            return(

                            <div className="segment-inner" key={data.id}>
                                <div className="heading">
                                    <div className={isOpen? "title-desc" : "title-closed"}>
                                        <span className="name">{data.type} </span>
                                   
                                    </div>
                                    
                                </div>
                                <div className={isOpen? "content" : "no-display"}>
                                    {
                                        data.content.map((content)=>{
                                            return(
                                                <OverlayTrigger trigger="click" placement="top" key={content.name} overlay= {
                                                    <Popover id="popover-basic">
                                                    <Popover.Header as="h3">{content.name}</Popover.Header>
                                                    <Popover.Body>
                                                        <div className="pop-body">
                                                        {content.desc }
                                                            <Link to={content.url} target="blank">
                                                            <span className="go">
                                                                {`Visit ${content.name}` }
                                                            </span>
                                                            </Link>
                                                        </div>
                                                    </Popover.Body>
                                                </Popover>
                                                }>
                                                    <div className="each-tool">
                                                        {/* <img src={content.img} alt="" className='each-ai'/> */}
                                                        <p>{content.name}</p>
                                                    </div>
                                                </OverlayTrigger>
                                            )
                                        })
                                    }
                                </div>
                                <div className={isOpen? "open-close" : "open-closed"} >
                                        {
                                            isOpen ?
                                            <span className="icon" onClick={()=>setOpen(false)}>
                                                <img src={up} alt="" />
                                                <p>Close</p>
                                            </span>
                                            :
                                            <span className="icon">
                                                <img src={down} alt="" onClick={()=>setOpen(true)}/>
                                                <p>Open</p>
                                            </span>
                                        }
                                    </div>
                            </div>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}
export default AiList