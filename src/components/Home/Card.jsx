import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

/* create card accomodation*/

/**
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.cover
 * return card accomodation
 */
export default function Card({ id, title, cover }) {
  return (
    <article key={id} className="accomodation_card" >
      <Link to={"/accomodation/" + id}>
        <div className="accomodation_container">
          <img src={cover} alt={title} className="accomodation_img" aria-label={title} />
          <h2 className="accomodation_title">{title}</h2>
        </div>
      </Link>
    </article>
  );
}
