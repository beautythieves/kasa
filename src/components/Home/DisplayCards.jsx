import React from "react";
/* import accomodations from data */
import accomodations from "../../data/data";
/* import card accomodation */
import Card from "./Card";
/* import display card css */
import "./DisplayCards.css";
/* create display card for homepage*/
/**
 * 
 */
export default function DisplayCards() {
    return (
        <ul className="accomodations">
        {accomodations.map((accomodation) => (
            <Card
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
            />
        ))}
        </ul>
    );
    }
