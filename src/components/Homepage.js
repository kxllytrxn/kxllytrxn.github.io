import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import cd from "../assets/imgs/homepage/cd.svg";
  
function Homepage () {
    
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
        <div className="homePage">
            <div className="heroContainer">
                <div className="heroText">
                    <h3>
                        hi there! i'm
                    </h3>
                    <h1> 
                        Kelly Tran
                    </h1>
                    <h4> 
                        a <strong>full-stack developer</strong> who loves building friendly products for <strong>all</strong>
                    </h4>
                    <div className="buttonContainer">
                        <Link className="homeButtons" to="/about">
                            about me <p> &#8594; </p>
                        </Link>
                        <Link className="homeButtons" to="/projects">
                            what i do <p> &#8594; </p>
                        </Link>
                    </div>
                </div>
                <div className="recordContainer">
                    <div className="recordCircle">
                        <a href='https://open.spotify.com/track/3TY7q9rofAemFWnloXVP3T?si=0c2101ee435d4bae'>
                            <img alt="Vinyl Record Player" src={cd}></img>

                        </a>
                    </div>                
                </div>
            </div>
            <div className="musicContainer">
                <div className="latestInfo">
                    <h2> currently: </h2>
                    <h3>
                        junior @ UC Berkeley studying computer science
                    </h3>
                    <h2> previously: </h2>
                    <h3>
                        swe intern @ UnitedMasters
                    </h3>
                    <h2> listening to: </h2>
                    <h3>
                        a blend of r&b, edm & indie pop
                    </h3>
                </div>
                <div className="spotifyContainer">
                    <h2> the latest hits: </h2>
                    <iframe style={{borderRadius: 12 + 'px'}} title="Spotify Playlist" src="https://open.spotify.com/embed/playlist/1aA5ZAVhMEDS7T8bmA9mLZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        </motion.div> 
)};
  
export default Homepage;