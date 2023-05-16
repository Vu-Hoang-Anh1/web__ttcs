import React from "react";
import "./assets/css/app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login_register from './pages/login_register';
import Blog from "./pages/blog";
function App() {
  return(
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
          </Route>
          <Route path="/Login_register" element={<Login_register/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element = {<About />}/>
          <Route path="/Blog" element = {<Blog />}/>

            
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;