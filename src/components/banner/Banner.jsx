import React from "react";
import "./Banner.scss";

export default function Banner({ image, text }) {
  return (
    <div className="banner" >
    <img src={image} alt="hhjlhjlkj" />
      <p className="banner-text">{text}</p>
    </div>
  );
}
