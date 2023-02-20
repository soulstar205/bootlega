import React from 'react'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ShareIcon from '@mui/icons-material/Share';
import './ads.css'
import heart from '../../components/images/heart.svg'
import chat from '../../components/images/chat.svg'
import share from '../../components/images/share.svg'

const Ads = () =>{
    return(
        <div className="ad-container">
            <a href="https://u-annon.com"> 
            <div className="u-annon">
                <div className="u-annon-inner"> 
                    <div className="post-ad">
                        {/* ///importing .each-post from anonynous  */}

                        <div className="each-post" >
                                <div className="inner-post">

                                    <div className="topic-header" >
                                    
                                        <div className="topic-right">
                                            <div className="title-category">
                                            <div className='flex'>
                                                        <span className="username-post">{"Maryjane"} ~ </span>
                                                        <small className='category-name'> {"Relationships"}</small>
                                                            {/* <small>{`Posted 6hours ago`}</small> */}
                                                    </div> 
                                                    </div>
                                                        <h6 className='post-topic'>
                                                            {"Do men find it embarrasing or emasculating when a women approaches them first?"}
                                                        </h6>
                                                </div>
                                            </div>
                                            
                                            <div className="post-text-none"> 
                                           
                                            </div>
                                            
                                            <div className="display-reactions-2">
                                                <div className="comment-love">

                                                <div className="react-cut">
                                                    <span className="react">
                                                        {/* <ChatBubbleOutlineIcon fontSize="small" 
                                                        style={{"cursor": "pointer", "color": "#1A3C6E"}}/> */}
                                                        <img src={chat} alt="" className='icon'/>
                                                    </span>
                                                    <span className="react">{"18"}</span>
                                                </div>
                                                
                                                    <div className="react-cut">

                                                        <span className="react">
                                                            {/* <FavoriteBorderIcon fontSize="small" style={{"cursor": "pointer", "color": "#1A3C6E"}}/> */}
                                                            <img src={heart} alt="" className='icon'/>
                                                        </span>
                                                        <span className="react" >{"21"}</span>
                                                    </div>
                                                </div>
                                                <div className="share"> 
                                                    <span className="react">
                                                        {/* <ShareIcon fontSize="small" style={{"cursor": "pointer", "color": "#1A3C6E"}}/> */}
                                                        <img src={share} alt="" className='icon'/>
                                                    </span>
                                                </div>
                                            </div>
                                            </div>
                                                <div className="bottom-panel-none">

                                                </div>
                                            </div>
                                        </div>
                    <div className="ad-message">
                        <div className='ad-title'>
                            <p>u-annon.com: Adult anonynous hangout</p>
                        </div>
                        <div className="message">
                            <p>
                                We are a community of adults who believe in free expression and self liberation. Join us now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>
    )
}
export default Ads