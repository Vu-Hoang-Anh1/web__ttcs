import React from "react";
import "./assets/css/app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layout/defaultLayout/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Login_register from './pages/login_register/login_register';
import Blog from "./pages/blog/blog";
import Details from "./pages/detail/detail";
function App() {
  return(
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
          <Route path="/Login_register" element={<Login_register/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element = {<About />}/>
          <Route path="/Blog" element = {<Blog />}/>
          <Route path="/products/:productId" element = {<Details/>}/>
          </Route>
            
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;