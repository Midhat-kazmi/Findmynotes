import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import { Search } from "./pages/Search";
import About  from "./pages/About";
import  Upload  from "./pages/Upload";
import Login from "./pages/Login";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import SignUp  from "./pages/SignUp";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/signup" element={<SignUp />} /> 
      
   
      </Routes>
    </Router>
  );
};

export default App;
