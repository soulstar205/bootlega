import React from "react";
import './pages.css'
import './contact.css'

function About() {
    return (
        <section className="about">
            <div className="about-me">
              <h1>Welcome to Bootlega<span className="wave">👋</span></h1> 
            </div>
            <div className="about-page">
                <h2 >Free movie search engine</h2>
                
                <p>You can have Bootlega as an app on your phone, all you have to do is click add to home when you see the prompt, or click the download icon in your address bar to install Bootlega on your device.</p>
                <p>Bootlega is a highly functional search engine that lets you search for any movie of your choice and instantly get multiple download and streaming options.</p>
                <p>Bootlega is fitted with over 200 free movie dowload and free streaming sites. How crawler instantly takes your request and runs it through all our indexed free movie sites and returns the best quality download options in seconds.</p>
                <p>How to download any movie on the internet: Enter the name of the movie you want to download in the search bar, put the year of release in a bracket and press GO!</p>
                <p>Download Hollywood/Bollywood/Nollywood movies online free.</p>
                <a href="https://orixflix.com/cl/465353b561256986" rel="nofollow"> <p>Free MP4 movie downloads</p></a>
            </div>
        </section>
    );
};

export default About;
