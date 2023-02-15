import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import HomePage from "./pages/homePage"
import './app.css'
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import About from './components/about'
import Contact from "./components/contact";
import Footer from "./components/footer/footer";

function App() {

  const AppLayout = () => (
    <>
      <Navbar />
    </>
  );
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
