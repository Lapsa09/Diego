import React from "react";
import "./HeaderImages.css";

function HeaderImages({ imgUrl, alt, desc }) {
  return (
    <div className="img-container">
      <img src={imgUrl} alt={alt} />
      <p>{desc}</p>
    </div>
  );
}

export default HeaderImages;
