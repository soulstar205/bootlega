import React, { useState } from 'react';
import './blog-post.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const submitPost=(e)=>{
      e.preventDefault()
      console.log({username, password})
    }


    return (
        <div className="container">
          <div className="login-inner">
              <h2>Admin Login</h2>
            <form action="" onSubmit={submitPost} className="post-form">
            <div className="top">
              <div className="input">
                <input type="text" placeholder='USERNAME' className="username" onChange={e => setUsername(e.target.value)}/>
              </div>
              <div className="input">
                <input type="password" placeholder='PASSWORD' className="username" onChange={e => setPassword(e.target.value)}/>
              </div>
              </div>
              <div className="bottom">
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

export default Login;