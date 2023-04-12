import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import BlogPage from "./pages/blogPage";
import AiPage from "./pages/aiPage";
import './app.css'
import '../src/components/contact.css'
// import { NOTFOUND } from "dns";

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path='/blog/*' element={<BlogPage/>}/>
          <Route path='/ai' element={<AiPage/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}
function NotFound() {
  return <div className="contact">
  <h2>
    This page does not exist. Press the back button to return to the application.
  </h2>
  </div>;
}

export default App;
