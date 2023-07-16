import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Left_Logo from "../assets/imgs/icons/logo-left.png";
import Right_Logo from "../assets/imgs/icons/logo-right.png";
import { Squash as Hamburger } from 'hamburger-react'
import '../App.css';

  function Navbar (){  
    const [isOpen, setOpen] = useState(false);
    const toggleHamburger = () => {
      setOpen(!isOpen);
    }

    const navbarLinks = [
      {
        to: "/",
        link: "home"
      },
      {
        to: "/about",
        link: "about me"
      },
      {
        to: "/projects",
        link: "what i do"
      }
    ];

    const renderLinksHorizontal = navbarLinks.map((item) => 
    { return (
      <li>
        <Link className="App-link horizontal" to={item.to}>{item.link}</Link>
      </li>
    )});

    const renderLinksVertical = navbarLinks.map((item) => 
    { return (
      <li>
        <Link className="App-link vertical" style={ isOpen ? {display: "flex"} : {display: "none"}} to={item.to}>{item.link}</Link>
      </li>
    )});

    return (
        <div className="Navbar">
            <div className="Logo">
                <img  
                    alt="logo" 
                    className="logoLeft"
                
                    src={Left_Logo}></img>
                  <h3 className="logoText"> KT </h3>
                  <img  
                    alt="logo" 
                    className="logoRight"
                    src={Right_Logo}>
                </img>
            </div>
              <ul className="App-header">
                {renderLinksHorizontal}           
              </ul>
              <div className='hamburger' onClick={toggleHamburger}>
                  <Hamburger></Hamburger>
              </div>   
              <ul className="App-header-vertical">
                {renderLinksVertical}           
              </ul>
             
        </div>
    )

  };
  export default Navbar;