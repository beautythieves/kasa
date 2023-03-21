import React from "react";
import "./Banner.scss";

export default function Banner({ image, text }) {
  const bannerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <p className="banner-text">{text}</p>
    </div>
  );
}
