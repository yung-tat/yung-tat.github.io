import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from "./pages/Works";
import About from "./pages/About";

function App() {
  return (
    <div className='mx-auto max-w-3xl text-gray-200 font-sans'>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<About />}/>
      </Routes>
      <Routes>
        <Route path="works" element={<Works />}/>
      </Routes>
      <Routes>
        <Route path="contacts" element={<>YEAH</>}/>
      </Routes>
    </div>
  );
}

export default App;
