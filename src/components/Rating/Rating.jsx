import emptyStar from './emptyStar.png';
import fullStar from './fullStar.png';
import React from 'react';
/* create rating component */

export default function Rating({ rating }) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<img src = {fullStar} alt = "étoile pleine" key = {i} />);

    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img src = {emptyStar} alt = "étoile vide" key = {i + fullStars} />);
    }
    return (
        <div className = "rating">  {stars} </div>
    );
}


