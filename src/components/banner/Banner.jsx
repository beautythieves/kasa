import React from "react";
import "./Banner.scss";

export default function Banner({ image, text }) {
  return (
    <div className="banner" style={{backgroundImage: `url(${image})`}}>
      <p className="banner-text">{text}</p>
    </div>
  );
}
