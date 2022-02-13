import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from "./pages/Works";
import About from "./pages/About";
import Stack from "./pages/Stack";
import Contacts from "./pages/Contacts";
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <div className='mx-auto max-w-3xl text-gray-200 font-sans'>
      <Navbar />
      <br />
      <Header />
      <br />
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />}/>
          <Route path="works" element={<Works />}/>
          <Route path="stack" element={<Stack />}/>
          <Route path="contacts" element={<Contacts />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
