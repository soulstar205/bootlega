import React, { useRef, useState } from 'react'
import {errorUtils} from '../error'
import axios from 'axios';
import './blog-post.css'

function Blogpost() {
    const [post, setPost] = useState('');
    const [topic, setTopic] = useState('');
    const [image, setImage] = useState('');


    const convertToBase64=(e)=>{
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload =()=>{
        console.log(reader.result)
        setImage(reader.result)
      }
      reader.onerror = error => {
        console.log("Error: ", error)
      }
    }

    const submitPost = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', topic);
      formData.append('content', post);
      formData.append('image', image);
      //https://bootlega-blog.vercel.app/blogs

      try {
        const res = await axios.post('http://localhost:3001/blogs', formData);
        console.log(res.data);
        setTopic('');
        setPost('');
        setImage('');
      } catch (err) {
        const postError = errorUtils.getError(err)
        console.log(postError)
      }
    };

    return (
        <div className="container">
          <div className="post-inner">
            <form action="" onSubmit={submitPost} className="post-form">
            <div className="top">
              <div className="input">
                <input type="text" placeholder='TOPIC' value={topic} className="topic" onChange={e => setTopic(e.target.value)}/>
              </div>
              <input type="file" accept='image/*' id="files" onChange={convertToBase64}/>
              </div>
              <div className="bottom">
                <textarea className="input-area" value={post} onChange={e => setPost(e.target.value)}/>
                <div className="submit">
                  <button className="subtmit-btn">
                    Submit
                  </button>
                </div>
                {image === "" || image === null? "": <img src={image}/>}
              </div>
            </form>
          </div>
      </div>
    );
};

export default Blogpost;