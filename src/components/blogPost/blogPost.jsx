import React, { useRef, useState } from 'react'
import axios from 'axios';
import './blog-post.css'

function Blogpost() {
    const [post, setPost] = useState('');
    const [topic, setTopic] = useState('');
    const [image, setImage] = useState('');

    const onImageChange=(e)=>{
      setImage(e.target.files[0])
    }

    const submitPost = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', topic);
      formData.append('content', post);
      formData.append('image', image);
      //https://bootlega-blog.vercel.app
      try {
        const res = await axios.post('https://bootlega-blog.vercel.app/blogs', formData);
        console.log(res.data);
        setTopic('');
        setPost('');
        setImage('');
      } catch (err) {
        console.error(err);
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
              <input type="file" accept='image/*' id="files" onChange={onImageChange}/>
              </div>
              <div className="bottom">
                <textarea className="input-area" value={post} onChange={e => setPost(e.target.value)}/>
                <div className="submit">
                  <button className="subtmit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    );
};

export default Blogpost;