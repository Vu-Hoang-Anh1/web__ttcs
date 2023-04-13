import React from "react";
import "./assets/css/app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import Footer from "./pages/footer";
import About from "./pages/about";
function App() {
  return(
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
          </Route>
          <Route path="/about" element = {<About />}>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;