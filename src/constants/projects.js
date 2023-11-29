import caffeify from "../assets/imgs/projects/coffee-wifi.svg";
import diamond from "../assets/imgs/projects/diamond1.webp";
import enigma from "../assets/imgs/projects/chat.png";
import research from "../assets/imgs/projects/cabrillo.jpeg";
import silent_drives from "../assets/imgs/projects/silent_drives.png";

export const projects = [
    {
        name: "Caffeify",
        details: { 
            desc: "A personalized coffee order based on your Spotify listening"
        },
        image: caffeify,
        back: {
            about: "July 2022",
            back_link: "https://kxllytrxn.github.io/caffeify.io/",
            tech: "ReactJS, Bootstrap Libraries, Spotify Web API, Git",
            desc: "I worked on the Tech Team to update and maintain the Food Pantry web application. I implemented a progress bar and filtering component to optimize userflow."
        }
    },
    {
        name: "EngimaChat",
        details: { 
            desc: "A private chatroom that sends Engima-encrypted messages to one-another"            
        },
        image: enigma,
        back: {
            about: "May 2022",
            tech: "ReactJS, Bootstrap Libraries, Spotify Web API, Git",
            desc: "I worked on the Tech Team to update and maintain the Food Pantry web application. I implemented a progress bar and filtering component to optimize userflow."
        }
    },
    {
        name: "Build Your Own World",
        details: { 
            desc: "A random-world generator with Minecraft-inspired elements and design"
        },
        image: diamond,
        back: {
            about: "November 2022",
            tech: "Java",
            desc: "I co-programmed an algorithmn to create random mazes where the user's avatar must collect all the randomly-placed diamonds within a reduced line-of-sight"
        }
    },
    {
        name: "Silent Drives",
        details: { 
            desc: "40k+ streams amassed across various streaming services"
        },
        image: silent_drives,
        back: {
            about: "November 2022",
            back_link: "https://open.spotify.com/track/4JEgkKQxvGPIuLCcaKboj4",
            tech: "",
            desc: "Since high school, I've been writing and singing songs as a form of storytelling. I've released 3 singles on various streaming services (Spotify, Apple Music, etc) and you can find them all under the artist name kxllyrxse. My latest single 'silent drives' was a collab with one of my friends tdstudio, so give it a listen if you have time."
        }
    },
    {
        name: "Microalgae Research",
        details: { 
            desc: "Studied the effects of pH on microalgae under FRIENDS at the Cabrillo Marine Aquairum",
        },
        image: research,
        back: {
            about: "January - April 2021",
            tech: "",
            desc: "I conducted a 3-month long study on the effects of pH on Isocrysis galbana microalgae to determine if global warming would affect the microbiology ecosystem and other marine life."
        }
    }
]