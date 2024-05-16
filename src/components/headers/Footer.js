import React from 'react';
import Github from "../../assets/imgs/icons/github.png";
import Mail from "../../assets/imgs/icons/mail.png";
import Instagram from "../../assets/imgs/icons/instagram.png";
import LinkedIn from "../../assets/imgs/icons/linkedin.png";
import Spotify from "../../assets/imgs/icons/spotify.png";
import '../../App.css';

function Footer () {
    const socials = [
        {
            href: "https://www.github.com/kxllytrxn",
            alt: "Github",
            src: Github
        },
        {
            href: "https://www.linkedin.com/in/kelly-tran-2210/",
            alt: "LinkedIn",
            src: LinkedIn
        },
        {
            href: "mailto:kellytran03@berkeley.edu",
            alt: "Mail",
            src: Mail
        },
        {
            href: "https://www.instagram.com/kxllytrxn/",
            alt: "Instagram",
            src: Instagram
        },
        {
            href: "https://open.spotify.com/artist/52bIqBMAuqcyrtv2kv1CYr?si=9rGtRs1TSomSRX23__t7FA",
            alt: "Spotify",
            src: Spotify
        }
    ];

    return (
        <div className="footer">
            <div className="footer-heading">
                <h1> let's connect </h1>
                <div className="footer-links">
                    {socials.map((social) => {
                        return (
                            <a className="footer-link" href={social.href}> 
                                <img alt={social.alt} src={social.src}></img>
                            </a>
                        );
                    })}
        
                </div>
                <p> built in react.js and designed by kelly</p>
            </div>
            
            
        </div>
    )
};

export default Footer;