import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import cd from "../assets/imgs/homepage/cd.svg";
import LMGithub from "../assets/imgs/icons/github.png";
import LMMail from "../assets/imgs/icons/mail.png";
import LMLinkedIn from "../assets/imgs/icons/linkedin.png";
import LMSpotify from "../assets/imgs/icons/spotify.png";
  
const Homepage = () => {  
    const socials = [
            {
                href: "https://www.github.com/kxllytrxn",
                alt: "Github",
                src: LMGithub
            },
            {
                href: "https://www.linkedin.com/in/kelly-tran-2210/",
                alt: "LinkedIn",
                src: LMLinkedIn
            },
            {
                href: "mailto:kellytran03@berkeley.edu",
                alt: "Mail",
                src: LMMail
            },
            {
                href: "https://open.spotify.com/artist/52bIqBMAuqcyrtv2kv1CYr?si=9rGtRs1TSomSRX23__t7FA",
                alt: "Spotify",
                src: LMSpotify
            }
        ];
    


    return (
        <div className="homePage">
            <div className="heroContainer">
                <div className="heroText">
                    <h3>
                        hi there! i'm
                    </h3>
                    <h1> 
                        kelly tran
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
                        senior @ UC Berkeley studying computer science
                    </h3>
                    <h2> previously: </h2>
                    <h3>
                        data engineering intern @ PwC
                    </h3>

                    <h2> listening to: </h2>
                    <h3>
                        a blend of r&b, edm & indie pop
                    </h3>
                    {/* <h2>
                        let's connect! &#8595; 
                    </h2> */}

                    
                        
                </div>
                <div className="spotifyContainer">
                    <h2> the latest hits: </h2>
                    <iframe style={{borderRadius: 12 + 'px'}} title="Spotify Playlist" src="https://open.spotify.com/embed/playlist/1aA5ZAVhMEDS7T8bmA9mLZ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
)};
  
export default Homepage;