import React from 'react';
import Github from "../../assets/imgs/icons/github.png";
import Mail from "../../assets/imgs/icons/mail.png";
import LinkedIn from "../../assets/imgs/icons/linkedin.png";
import Spotify from "../../assets/imgs/icons/spotify.png";
import DMGithub from "../../assets/imgs/icons/github_dark.png";
import DMLinkedIn from "../../assets/imgs/icons/linkedin_dark.png";
import DMMail from "../../assets/imgs/icons/mail_dark.png";
import DMSpotify from "../../assets/imgs/icons/spotify_dark.png";

import '../../App.css';

const Footer = ({ isDarkMode }) => {  
    const LMsocials = [
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
            href: "https://open.spotify.com/artist/52bIqBMAuqcyrtv2kv1CYr?si=9rGtRs1TSomSRX23__t7FA",
            alt: "Spotify",
            src: Spotify
        }
    ];
    const DMsocials = [
        {
            href: "https://www.github.com/kxllytrxn",
            alt: "Github",
            src: DMGithub
        },
        {
            href: "https://www.linkedin.com/in/kelly-tran-2210/",
            alt: "LinkedIn",
            src: DMLinkedIn
        },
        {
            href: "mailto:kellytran03@berkeley.edu",
            alt: "Mail",
            src: DMMail
        },
        {
            href: "https://open.spotify.com/artist/52bIqBMAuqcyrtv2kv1CYr?si=9rGtRs1TSomSRX23__t7FA",
            alt: "Spotify",
            src: DMSpotify
        }
    ];

    return (
        <div className="footer">
            <div className="footer-heading">
                <p> built in react.js and designed by kelly</p>
            </div>
            <div className="footer-links">
                {(isDarkMode ? DMsocials : LMsocials).map((social) => {
                    return (
                        <a className="footer-link" href={social.href}> 
                            <img alt={social.alt} src={social.src}></img>
                        </a>
                    );
                })}
            </div>
        </div>
    )
};

export default Footer;