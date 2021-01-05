import React from "react";
import "./Title.css";
import HeaderImages from "../imgs/HeaderImages";

function Title() {
  return (
    <div className="title">
      <h1>DIEGO ARMANDO MARADONA</h1>
      <h2>El pibe de oro</h2>
      <HeaderImages
        imgUrl="https://i.pinimg.com/originals/22/74/ab/2274ab2aa207117eeab1b656ffac8784.jpg"
        alt="Diego en el 86"
        desc="Diego en el mundial del 86"
      />
    </div>
  );
}

export default Title;
