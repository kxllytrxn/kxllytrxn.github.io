import { Routes, Route, useLocation } from "react-router-dom";
import About from './About';
import Homepage from './Homepage';
import Projects from './Projects';
import React from 'react';

// import { AnimatePresence } from "framer-motion";

import "../App.css";

function AnimatedRoutes () {
  const location = useLocation();
  return (
    // <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={< Projects />}></Route>
      </Routes>
    // </AnimatePresence>
  );
}

export default AnimatedRoutes;