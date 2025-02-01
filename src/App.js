import React from 'react';
import useLocalStorage from 'use-local-storage';
import Footer from './components/headers/Footer';
import Navbar from './components/headers/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import './App.css';
  
export const App = () => {
    const [isDarkMode, setDarkMode] = useLocalStorage("isDark", false);

    const toggleDarkMode = () => {
      setDarkMode(!isDarkMode);
    }

    return (
      <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Router>
        <Navbar 
          isDarkMode={isDarkMode}
          setDarkMode={toggleDarkMode}
        />
        <AnimatedRoutes 
        />
        <Footer 
          isDarkMode={isDarkMode}
        />
      </Router>
    </div>
     
   );
}


export default App;