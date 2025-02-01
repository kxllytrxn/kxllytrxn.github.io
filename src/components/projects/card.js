import React, { useState } from 'react';
import Play from "../../assets/imgs/icons/play.png";
import Rewind from "../../assets/imgs/icons/rewind.png";
import Fastforward from "../../assets/imgs/icons/fastforward.png";
import '../../App.css';

export default function Card ({ name, image, title, details, link, back }) {
    const [flip, setFlip] = useState(false);

    return (
        <div className={`projectCard ${flip ? "flip" : "" }`}>
            <div className="cardFront" onClick={() => setFlip(!flip)}>
                <div className="cardImageContainer">
                    <img className="cardImage" alt="cardImage" src={image}></img>
                </div>
                <div className="cardHeader">
                    <h3> {name} </h3>
                </div>
               
                <div className="cardInfo">
                    <h4> {title} </h4>
                </div>
                <div  className="cardDetails">
                    {details ?  <h5> {details?.desc} {link ? '|' : "" }  {link ? <a href={link}> Link </a>: "" } </h5>
                    : null }
                </div>
                <div  className="cardImageContainer">
                    <img className="playButton" alt="rewind" src={Rewind}></img>
                    <img className="playButton" alt="play button" src={Play}></img>
                    <img className="playButton" alt="fastforward" src={Fastforward}></img>
                </div>
            </div>
            <div className="cardBack" onClick={() => setFlip(!flip)}>
                 <div className="cardHeader">
                    <h2> <strong>{name}</strong> </h2>
                    { back?.tech ? 
                        <h3> Technologies:&nbsp;
                             {back?.tech} 
                        </h3>
                    : null }
                    <h4>
                        {back?.back_link ? 
                        <div>
                            {back?.about} |&#160;
                            <a className="cardLink" href={back.back_link}>Link<br></br></a>
                        </div>
                        : <div> {back?.about} </div> }
                        {back?.about ? <div><br></br>  </div> : null  }
                        {back?.desc}
                        {back?.more}
                    </h4>
                </div>
            </div>
        </div>
    );
};