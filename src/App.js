import React, { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
import './App.css';
  
class App extends Component {
  render() {
    const particlesInit = async (main) => { 
      console.log(main); 
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
      // starting from v2 you can add only the features you need reducing the bundle size 
      await loadFull(main); 
    }; 
    const particlesLoaded = (container) => { 
      console.log(container); 
    }; 

    return (
      <div className="App">
       <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
          autoPlay: true,
          background: { 
            color: "#fffcf5", 
            position: 'relative'
          }, 
          fpsLimit: 120, 
          particles: { 
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 400
              }
            },
            shape: { 
              type: "star", 
            }, 
            size: { 
              random: { 
                enable: true, 
                minimumValue: 0.5, 
              }, 
              value: 1.5, 
            }, 
            color: { 
              value: "#6d9481", 
            },
            opacity: { 
              animation: { 
                enable: true, 
                minimumValue: 0.4, 
                speed: 2, 
                sync: false, 
              }, 
              random: { 
                enable: true, 
                minimumValue: 0.1, 
              }, 
              value: 1, 
            }, 
            interactivity: { 
              detectsOn: "canvas", 
              events: { 
                resize: true, 
              }, 
            }, 
          }, 
        }} 
      /> 
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
     
   );
  }
}

export default App;