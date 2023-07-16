import React from "react";
import Card from "./card";
import '../../App.css';

export default function cardList ({ className, data }) {
    return (
        <div className={`cardList ${className ? className : "" }`}>
            {data.map((card) => 
                ( <Card 
                    name={card.name}
                    image={card.image} 
                    link={card.link}
                    title={card.title}
                    details={card.details}
                    back={card.back}
                /> ))
            }
        </div>
    )
};