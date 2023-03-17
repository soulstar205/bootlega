import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import HomePage from "./pages/homePage"
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
// import BlogPage from "./pages/blogPage";
import AiPage from "./pages/aiPage";
import './app.css'

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/ai' element={<AiPage/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
