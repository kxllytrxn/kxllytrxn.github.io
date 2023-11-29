import ashored from "../assets/imgs/projects/ashored.png";
import bnc from "../assets/imgs/projects/bnc.png";
import braindump from "../assets/imgs/projects/braindump.png";
import saas from "../assets/imgs/projects/saas.jpg";
import um_logo from "../assets/imgs/projects/um.jpeg";
import wdd from "../assets/imgs/projects/wdd.png";


export const experienceData = [
    {
        name: "UnitedMasters",
        image: um_logo,
        link: "https://unitedmasters.com/",
        title: "Web UI Engineering Intern",
        details: {
            desc: "June - August 2023",
            more: "SF, CA"
        },
        back: {
            about: "UM is a cutting-edge music distrbution company that allows artists to take ownership of their own music through multiple ventures. ",
            tech: "ReactJS, REST APIs, Git, Docker, Figma",
            desc: "I implemented 4 features for an internal dashboard with 20+ daily users that displays detailed track information in an intutive format using ReactJS.",
        }
    },
    {
        name: "Web Design DeCal",
        image: wdd,
        link: "https://wdd.github.io/",
        title: "Course Instructor",
        details: {
            desc: "August 2022 - Present",
            more: "UC Berkeley"
        },
        back: {
            about: "WDD is a 2-unit course teaching 80+ students semesterly web design and development principles, covering technologies such as HTML, CSS, JS and Figma. ",
            tech: "HTML, CSS, Javascript, Figma, Git",
            desc: "This beginner-friendly class is for students for all backgrounds, with our larger mission being to make the computer science field more accessible and approachable.",
        }
    },
    {
        name: "SAAS Berkeley",
        image: saas,
        link: "https://saas.berkeley.edu/",
        title: "VPO | Web Developer",
        details: {
            desc: "August 2022 - Present",
            more: "UC Berkeley"
        },
        back: {
            about: "SAAS offers data science/ machine learning projects to industry clients such as Verizon, J&J and Github.",
            tech: "HTML, CSS, Bootstrap, Django, AWS",
            desc: "As Web Developer, I redesigned and implemented the homepage with 5+ new features alongside overseeing the data migration to AWS. ",
            more: "I currently serve as the Vice President of Operations, where I oversee day-to-day internal workings alongside our finances."
        }
    },
    {
        name: "Braindump",
        image: braindump,
        link: "https://braindump.group/",
        title: "Web Developer",
        details: {
            desc: "March 2023",
            more: "UC Berkeley"
        },
        back: {
            about: "Braindump is a contract consulting company for pre-seed, seed, and series A-C companies.",
            tech: "HTML, CSS, Bootstrap Libaries, Particles.js, Figma",
            desc: "I designed and built their current website from scratch using Figma, HTML, CSS and JS libraries in 1 week. "
        }
    },
    {
        name: "BNC Food Pantry",
        image: bnc,
        link: "https://www.ucbbncfp.com/",
        title: "Tech Team Intern",
        details: {
            about: null,
            desc: "August - December 2022",
            more: "UC Berkeley"
        },
        back: {
            about: "The UC Berkeley Basic Needs Center Food Pantry provides free groceries and pantry items weekly to any UC Berkeley community member.",
            tech: "NextJS, TailwindCSS, Google Firebase, Vercel",
            desc: "I worked on the Tech Team to update and maintain the Food Pantry web application. I implemented a progress bar and filtering component to optimize userflow."
        }
    },
    {
        name: "Ashored Innovations",
        image: ashored,
        link: "hhttps://ashored.ca/",
        title: "UI/UX Consultant",
        details: {
            about: null,
            desc: "January - May 2023",
            more: "SEAB"
        },
        back: {
            about: "Ashored Innovations is a sustainable fishing company that develops ropeless fishing technology to reduce whale endangerment.",
            tech: "Figma",
            desc: "I worked with a team of 5 consultants to create a hi-fi prototype of Ashored's fishing software for fishermen to use."
        }
    }
]
