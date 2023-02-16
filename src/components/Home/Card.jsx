import React from "react";
import "./Card.css";

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
    <section className="containerCards">
      <li key={id} className="accomodation_card">
        <a href={"/accomodation/" + id}>
          <div className="accomodation_container">
            <img
              src={cover}
              alt={title}
              className="accomodation_img"
            />
            <h2 className="accomodation_title">{title}</h2>
          </div>
        </a>
      </li>
    </section>
  );
}
