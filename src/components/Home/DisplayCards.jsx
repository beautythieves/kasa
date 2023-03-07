import React from "react";
import accomodations from "../../data/data";
import Card from "./Card";
import "./DisplayCards.scss";
/**
 * 
 */
export default function DisplayCards() {
    return (
        <div className="home_accomodations_container">
        <ul className="accomodations" >
        {accomodations.map((accomodation) => (
            <Card
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
            />
        ))}
        </ul>
        </div>
    );
    }
