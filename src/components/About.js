import React from 'react';
import Annie from "../assets/imgs/about/annie.jpg";
import Cal_Day from "../assets/imgs/about/cal-day.jpg";
import Concert from "../assets/imgs/about/concert.jpg";
import Glade from "../assets/imgs/about/glade.jpg";
import Headshot from "../assets/imgs/about/kelly-headshot.jpg"
import Jenny from "../assets/imgs/about/jenny.jpg";
import Matcha from "../assets/imgs/about/matcha.jpg";
import Tea_Party from "../assets/imgs/about/teaparty.jpg";
import Soph from "../assets/imgs/about/sophme.jpg";

import { motion } from "framer-motion";

import '../App.css';
  
function About (){

    const imagesOne = [
        {
            alt: "glade",
            src: Glade
        },
        {
            alt: "sodoi concert",
            src: Concert
        },
        {
            alt: "Cal Day",
            src: Cal_Day
        },
        {
            alt: "matcha",
            src: Matcha
        }
    ];
    const imagesTwo = [
        {
            alt: "Jenny",
            src: Jenny
        },
        {
            alt: "Soph",
            src: Soph
        },
        {
            alt: "annie",
            src: Annie
        },
        {
            alt: "tea_party",
            src: Tea_Party
        }
    ];
    
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >

        <div className="aboutPage">
            <div className="aboutContainer">
                <div className="headshotImageContainer">
                    <img alt="Kelly Tran Headshot" className='Headshot' src={Headshot}></img>
                </div>
                <div className="aboutText">
                    <h2>about me</h2>
                    <p>
                    While originally from SoCal, I currently live in the Bay attending UC Berkeley studying Computer Science and Data Science. 
                    <br></br><br></br>
                    I believe in the power of utilizing <strong> creative thinking </strong> to solve everyday problems. 
                    Between making latte art and storytelling my life through songs, expression of creativity feeds and fuels me.  
                    This driving force has led me to pursue front-end development,
                    a fulfilling avenue where I build and create intutive interfaces that are friendly to both user and engineer. 

                    <br></br><br></br>
                    Outside the student life, I enjoy de-stressing through exploring new cafes & restaurants, thrifting vintage pieces at flea markets, and cooking both generational and fusion recipes with my friends.
                    </p>
                </div>
            </div>
            <div className="imageCarouselContainer">
                <div className="scrollParent">
                    <div className="scrollElement primary">
                        {imagesOne.map((img) => {
                            return (
                                <img alt={img.alt} src={img.src}></img>
                            );
                        })}
                    </div>
                    <div className="scrollElement secondary">
                        {imagesOne.map((img) => {
                            return (
                                <img alt={img.alt} src={img.src}></img>
                            );
                        })}
                    </div>
                </div>            
            </div>
            <div className="imageCarouselContainer">
                <div className="scrollParent">
                    <div className="scrollElement primary2">
                        {imagesTwo.map((img) => {
                            return (
                                <img alt={img.alt} src={img.src}></img>
                            );
                        })}
                    </div>
                    <div className="scrollElement secondary2">
                        {imagesTwo.map((img) => {
                            return (
                                <img alt={img.alt} src={img.src}></img>
                            );
                        })}
                    </div>
                </div>            
            </div>
        </div>
    </motion.div>
)};

export default About;